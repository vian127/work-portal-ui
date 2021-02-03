/**
 * Copyright (C) 2018-2019
 * All rights reserved, Designed By www.ai-coder.net
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
    column: [
        {
            label: '记录编号',
            prop: 'id',
            sortable: true,
			hide:true,
			showColumn:false,
			display: false,
        },
        {
            label: '租户编号',
            prop: 'tenantId',
            sortable: true,
			hide:true,
			showColumn:false,
			display: false
        },
        {
            label: '参数名称',
            prop: 'name',
            sortable: true,
			rules: [{
				required: true,
				message: '请输入参数名称',
				trigger: 'blur'
			}]
        },
        {
            label: '参数代码',
            prop: 'code',
            search: true,
            sortable: true,
			editDisabled:true,
			rules: [{
				required: true,
				message: '请输入参数代码',
				trigger: 'blur'
			}]
        },
        {
            label: '参数别名',
            prop: 'alias',
            sortable: true,
			hide:true,
			showColumn:false,
			display: false
        },
        {
            label: '参数描述',
            prop: 'description',
            sortable: false,
			hide:true,
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


