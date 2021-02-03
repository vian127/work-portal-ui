/**
 * Copyright (C) 2020
 * All rights reserved, Designed By AiCoder.

 */
export const tableOption = {
  dialogType: 'drawer',
  dialogWidth: '80%',
  border: true,
  stripe: true,
  menuAlign: 'center',
  align: 'center',
  menuWidth: 200,
  menuType: 'text',
  searchShow: false,
  excelBtn: true,
  printBtn: true,
  viewBtn: true,
  expand: true,
  defaultExpandAll: true,
  labelWidth: 120,
  column: [
    {
      label: 'logo',
      prop: 'logo',
      type:'upload',
      imgWidth:50,
      listType:'picture-img',
      editDisplay:false,
      addDisplay:false,
      hide:true
    },
    {
      label: '所属机构',
      prop: 'organId',
      hide: true,
      sortable:true,
      rules: [{
        required: true,
        message: '请选择机构',
        trigger: 'change'
      }],
      type: 'tree',
      search: true,
      props: {
        label: 'name',
        value: 'id'
      },
      defaultExpandAll: true,
      dicUrl: '/admin/organ/tree'
    },
    {
      label: '公众号名称',
      prop: 'name',
      align:'left',
      search:true,
      width: 260,
      slot:true,
      rules: [{
        required: true,
        message: "请输入微信号名称",
        trigger: "blur"
      }]
    },
    {
      label: '公众号类型',
      prop: 'weixinType',
      type: 'select',
      align:'left',
      dicUrl: '/admin/dict/type/weixin_type',
      sortable: true,
      search: true,
      slot: true,
      width: 170,
      rules: [{
        required: true,
        message: "请选择公众号类型",
        trigger: "blur"
      }]
    },
    {
      label: '认证类型',
      prop: 'verifyType',
      type: 'select',
      align:'left',
      dicUrl: '/admin/dict/type/wx_verify_type',
      sortable:true,
      search:true,
      slot:true,
      rules: [{
        required: true,
        message: "请选择认证类型",
        trigger: "blur"
      }]
    },
    {
      label: '微信原始ID',
      prop: 'weixinSign',
      search:true,
      hide:true,
      rules: [{
        required: true,
        message: "请输入微信原始ID",
        trigger: "blur"
      }]
    },
	  {
      label: 'AppID',
      prop: 'id',
      search:true,
      hide:true,
      rules: [{
        required: true,
        message: "请输入AppID",
        trigger: "blur"
      }]
    },
    {
      label: 'AppSecret',
      prop: 'secret',
      hide:true
    },
	  {
      label: '创建时间',
      prop: 'createTime',
      type: 'datetime',
      sortable:true,
      hide:true,
      editDisplay:false,
      addDisplay:false
    },
	  {
      label: '更新时间',
      prop: 'updateTime',
      type: 'datetime',
      sortable:true,
      hide:true,
      editDisplay:false,
      addDisplay:false
    },
    {
      label: 'token',
      prop: 'token',
      hide:true
    },
    {
      label: 'EnAESKey',
      prop: 'aesKey',
      hide:true
    },
    {
      label: '主体名称',
      prop: 'principalName',
      hide:true
    },
	  {
      label: '微社区URL',
      prop: 'community',
      hide:true
    },
	  {
      label: '备注信息',
      prop: 'remarks',
      hide:true
    },
  ]
}
