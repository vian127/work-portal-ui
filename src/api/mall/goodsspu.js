/**
 * Copyright (C) 2020
 * All rights reserved, Designed By AiCoder.

 */
import request from '@/router/axios'

export function getPage(query) {
  return request({
    url: '/mall/goodsspu/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/mall/goodsspu',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/mall/goodsspu/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/mall/goodsspu/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/mall/goodsspu',
    method: 'put',
    data: obj
  })
}

export function putObjShelf(obj) {
  return request({
    url: '/mall/goodsspu/shelf',
    method: 'put',
    params: obj
  })
}