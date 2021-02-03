/**
 * Copyright (C) 2020
 * All rights reserved, Designed By www.aicoder.net
 */
import request from '@/router/axios'

export function getRoleAppResTree(query) {
    return request({
        url: '/saas/roleresource/roleAppResTree',
        method: 'get',
        params: query // roleId[String], appId[String]
    })
}

export function putRoleAppReses(obj) {
    return request({
        url: '/saas/roleresource/roleAppReses',
        method: 'put',
        data: obj // roleId[String], menuIds[String[]]
    })
}


