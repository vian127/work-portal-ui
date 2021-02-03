/**
 * Copyright (C) 2020
 * All rights reserved, Designed By AiCoder.

 */
import request from '@/router/axios'

export function saveAndRelease(obj) {
  return request({
    url: '/weixin/wxmenu',
    method: 'post',
    data: obj
  })
}

export function getList(query) {
  return request({
    url: '/weixin/wxmenu/list',
    method: 'get',
    params: query
  })
}
