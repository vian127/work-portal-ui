/**
 * Copyright (C) 2020
 * All rights reserved, Designed By www.ai-coder.net
 */
import request from '@/router/axios'

export function getPage(query) {
    return request({
        url: '/saas/appinfo/page',
        method: 'get',
        params: query
    })
}

export function getList(query) {
    return request({
        url: '/saas/appinfo/list',
        method: 'get',
        params: query
    })
}

export function addObj(obj) {
    return request({
        url: '/saas/appinfo',
        method: 'post',
        data: obj
    })
}

export function getObj(id) {
    return request({
        url: '/saas/appinfo/' + id,
        method: 'get'
    })
}

export function delObj(id) {
    return request({
        url: '/saas/appinfo/' + id,
        method: 'delete'
    })
}

export function putObj(obj) {
    return request({
        url: '/saas/appinfo',
        method: 'put',
        data: obj
    })
}
