/**
 * Copyright (C) 2020
 * All rights reserved, Designed By AiCoder.
 */
import request from '@/router/axios'

export function getPage(query) {
    return request({
        url: '/tntm/tenantapp/page',
        method: 'get',
        params: query
    })
}

export function getObj(id) {
    return request({
        url: '/tntm/tenantapp/' + id,
        method: 'get'
    })
}

export function putObj(obj) {
    return request({
        url: '/tntm/tenantapp',
        method: 'put',
        data: obj
    })
}

export function delObj(id) {
    return request({
        url: '/tntm/tenantapp/' + id,
        method: 'delete'
    })
}

// 获取租户当前有效应用
export function getTenantNormalAppList(query) {
    return request({
        url: '/tntm/tenantapp/normalapplist',
        method: 'get',
        params: query
    })
}

// 查询SaaS应用
export function getSaasApps(query) {
    return request({
        url: '/tntm/tenantapp/saasapppage',
        method: 'get',
        params: query
    })
}

// 将SaaS应用增加为租户应用
export function addSaasApps(obj) {
    return request({
        url: '/tntm/tenantapp/saasapps',
        method: 'put',
        data: obj // currTid[String], appIds[String[]]
    })
}
