/**
 * Copyright (C) 2020
 * All rights reserved, Designed By AiCoder.

 */
export const tableOption = {
  dialogDrag: true,
  border: true,
  index: false,
  indexLabel: '序号',
  stripe: true,
  menuAlign: 'center',
  align: 'center',
  menuType: 'text',
  searchShow: false,
  excelBtn: true,
  printBtn: true,
  addBtn: false,
  delBtn: false,
  column: [
    {
      label: '用户编码',
      prop: 'userCode',
      sortable: true,
      search: true,
      editDisabled: true
    },
    {
      label: '昵称',
      prop: 'nickName'
    },
    {
      label: '头像',
      prop: 'headimgUrl',
      type: 'upload',
      imgWidth:50,
      listType:'picture-img',
    },
    {
      label: '所在国家',
      prop: 'country',
      sortable:true,
      search:true,
      editDisplay:false
    },
    {
      label: '所在省份',
      prop: 'province',
      sortable:true,
      editDisplay:false
    },
    {
      label: '所在城市',
      prop: 'city',
      sortable:true,
      search:true,
      editDisplay:false
    },
    {
      label: '性别',
      prop: 'sex',
      sortable: true,
      type: 'select',
      dicUrl: '/admin/dict/type/wx_sex'
    },
    {
      label: '当前积分',
      prop: 'pointsCurrent',
      sortable: true,
      editDisabled: true,
      slot:true
    },
    {
      label: '手机号码',
      prop: 'phone',
      sortable: true,
      search: true
    },
    {
      label: '创建时间',
      prop: 'createTime',
      sortable: true
    },
  ]
}
