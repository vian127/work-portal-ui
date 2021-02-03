/**
 * Copyright (C) 2020
 * All rights reserved, Designed By AiCoder.
 */
import request from '@/router/axios'

// export function getPage(query) {
//     return request({
//         url: '/tntm/orginfo/page',
//         method: 'get',
//         params: query
//     })
// }

export function getAllTree(query) {
    return request({
        url: '/tntm/orginfo/allTree',
        method: 'get',
        params: query
    })
}

export function getTree(query) {
    return request({
        url: '/tntm/orginfo/tree',
        method: 'get',
        params: query
    })
}

export function addObj(obj) {
    return request({
        url: '/tntm/orginfo',
        method: 'post',
        data: obj
    })
}

export function getObj(id) {
    return request({
        url: '/tntm/orginfo/' + id,
        method: 'get'
    })
}

export function delObj(id) {
    return request({
        url: '/tntm/orginfo/' + id,
        method: 'delete'
    })
}

export function putObj(obj) {
    return request({
        url: '/tntm/orginfo',
        method: 'put',
        data: obj
    })
}
