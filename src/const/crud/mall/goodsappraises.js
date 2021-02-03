/**
 * Copyright (C) 2020
 * All rights reserved, Designed By AiCoder.

 */
export const tableOption = {
  dialogDrag: true,
  border: true,
  stripe: true,
  menuAlign: 'center',
  align: 'center',
  menuType: 'text',
  searchShow: false,
  excelBtn: false,
  printBtn: false,
  delBtn: false,
  addBtn: false,
  viewBtn: false,
  editBtn: false,
  menu: false,
  column: [
	  {
      label: '用户',
      prop: 'nickName',
      editDisplay: false,
      slot:true,
    },
	  {
      label: '商品信息',
      prop: 'specInfo',
      width: 200,
      slot: true,
      editDisplay: false,
      align: 'left'
    },
    {
      label: '订单信息',
      prop: 'orderItem',
      width: 300,
      slot: true,
      editDisplay: false,
      align: 'left'
    },
	  {
      label: '商品评分',
      prop: 'goodsScore',
      sortable:true,
      slot:true,
      editDisplay: false,
      align: 'left'
    },
	  {
      label: '评论内容',
      prop: 'content',
      slot:true,
      formslot: true,
      align: 'left'
    },
    {
      label: '回复内容',
      prop: 'sellerReply',
      align: 'left',
      type: 'textarea',
      span: 24,
      hide: true
    }
  ]
}
