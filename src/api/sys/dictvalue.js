/**
 * Copyright (C) 2020
 * All rights reserved, Designed By AiCoder.

 */
import request from '@/router/axios'

export function getPage2(query) {
    return request({
        url: '/sys/dictvalue/page',
        method: 'get',
        params: query
    })
}

export function addObj2(obj) {
    return request({
        url: '/sys/dictvalue',
        method: 'post',
        data: obj
    })
}

export function getObj2(id) {
    return request({
        url: '/sys/dictvalue/' + id,
        method: 'get'
    })
}

export function delObj2(id) {
    return request({
        url: '/sys/dictvalue/' + id,
        method: 'delete'
    })
}

export function putObj2(obj) {
    return request({
        url: '/sys/dictvalue',
        method: 'put',
        data: obj
    })
}
