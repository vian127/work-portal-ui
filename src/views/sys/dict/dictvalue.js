/**
 * Copyright (C) 2018-2019
 * All rights reserved, Designed By www.ai-coder.net
 */
 export const tableOption2 = {
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
    column: [
        {
            label: '记录编号',
            prop: 'id',
			hide:true,
			showColumn:false,
			display: false
        },
        {
            label: '租户编号',
            prop: 'tenantId',
			hide:true,
			showColumn:false,
			display: false
        },
        {
            label: '字典类型编号',
            prop: 'dictId',
            sortable: true,
			hide:true,
			showColumn:false,
			display: false
        },
        {
            label: '字典类型代码',
            prop: 'dictCode',
			hide:true,
			showColumn:false,
			display: false
        },
        {
            label: '标签名',
            prop: 'label',
            search: true,
            sortable: true,
            rules: [{
                required: true,
                message: '请输入标签名',
                trigger: 'blur'
            }]
        },
        {
            label: '数据值',
            search: true,
            sortable: true,
            prop: 'value',
            rules: [{
                required: true,
                message: '请输入数据值',
                trigger: 'blur'
            }]
        },
        {
            label: '参数描述',
            prop: 'description',
			hide:true,
			showColumn:true,
			display: false
        },
        {
            label: '父级参数值编号',
            prop: 'parentId',
            sortable: true,
			hide:true,
 			showColumn:true,
			display: false
		},
		{
            label: '顺序号',
            prop: 'seq',
            type: 'number',
            search: true,
            sortable: true,
            rules: [{
                required: true,
                message: '请输入顺序号',
                trigger: 'blur'
            }]
		},
        {
            label: '是否生效',
            prop: 'rstate',
            type: 'radio',
            search: true,
            sortable: true,
            addDisplay: false,
            slot: true,
            rules: [{
                required: true,
                message: '请选择启用状态',
                trigger: 'blur'
            }],
            dicData: [
			{
                label: '生效',
                value: "1"
            },{
                label: '失效',
                value: "0"
            },]
        },
        {
            label: '创建时间',
            prop: 'createTime',
            sortable: true,
 			hide:true,
            addDisplay: false,
            editDisplay: true,
            viewDisplay: true,
			disabled:true,
       },
       {
            label: '修改时间',
            prop: 'updateTime',
            sortable: true,
 			hide:true,
            addDisplay: false,
            editDisplay: true,
            viewDisplay: true,
			disabled:true,
        },

	]
}
