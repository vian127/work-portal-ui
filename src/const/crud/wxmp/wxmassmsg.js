/**
 * Copyright (C) 2020
 * All rights reserved, Designed By AiCoder.

 */
export const tableOption = {
  dialogDrag:true,
  border: true,
  index: false,
  indexLabel: '序号',
  stripe: true,
  menuAlign: 'center',
  align: 'center',
  menuType:'text',
  searchShow:false,
  addBtn:false,
  excelBtn: true,
  editBtn: false,
  delBtn: false,
  printBtn: true,
  defaultSort:{
    prop:'createTime',
    order:'descending'
  },
  column: [
	  {
      label: '创建时间',
      prop: 'createTime',
      width: 180,
      sortable:true
    },
	  {
      label: '是否全部用户',
      prop: 'isToAll',
      type: 'select',
      dicUrl: '/admin/dict/type/yes_no',
      search:true,
      sortable:true
    },
	  {
      label: '消息类型',
      prop: 'repType',
      type: 'select',
      dicUrl: '/admin/dict/type/wx_rep_type',
      search:true,
      sortable:true
    },
    {
      label: '内容',
      prop: 'repContent',
      overHidden: true,
      align: 'left',
      width: 350,
      slot:true
    },
	  {
      label: 'mediaID',
      prop: 'repMediaId',
      hide:true,
      sortable:true
    },
	  {
      label: '标题',
      prop: 'repName',
      hide:true,
      sortable:true
    },
	  {
      label: '描述',
      prop: 'repDesc',
      hide:true,
      sortable:true
    },
	  {
      label: '链接',
      prop: 'repUrl',
      hide:true,
      sortable:true
    },
	  {
      label: '高质量链接',
      prop: 'repHqUrl',
      hide:true,
      sortable:true
    },
	  {
      label: '缩略图的媒体id',
      prop: 'repThumbMediaId',
      hide:true,
      sortable:true
    },
	  {
      label: '缩略图url',
      prop: 'repThumbUrl',
      hide:true,
      sortable:true
    },
	  {
      label: '图文消息的内容',
      prop: 'content',
      hide:true,
      sortable:true
    },
	  {
      label: '群发消息后返回的消息id',
      prop: 'msgId',
      hide:true,
      sortable:true
    },
	  {
      label: '消息发送状态',
      prop: 'msgStatus',
      dicUrl: '/admin/dict/type/wx_mass_msg_status',
      search:true,
      sortable:true
    },
	  {
      label: '发送的总数',
      prop: 'totalCount',
      sortable:true
    },
    {
      label: '过滤后总数',
      prop: 'filterCount',
      sortable:true
    },
	  {
      label: '发送成功数',
      prop: 'sentCount',
      sortable:true
    },
	  {
      label: '发送失败数',
      prop: 'errorCount',
      sortable:true
    }
  ]
}
