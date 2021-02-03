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
  column: [
	  {
      label: '父分类',
      prop: 'parentId',
      type: 'tree',
      hide: true,
      dicUrl: '/mall/goodscategory/parentTree',
      props: {
        label: 'name',
        value: 'id'
      },
      rules: [{
        required: true,
        message: '请选择父分类',
        trigger: 'change'
      }]
    },
	  {
      label: '名称',
      prop: 'name',
      align: 'left',
    },
    {
      label: '图片',
      prop: 'picUrl',
      width: 250,
      dataType: 'array',
      slot: true,
      formslot: true,
      rules: [{
        type: 'array',
        required: true,
        message: '图片不能为空',
        trigger: 'change'
      }]
    },
	  {
      label: '排序',
      type: 'number',
      prop: 'sort',
      rules: [{
        required: true,
        message: '排序不能为空',
        trigger: 'blur'
      }]
    },
    {
      label: '描述',
      prop: 'description',
      hide: true
    },
	  {
      label: '创建时间',
      prop: 'createTime',
      editDisplay:false,
      addDisplay:false
    },
	  {
      label: '更新时间',
      prop: 'updateTime',
      editDisplay:false,
      addDisplay:false
    },
  ]
}
