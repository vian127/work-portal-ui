/**
 * Copyright (C) 2020
 * All rights reserved, Designed By AiCoder.

 */
import request from '@/router/axios'

export function getPage(query) {
  return request({
    url: '/weixin/wxapp/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/weixin/wxapp',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/weixin/wxapp/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/weixin/wxapp/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/weixin/wxapp',
    method: 'put',
    data: obj
  })
}

export function createQrCode(obj) {
  return request({
    url: '/weixin/wxapp/qrCode',
    method: 'post',
    data: obj
  })
}

export function clearQuota(obj) {
  return request({
    url: '/weixin/wxapp/quota',
    method: 'put',
    data: obj
  })
}

export function getAccessToken(query) {
  return request({
    url: '/weixin/wxapp/access-token',
    method: 'get',
    params: query
  })
}

export function getUserSummary(query) {
  return request({
    url: '/weixin/wxapp/usersummary',
    method: 'get',
    params: query
  })
}

export function getUserCumulate(query) {
  return request({
    url: '/weixin/wxapp/usercumulate',
    method: 'get',
    params: query
  })
}

export function getInterfaceSummary(query) {
  return request({
    url: '/weixin/wxapp/interfacesummary',
    method: 'get',
    params: query
  })
}

export function getAuthorizerInfo(id) {
  return request({
    url: '/weixin/open/api/authorizer-info/' + id,
    method: 'get'
  })
}
