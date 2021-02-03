/**
 * Copyright (C) 2020
 * All rights reserved, Designed By AiCoder.
 */
import request from '@/router/axios'

export function getPage(query) {
    return request({
        url: '/tntm/tenantrole/page',
        method: 'get',
        params: query
    })
}

export function addObj(obj) {
    return request({
        url: '/tntm/tenantrole',
        method: 'post',
        data: obj
    })
}

export function getObj(id) {
    return request({
        url: '/tntm/tenantrole/' + id,
        method: 'get'
    })
}

export function delObj(id) {
    return request({
        url: '/tntm/tenantrole/' + id,
        method: 'delete'
    })
}

export function putObj(obj) {
    return request({
        url: '/tntm/tenantrole',
        method: 'put',
        data: obj
    })
}

// 查询还未引用的系统角色
export function getSysRoles(query) {
    return request({
        url: '/tntm/tenantrole/sysroles',
        method: 'get',
        params: query
    })
}

// 将SaaS平台角色增加为租户角色
export function addSysRoles(obj) {
    return request({
        url: '/tntm/tenantrole/addsysroles',
        method: 'put',
        data: obj // currTid[String], appIds[String[]]
    })
}

