/**
 * Copyright (C) 2020
 * All rights reserved, Designed By AiCoder.

 */
import request from '@/router/axios'

export function getPage(query) {
  return request({
    url: '/mall/goodscategory/page',
    method: 'get',
    params: query
  })
}

export function fetchTree(query) {
  return request({
    url: '/mall/goodscategory/tree',
    method: 'get',
    params: query
  })
}

export function fetchParentTree(query) {
  return request({
    url: '/mall/goodscategory/parentTree',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/mall/goodscategory',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/mall/goodscategory/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/mall/goodscategory/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/mall/goodscategory',
    method: 'put',
    data: obj
  })
}
