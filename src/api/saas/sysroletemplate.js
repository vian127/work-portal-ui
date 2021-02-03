/**
 * Copyright (C) 2018-2019
 * All rights reserved, Designed By www.ai-coder.net
 */
import request from '@/router/axios'

export function getPage2(query) {
    return request({
        url: '/saas/sysroletemplate/page',
        method: 'get',
        params: query
    })
}

export function batchSaveTpl(tplList) {
    return request({
        url: '/saas/sysroletemplate/batchSave',
        method: 'put',
        data: tplList
    })
}