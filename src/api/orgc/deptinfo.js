/**
 * Copyright (C) 2020
 * All rights reserved, Designed By AiCoder.
 * date 2021-01-28 14:42:49
 */
import request from '@/router/axios'

export function getPage(query) {
    return request({
        url: '/orgc/deptinfo/page',
        method: 'get',
        params: query
    })
}

export function addObj(obj) {
    return request({
        url: '/orgc/deptinfo',
        method: 'post',
        data: obj
    })
}

export function getObj(id) {
    return request({
        url: '/orgc/deptinfo/' + id,
        method: 'get'
    })
}

export function delObj(id) {
    return request({
        url: '/orgc/deptinfo/' + id,
        method: 'delete'
    })
}

export function putObj(obj) {
    return request({
        url: '/orgc/deptinfo/edit',
        method: 'put',
        data: obj
    })
}

export function getTree(query) {
    return request({
        url: '/orgc/departmentnode/tree',
        method: 'get',
        params: query
    })
}
export function editNodeInfo(obj) {
    return request({
        url: '/orgc/departmentnode/edit',
        method: 'put',
        data: obj
    })
}