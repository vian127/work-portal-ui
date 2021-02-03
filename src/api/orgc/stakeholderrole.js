/**
 * Copyright (C) 2020
 * All rights reserved, Designed By AiCoder.
 * date 2021-01-28 14:41:25
 */
import request from '@/router/axios'

export function getPage(query) {
    return request({
        url: '/orgc/stakeholderrole/page',
        method: 'get',
        params: query
    })
}

export function addObj(obj) {
    return request({
        url: '/orgc/stakeholderrole',
        method: 'post',
        data: obj
    })
}

export function getObj(id) {
    return request({
        url: '/orgc/stakeholderrole/' + id,
        method: 'get'
    })
}

export function delObj(id) {
    return request({
        url: '/orgc/stakeholderrole/' + id,
        method: 'delete'
    })
}

export function putObj(obj) {
    return request({
        url: '/orgc/stakeholderrole',
        method: 'put',
        data: obj
    })
}
