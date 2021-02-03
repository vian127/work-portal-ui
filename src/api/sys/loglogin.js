import request from '@/router/axios'

export function getPage (query) {
  return request({
    url: '/sys/loglogin/page',
    method: 'get',
    params: query
  })
}

export function getMyPage (query) {
  return request({
    url: '/sys/loglogin/mypage',
    method: 'get',
    params: query
  })
}

export function delObj (id) {
  return request({
    url: '/sys/loglogin/' + id,
    method: 'delete'
  })
}

export function addObj (obj) {
  return request({
    url: '/sys/loglogin/',
    method: 'post',
    data: obj
  })
}

export function getObj (id) {
  return request({
    url: '/sys/loglogin/' + id,
    method: 'get'
  })
}

export function putObj (obj) {
  return request({
    url: '/sys/loglogin/',
    method: 'put',
    data: obj
  })
}