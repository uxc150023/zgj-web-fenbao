/**
 * axios 实例
 */
import axios from 'axios'
import { API_BASE_PREFIX, TOKEN_HEADER_NAME } from './constants.js'
import { useAccountInfoStore } from '@/store/accountInfo'
import { ElMessage } from 'element-plus'
import router from '@/router/index'
const service = axios.create({
  baseURL: API_BASE_PREFIX,
  transformResponse: [
    function (data) {
      // eslint-disable-next-line no-undef
      return jsonlint.parse(data)
    }
  ],
  timeout: 10000
})

/**
 * 处理错误响应
 */
const processErrorResponse = function (response) {
  // null ？
  if (response.data && response.data.code === 401) {
    ElMessage({
      message: '登录超时，请重新登录',
      grouping: true,
      type: 'error'
    })
    localStorage.removeItem('tenantId')
    localStorage.removeItem('menusInfo')
    localStorage.removeItem('departLists')
    const accountInfo = JSON.parse(localStorage.getItem('accountInfo'))
    accountInfo.token = ''
    accountInfo.userInfo.userName = ''
    accountInfo.userInfo.userId = ''
    localStorage.setItem('accountInfo', JSON.stringify(accountInfo))
    console.log(router.currentRoute.value)
    router.replace({
      path: '/login/account',
      // 保存我们所在的位置，以便以后再来
      query: {
        redirect: encodeURIComponent(router.currentRoute.value.fullPath)
      }
    })
    return Promise.reject(response || response.data)
  }
  if (!response.config.hideError && !response.data.data) {
    // 提示错误信息
    ElMessage({
      message: response
        ? response.data.msg ||
          response.data.message ||
          '服务器打盹了，请稍后再试'
        : '服务器打盹了，请稍后再试',
      grouping: true,
      type: 'error'
    })
  }

  return Promise.reject(response.data)
}

/**
 * 添加请求拦截器
 */
service.interceptors.request.use(
  config => {
    const accountInfo = useAccountInfoStore()
    // 添加 token 到 header
    if (accountInfo.token && config.headers) {
      config.headers[TOKEN_HEADER_NAME] = accountInfo.token
    }
    if (config.isForm) {
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }
    config.headers.terminalType = 'PC'
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

/**
 * 添加响应拦截器
 */
service.interceptors.response.use(
  res => {
    const { status, data } = res
    if (status === 200) {
      if (data.code === 200) {
        return data
      } else if (
        data.code === 210600 ||
        data.code === 210203 ||
        data.code === 210204 ||
        data.code === 210207 ||
        data.code === 210208
      ) {
        // 登录获取滑块 和 二维码状态返回
        return data
      } else if (data.code === '00000') {
        // 流程引擎
        return res
      } else {
        return processErrorResponse(res)
      }
    }
    // return res
  },
  error => {
    // 处理响应错误
    return processErrorResponse(error.response)
  }
)

export default service
