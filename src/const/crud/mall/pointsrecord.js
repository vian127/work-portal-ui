/**
 * Copyright (C) 2020
 * All rights reserved, Designed By AiCoder.

 */
export const tableOption = {
  dialogDrag: true,
  border: true,
  indexLabel: '序号',
  stripe: true,
  menuAlign: 'center',
  align: 'center',
  menuType: 'text',
  searchShow: false,
  excelBtn: true,
  printBtn: true,
  addBtn: false,
  editBtn: false,
  delBtn: false,
  menu: false,
  column: [
    {
      label: '用户编号',
      prop: 'userCode',
      search: true,
      slot: true
    },
    {
      label: '数量',
      prop: 'amount',
      sortable: true
    },
    {
      label: '描述',
      prop: 'description'
    },
    {
      label: '创建时间',
      prop: 'createTime',
      sortable: true
    },
  ]
}

export const tableOption2 = {
  dialogDrag: true,
  border: true,
  indexLabel: '序号',
  stripe: true,
  menuAlign: 'center',
  align: 'center',
  menuType: 'text',
  searchShow: false,
  addBtn: false,
  editBtn: false,
  delBtn: false,
  menu: false,
  refreshBtn: false,
  column: [
    {
      label: '数量',
      prop: 'amount',
      sortable: true
    },
    {
      label: '描述',
      prop: 'description'
    },
    {
      label: '创建时间',
      prop: 'createTime',
      sortable: true
    },
  ]
}