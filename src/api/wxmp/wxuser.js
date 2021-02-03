/**
 * Copyright (C) 2020
 * All rights reserved, Designed By AiCoder.

 */
import request from '@/router/axios'

export function getPage(query) {
  return request({
    url: '/weixin/wxuser/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/weixin/wxuser',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/weixin/wxuser/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/weixin/wxuser/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/weixin/wxuser',
    method: 'put',
    data: obj
  })
}

export function synchroWxUser(obj) {
  return request({
    url: '/weixin/wxuser/synchron',
    method: 'post',
    data: obj
  })
}

export function listUserTags(query) {
  return request({
    url: '/weixin/wxusertags/list',
    method: 'get',
    params: query
  })
}

export function addTags(obj) {
  return request({
    url: '/weixin/wxusertags',
    method: 'post',
    data: obj
  })
}

export function putTags(obj) {
  return request({
    url: '/weixin/wxusertags',
    method: 'put',
    data: obj
  })
}

export function delTags(query) {
  return request({
    url: '/weixin/wxusertags',
    method: 'delete',
    params: query
  })
}

export function updateRemark(obj) {
  return request({
    url: '/weixin/wxuser/remark',
    method: 'put',
    data: obj
  })
}

export function tagging(obj) {
  return request({
    url: '/weixin/wxuser/tagid-list',
    method: 'put',
    data: obj
  })
}
