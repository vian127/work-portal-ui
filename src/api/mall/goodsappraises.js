/**
 * Copyright (C) 2020
 * All rights reserved, Designed By AiCoder.

 */
import request from '@/router/axios'

export function getPage(query) {
  return request({
    url: '/mall/goodsappraises/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/mall/goodsappraises',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/mall/goodsappraises/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/mall/goodsappraises/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/mall/goodsappraises',
    method: 'put',
    data: obj
  })
}
