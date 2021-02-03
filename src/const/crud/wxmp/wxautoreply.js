/**
 * Copyright (C) 2020
 * All rights reserved, Designed By AiCoder.

 */
export const tableOption1 = {
  dialogDrag:true,
  border: true,
  index: true,
  indexLabel: '序号',
  stripe: true,
  menuAlign: 'center',
  align: 'center',
  menuType:'text',
  addBtn:false,
  delBtn:false,
  editBtn:false,
  searchShow:false,
  // defaultSort:{
  //    prop: 'id',
  //    order: 'descending'
  // },
  column: [
    {
      label: '回复消息类型',
      prop: 'repType',
      type: 'select',
      dicUrl: '/admin/dict/type/wx_rep_type'
    }
  ]
}
export const tableOption2 = {
  dialogDrag:true,
  border: true,
  index: true,
  indexLabel: '序号',
  stripe: true,
  menuAlign: 'center',
  align: 'center',
  menuType:'text',
  searchShow:false,
  addBtn:false,
  delBtn:false,
  editBtn:false,
  // defaultSort:{
  //    prop: 'id',
  //    order: 'descending'
  // },
  column: [
    {
      label: '请求消息类型',
      prop: 'reqType',
      type: 'select',
      dicUrl: '/admin/dict/type/wx_req_type',
      sortable:true
    },
    {
      label: '回复消息类型',
      prop: 'repType',
      type: 'select',
      dicUrl: '/admin/dict/type/wx_rep_type',
      sortable:true
    }
  ]
}
export const tableOption3 = {
  dialogDrag:true,
  border: true,
  index: true,
  indexLabel: '序号',
  stripe: true,
  menuAlign: 'center',
  align: 'center',
  menuType:'text',
  searchShow:false,
  addBtn:false,
  delBtn:false,
  editBtn:false,
  // defaultSort:{
  //    prop: 'id',
  //    order: 'descending'
  // },
  column: [
	  {
      label: '关键词',
      prop: 'reqKey',
      search:true,
      sortable:true
    },
    {
      label: '匹配类型',
      prop: 'repMate',
      type: 'select',
      dicUrl: '/admin/dict/type/wx_rep_mate',
      sortable:true
    },
	  {
      label: '回复消息类型',
      prop: 'repType',
      type: 'select',
      dicUrl: '/admin/dict/type/wx_rep_type',
      sortable:true
    }
  ]
}
