import request from '@/router/axios'
const scope = 'server'

export const loginByUsername = (username, password, code, randomStr) => {
  const grant_type = 'password'
  return request({
    url: '/auth/oauth/token',
    headers: {
      isToken:false,
      'Authorization': 'Basic YWRtaW46YWRtaW4='
    },
    method: 'post',
    params: { username, password, randomStr, code, grant_type, scope }
  })
}

export const refreshToken = (refresh_token) => {
  const grant_type = 'refresh_token'
  return request({
    url: '/auth/oauth/token',
    headers: {
      'isToken': false,
      'Authorization': 'Basic YWRtaW46YWRtaW4=',
    },
    method: 'post',
    params: { refresh_token, grant_type, scope }
  })
}

export const loginByMobile = (mobile, code) => {
  const grant_type = 'mobile'
  return request({
    url: '/auth/mobile/token/sms',
    headers: {
      'Authorization': 'Basic YWRtaW46YWRtaW4='
    },
    method: 'post',
    params: { mobile: 'SMS@' + mobile, code: code, grant_type }
  })
}

export const loginByThirdParty = (state, code) => {
  const grant_type = 'mobile'
  return request({
    url: '/auth/mobile/token/thirdparty',
    headers: {
      'Authorization': 'Basic YWRtaW46YWRtaW4='
    },
    method: 'post',
    params: { mobile: state + '@' + code, grant_type }
  })
}

export const getUserInfo = () => {
  return request({
    url: '/saas/saaspuser/info',
    method: 'get'
  })
}

/** added by stoneshi 20200131 begin */
export function getMenu () {
  return request({
    url: '/saas/saaspuser/menu',
    method: 'get'
  })
}
/** added by stoneshi 20200131 end */

export const logout = () => {
  return request({
    url: '/auth/token/logout',
    method: 'delete'
  })
}
