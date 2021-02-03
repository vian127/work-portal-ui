/**
 * Copyright (C) 2020
 * All rights reserved, Designed By AiCoder.

 */
import request from '@/router/axios'

export function getPage(query) {
    return request({
        url: '/getnt/ouapply/page',
        method: 'get',
        params: query
    })
}

export function tempSaveObj(obj) {
    return request({
        url: '/getnt/ouapply/tempsave',
        method: 'post',
        data: obj
    })
}


export function addObj(obj) {
    return request({
        url: '/getnt/ouapply',
        method: 'post',
        data: obj
    })
}

export function getObj(id) {
    return request({
        url: '/getnt/ouapply/' + id,
        method: 'get'
    })
}

export function delObj(id) {
    return request({
        url: '/getnt/ouapply/' + id,
        method: 'delete'
    })
}

export function putObj(obj) {
    return request({
        url: '/getnt/ouapply',
        method: 'put',
        data: obj
    })
}

export function approveObj(obj) {
    return request({
        url: '/getnt/ouapply/approve',
        method: 'put',
        data: obj
    })
}

