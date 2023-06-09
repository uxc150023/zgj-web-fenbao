// api 全局配置
import request from '@/utils/request'
/**
 * 业务规则
 */
const api = {}

/**
 * 列表请求
 * @param {*} params
 * @returns
 */
api.rulePage = params => {
  return request({
    method: 'GET',
    url: '/biz/rule/page',
    params
  })
}
/**
 * 新增业务规则
 * @param {*} data
 * @returns
 */
api.addOrUpdate = data => {
  return request({
    method: 'POST',
    url: '/biz/rule/addOrUpdate',
    data
  })
}
/**
 * 业务规则详情
 * @param {*} ruleBusinessId
 * @returns
 */
api.ruleView = ruleBusinessId => {
  return request({
    method: 'GET',
    url: `/biz/rule/view/${ruleBusinessId}`
  })
}
/**
 * 启用/停用
 * @param {*} data
 * @returns
 */
api.ruleEnable = data => {
  return request({
    method: 'POST',
    url: '/biz/rule/enable',
    data
  })
}
/**
 * 复制业务规则
 * @param {*} data
 * @returns
 */
api.ruleCopy = data => {
  return request({
    method: 'POST',
    url: '/biz/rule/copy',
    data
  })
}
/**
 * 批量删除
 * @param {*} data
 * @returns
 */
api.ruleBatchDelete = data => {
  return request({
    method: 'POST',
    url: '/biz/rule/batchDelete',
    data
  })
}
/**
 * 批量启用
 * @param {*} data
 * @returns
 */
api.ruleBatchEnable = data => {
  return request({
    method: 'POST',
    url: '/biz/rule/batchEnable',
    data
  })
}
// 停用业务规则
api.ruleDisable = data => {
  return request({
    method: 'POST',
    url: '/biz/rule/enable',
    data
  })
}
/**
 * 批量停用
 * @param {*} data
 * @returns
 */
api.ruleBatchDisable = data => {
  return request({
    method: 'POST',
    url: '/biz/rule/batchDisable',
    data
  })
}
/**
 * 关联文件类型
 * @param {*} data
 * @returns
 */
api.relationContractType = data => {
  return request({
    method: 'POST',
    url: '/biz/rule/relationContractType',
    data
  })
}

export default api
