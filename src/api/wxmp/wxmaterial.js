/**
 * Copyright (C) 2020
 * All rights reserved, Designed By AiCoder.

 */
import request from '@/router/axios'

export function getPage(query) {
  return request({
    url: '/weixin/wxmaterial/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/weixin/wxmaterial/materialNews',
    method: 'post',
    data: obj
  })
}

export function materialNewsUpdate(obj) {
  return request({
    url: '/weixin/wxmaterial/materialNews',
    method: 'put',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/weixin/wxmaterial/' + id,
    method: 'get'
  })
}

export function delObj(query) {
  return request({
    url: '/weixin/wxmaterial',
    method: 'delete',
    params: query
  })
}

export function putObj(obj) {
  return request({
    url: '/weixin/wxmaterial',
    method: 'put',
    data: obj
  })
}

export function getMaterialOther(query) {
  return request({
    url: '/weixin/wxmaterial/materialOther',
    method: 'get',
    params: query,
    responseType: 'blob'
  })
}

export function getMaterialVideo(query) {
  return request({
    url: '/weixin/wxmaterial/materialVideo',
    method: 'get',
    params: query
  })
}

export function  getTempMaterialOther(query) {
  return request({
    url: '/weixin/wxmaterial/tempMaterialOther',
    method: 'get',
    params: query,
    responseType: 'blob'
  })
}
