/**
 * Copyright (C) 2020
 * All rights reserved, Designed By AiCoder.

 */
export const tableOption = {
  dialogDrag: true,
  border: true,
  index: true,
  indexLabel: '序号',
  stripe: true,
  menuAlign: 'center',
  align: 'center',
  menuType: 'text',
  searchShow: false,
  excelBtn: true,
  printBtn: true,
  column: [
	  {
      label: 'PK',
      prop: 'id',
      sortable:true
    },
	  {
      label: '所属租户',
      prop: 'tenantId',
      sortable:true
    },
	  {
      label: '逻辑删除标记（0：显示；1：隐藏）',
      prop: 'delFlag',
      sortable:true
    },
	  {
      label: '创建时间',
      prop: 'createTime',
      sortable:true
    },
	  {
      label: '最后更新时间',
      prop: 'updateTime',
      sortable:true
    },
	  {
      label: '创建者ID',
      prop: 'createId',
      sortable:true
    },
	  {
      label: '通知名',
      prop: 'name',
      sortable:true
    },
	  {
      label: '备注',
      prop: 'remarks',
      sortable:true
    },
  ]
}
