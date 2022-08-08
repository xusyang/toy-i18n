import request from '@/utils/request'
import { tansParams } from '@/utils/ruoyi'

// 查询角色列表
export function listRole(query) {
  return request({
    url: '/system/role/list',
    method: 'get',
    params: query,
  })
}

// 查询角色详细
export function getRole(roleId) {
  return request({
    url: '/system/role/' + roleId,
    method: 'get',
  })
}

// 新增角色
export function addRole(data) {
  return request({
    url: '/system/role',
    method: 'post',
    data: data,
  })
}

// 修改角色
export function updateRole(data) {
  return request({
    url: '/system/role',
    method: 'put',
    data: data,
  })
}

// 角色数据权限
export function dataScope(data) {
  return request({
    url: '/system/role/dataScope',
    method: 'put',
    data: data,
  })
}

// 角色状态修改
export function changeRoleStatus(id, status) {
  const data = {
    id,
    status,
  }
  return request({
    url: '/system/role/changeStatus',
    method: 'put',
    data: data,
  })
}

// 删除角色
export function delRole(roleId) {
  return request({
    url: '/system/role/' + roleId,
    method: 'delete',
  })
}

// 查询角色已授权用户列表
export function allocatedUserList(query) {
  return request({
    url: '/system/role/authUser/allocatedList',
    method: 'get',
    params: query,
  })
}

// 查询角色未授权用户列表
export function unallocatedUserList(query) {
  return request({
    url: '/system/role/authUser/unallocatedList',
    method: 'get',
    params: query,
  })
}

// 取消用户授权角色
export function authUserCancel(data) {
  return request({
    url: '/system/role/authUser/cancel',
    method: 'put',
    data: data,
  })
}

// 批量取消用户授权角色
export function authUserCancelAll(data) {
  return request({
    url: '/system/role/authUser/cancelAll?' + tansParams(data),
    method: 'put',
    data: {},
  })
}

// 授权用户选择
export function authUserSelectAll(data) {
  return request({
    url: '/system/role/authUser/selectAll?'+tansParams(data),
    method: 'put',
    data: {},
  })
}

export function checkedKeys(roleId, table, field) {
  return request({
    url: `/system/role/dim/${roleId}/ca_${table}.${field}_code`,
    method: 'get',
  })
}

export function setCheckedKeys(data) {
  return request({
    url: `/system/role/dim/batch`,
    method: 'post',
    isNeedClearEmpty: false,
    data,
  })
}
