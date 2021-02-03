/**
 * Copyright (C) 2018-2019
 * All rights reserved, Designed By www.ai-coder.net
 */
import request from '@/router/axios'

export function getPage2(query) {
    return request({
        url: '/saas/apptemplate/page',
        method: 'get',
        params: query
    })
}

export function addObj2(obj) {
    return request({
        url: '/saas/apptemplate',
        method: 'post',
        data: obj
    })
}

export function getObj2(id) {
    return request({
        url: '/saas/apptemplate/' + id,
        method: 'get'
    })
}

export function delObj2(id) {
    return request({
        url: '/saas/apptemplate/' + id,
        method: 'delete'
    })
}

export function putObj2(obj) {
    return request({
        url: '/saas/apptemplate',
        method: 'put',
        data: obj
    })
}

export function batchSaveTpl(tplList) {
    return request({
        url: '/saas/apptemplate/batchSave',
        method: 'put',
        data: tplList
    })
}