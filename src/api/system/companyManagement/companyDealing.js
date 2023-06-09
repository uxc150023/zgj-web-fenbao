// api 全局配置
import request from '@/utils/request'
// 往来企业
const api = {}

// ================
// 获取往来企业列表
api.getRelatedCompanyList = params => {
  return request({
    method: 'GET',
    url: `/tenant/relatedCompany/list`,
    params
  })
}

// 新增往来企业
api.addRelatedCompany = data => {
  return request({
    method: 'POST',
    url: '/tenant/relatedCompany/add',
    data
  })
}

// 修改往来企业
api.updateRelatedCompany = data => {
  return request({
    method: 'POST',
    url: '/tenant/relatedCompany/update',
    data
  })
}

// 删除往来企业
api.deleteRelatedCompany = data => {
  return request({
    method: 'POST',
    url: '/tenant/relatedCompany/delete',
    data
  })
}

// 批量导入往来企业
api.batchImportRelatedCompany = params => {
  return request({
    method: 'GET',
    url: '/tenant/relatedCompany/batchImport',
    params
  })
}

// 查询往来单位详细
api.detailRelatedCompany = relatedCompanyId => {
  return request({
    method: 'GET',
    url: `/tenant/relatedCompany/detail/${relatedCompanyId}`
  })
}
// 获取往来企业公司编码
api.detailGetRelatedCompanyNo = relatedCompanyId => {
  return request({
    method: 'GET',
    url: `/tenant/relatedCompany/getRelatedCompanyNo`
  })
}
export default api
