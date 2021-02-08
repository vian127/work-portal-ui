/**
 * Copyright (C) 2020
 * All rights reserved, Designed By AiCoder.
 * date 2021-01-28 14:38:06
 */
import request from '@/router/axios'

export function getPage(query) {
    return request({
        url: '/orgc/orgversion/page',
        method: 'get',
        params: query
    })
}

export function addObj(obj) {
    return request({
        url: '/orgc/orgversion/add',
        method: 'post',
        data: obj
    })
}

export function getObj(id) {
    return request({
        url: '/orgc/orgversion/' + id,
        method: 'get'
    })
}

export function delObj(id) {
    return request({
        url: '/orgc/orgversion/' + id,
        method: 'delete'
    })
}

export function putObj(obj) {
    return request({
        url: '/orgc/orgversion/edit',
        method: 'post',
        data: obj
    })
}

// 查询组织结构树
export function getTree(obj) {
    return request({
        url: '/orgc/departmentnode/tree',
        method: 'get',
        params: obj
    })
}
// 新增组织结构节点
export function addTree(obj) {
    return request({
        url: '/orgc/departmentnode/add',
        method: 'post',
       
        params: obj,
    })
}
// 编辑组织结构节点
export function editTree(obj) {
    return request({
        url: '/departmentnode/edit',
        method: 'post',
        params: obj
    })
}
// 组织结构节点失效
export function deleteTree(id) {
    return request({
        url: '/departmentnode/'+ id,
        method: 'delete'
    })
}