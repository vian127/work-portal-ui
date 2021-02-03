import request from '@/router/axios'
const scope = 'server'

export function register(obj) {
    return request({
      url: '/saas/account/register',
      method: 'post',
      data: obj
    })
  }

export function updateUser(obj) {
    return request({
        url: '/saas/accountmgmt/edit',
        method: 'put',
        data: obj
      })
}

export function getUserAccountLogins(accountId) {
    return request({
        url: '/saas/accountmgmt/accountlogins/' + accountId,
        method: 'get'
    })
}

export function changePassword(obj) {
    return request({
        url: '/saas/accountmgmt/changepassword',
        method: 'put',
        data: obj
      })
}

