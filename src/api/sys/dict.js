/**
 * Copyright (C) 2020
 * All rights reserved, Designed By AiCoder.

 */
import request from '@/router/axios'

export function getPage(query) {
    return request({
        url: '/sys/dict/page',
        method: 'get',
        params: query
    })
}

export function addObj(obj) {
    return request({
        url: '/sys/dict',
        method: 'post',
        data: obj
    })
}

export function getObj(id) {
    return request({
        url: '/sys/dict/' + id,
        method: 'get'
    })
}

export function delObj(id) {
    return request({
        url: '/sys/dict/' + id,
        method: 'delete'
    })
}

export function putObj(obj) {
    return request({
        url: '/sys/dict',
        method: 'put',
        data: obj
    })
}

export function remote(type) {
  return request({
    url: '/sys/dict/type/' + type,
    method: 'get'
  })
}

