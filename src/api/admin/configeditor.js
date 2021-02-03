/**
 * Copyright (C) 2020
 * All rights reserved, Designed By AiCoder.

 */
import request from '@/router/axios'

export function getPage(query) {
    return request({
        url: '/admin/configeditor/page',
        method: 'get',
        params: query
    })
}

export function addObj(obj) {
    return request({
        url: '/admin/configeditor',
        method: 'post',
        data: obj
    })
}

export function getObj(id) {
    return request({
        url: '/admin/configeditor/' + id,
        method: 'get'
    })
}

export function delObj(id) {
    return request({
        url: '/admin/configeditor/' + id,
        method: 'delete'
    })
}

export function putObj(obj) {
    return request({
        url: '/admin/configeditor',
        method: 'put',
        data: obj
    })
}

export function getObj2() {
    return request({
        url: '/admin/configeditor',
        method: 'get'
    })
}