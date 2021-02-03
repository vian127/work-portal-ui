/**
 * Copyright (C) 2020
 * All rights reserved, Designed By AiCoder.

 */
import request from '@/router/axios'

export function getAppAllTree(query) {
    return request({
        url: '/saas/appresource/appAllTree',
        method: 'get',
        params: query
    })
}

export function getAppMenuTree(appId) {
    return request({
        url: '/saas/appresource/appMenuTree/' + appId,
        method: 'get',
    })
}


export function getPage(query) {
    return request({
        url: '/saas/appresource/page',
        method: 'get',
        params: query
    })
}

export function addObj(obj) {
    return request({
        url: '/saas/appresource',
        method: 'post',
        data: obj
    })
}

export function getObj(id) {
    return request({
        url: '/saas/appresource/' + id,
        method: 'get'
    })
}

export function delObj(id) {
    return request({
        url: '/saas/appresource/' + id,
        method: 'delete'
    })
}

export function putObj(obj) {
    return request({
        url: '/saas/appresource',
        method: 'put',
        data: obj
    })
}
