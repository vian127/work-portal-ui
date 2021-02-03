/**
 * Copyright (C) 2020
 * All rights reserved, Designed By AiCoder.

 */
import request from '@/router/axios'

export function getPage(query) {
    return request({
        url: '/sys/country/page',
        method: 'get',
        params: query
    })
}

export function addObj(obj) {
    return request({
        url: '/sys/country',
        method: 'post',
        data: obj
    })
}

export function getObj(id) {
    return request({
        url: '/sys/country/' + id,
        method: 'get'
    })
}

export function delObj(id) {
    return request({
        url: '/sys/country/' + id,
        method: 'delete'
    })
}

export function putObj(obj) {
    return request({
        url: '/sys/country',
        method: 'put',
        data: obj
    })
}
