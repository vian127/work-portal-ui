/**
 * Copyright (C) 2020
 * All rights reserved, Designed By AiCoder.

 */
export const tableOption = {
  dialogDrag:true,
  border: true,
  stripe: true,
  menuAlign: 'center',
  align: 'center',
  menuType:'text',
  editBtn: false,
  delBtn: false,
  addBtn: false,
  viewBtn: false,
  searchBtn: true,
  excelBtn: true,
  printBtn: true,
  defaultSort:{
    prop:'createTime',
    order:'descending'
  },
  column: [
    {
      label: '消息类型',
      prop: 'repType',
      type: 'select',
      dicUrl: '/admin/dict/type/wx_req_type',
      search:true,
      sortable:true
    },
    {
      label: '用户',
      prop: 'headimgUrl',
      overHidden: false,
      align: 'right',
      search:true,
      slot:true
    },{
      label: '内容',
      prop: 'repContent',
      overHidden: true,
      align: 'left',
      slot:true
    },{
      label: '时间',
      type: 'date',
      align: 'right',
      prop: 'createTime',
      sortable:true
    },
	  {
      label: '是否已读',
      prop: 'readFlag',
      type: 'select',
      dicUrl: '/admin/dict/type/yes_no',
      search:true,
      sortable:true,
      slot:true
    }
  ]
}
