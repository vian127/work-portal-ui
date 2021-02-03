/**
 * Copyright (C) 2020
 * All rights reserved, Designed By AiCoder.
 * date 2021-01-28 14:25:08
 */
import request from '@/router/axios'
import apiPrefix from '../../const/apiPrefix'
export function getPage(query) {
    return request({
        url: apiPrefix.orgc + '/orgc/companyinfo/page',
        method: 'get',
        params: query
    })
}

export function addObj(obj) {
    return request({
        url: apiPrefix.orgc + '/orgc/companyinfo',
        method: 'post',
        data: obj
    })
}

export function getObj(id) {
    return request({
        url: apiPrefix.orgc + '/orgc/companyinfo/' + id,
        method: 'get'
    })
}

export function delObj(id) {
    return request({
        url: apiPrefix.orgc + '/orgc/companyinfo/' + id,
        method: 'delete'
    })
}

export function putObj(obj) {
    return request({
        url: apiPrefix.orgc + '/orgc/companyinfo',
        method: 'put',
        data: obj
    })
}
