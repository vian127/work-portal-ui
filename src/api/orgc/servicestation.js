/**
 * Copyright (C) 2020
 * All rights reserved, Designed By AiCoder.
 * date 2021-01-28 14:41:41
 */
import request from '@/router/axios'

export function getPage(query) {
    return request({
        url: '/orgc/servicestation/page',
        method: 'get',
        params: query
    })
}

export function addObj(obj) {
    return request({
        url: '/orgc/servicestation',
        method: 'post',
        data: obj
    })
}

export function getObj(id) {
    return request({
        url: '/orgc/servicestation/' + id,
        method: 'get'
    })
}

export function delObj(id) {
    return request({
        url: '/orgc/servicestation/' + id,
        method: 'delete'
    })
}

export function putObj(obj) {
    return request({
        url: '/orgc/servicestation',
        method: 'put',
        data: obj
    })
}
