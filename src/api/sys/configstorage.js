/**
 * Copyright (C) 2020
 * All rights reserved, Designed By AiCoder.

 */
import request from '@/router/axios'

export function getPage(query) {
    return request({
        url: '/sys/configstorage/page',
        method: 'get',
        params: query
    })
}

export function addObj(obj) {
    return request({
        url: '/sys/configstorage',
        method: 'post',
        data: obj
    })
}

export function getObj(id) {
    return request({
        url: '/sys/configstorage/' + id,
        method: 'get'
    })
}

export function delObj(id) {
    return request({
        url: '/sys/configstorage/' + id,
        method: 'delete'
    })
}

export function putObj(obj) {
    return request({
        url: '/sys/configstorage',
        method: 'put',
        data: obj
    })
}

export function getObj2() {
    return request({
        url: '/sys/configstorage',
        method: 'get'
    })
}
