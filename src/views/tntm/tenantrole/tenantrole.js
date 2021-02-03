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
    excelBtn: false,
    printBtn: false,
    column: [
		{
            label: '记录编号',
            prop: 'id',
            sortable: false,
 			hide:true,
			showColumn:false,
			display: false,
        },
		{
            label: '租户编号',
            prop: 'tenantId',
            sortable: false,
 			hide:true,
			showColumn:false,
			display: false,
        },
		{
            label: '角色编号',
            prop: 'roleId',
            sortable: false,
 			hide:true,
			showColumn:false,
			display: false,
        },
		{
            label: '角色级别',
            prop: 'level',
 			type: 'select',
			sortable: true,
			hide: false,
			showColumn: true,
            addDisplay: false,
            editDisplay: true,
            viewDisplay: true,
            disabled:true,
            slot: true,
            dicData: [
			{
                label: '平台级',
                value: 0
            },{
                label: '租户级',
                value: 10001
            },],
        },
		{
            label: '角色名称',
            prop: 'name',
            sortable: true,
			hide: false,
			showColumn: true,
            addDisplay: true,
            editDisplay: true,
            viewDisplay: true,
 			rules: [{
				required: true,
				message: '请输入角色名称',
				trigger: 'blur'
			}],
        },
		{
            label: '角色代码',
            prop: 'code',
            sortable: true,
			hide: false,
			showColumn: true,
            addDisplay: true,
            editDisplay: true,
            viewDisplay: true,
            editDisable: false,
 			rules: [{
				required: true,
				message: '请输入角色代码',
				trigger: 'blur'
			}],
        },
		{
            label: '角色简称',
            prop: 'alias',
            sortable: false,
			hide: true,
			showColumn: true,
            addDisplay: true,
            editDisplay: true,
            viewDisplay: true,
        },
		{
            label: '顺序号',
            prop: 'seq',
            sortable: true,
			hide: false,
			showColumn: true,
            addDisplay: true,
            editDisplay: true,
            viewDisplay: true,
        },
		{
            label: '角色描述',
            prop: 'description',
			type: 'textarea',
            sortable: false,
			hide: false,
			showColumn: true,
            addDisplay: true,
            editDisplay: true,
            viewDisplay: true,
			hide:true,
			span:24,
            minRows:3,
            maxlength:500,
        },
		{
            label: '角色类型',
            prop: 'type',
            sortable: false,
 			hide:true,
			showColumn:false,
			display: false,
        },
		{
            label: '使用类别',
            prop: 'tplMode',
            sortable: false,
 			hide: true,
            showColumn:true,
            display: false,
            type: 'select',
            dicData: [
                {
                    label: '必须有',
                    value: "MA"
                },{
                    label: '可选用',
                    value: "OP"
                }],    
        },
		{
            label: '记录状态',
            prop: 'rstate',
            sortable: false,
			hide: false,
			showColumn: true,
            addDisplay: false,
            editDisplay: true,
            viewDisplay: true,
            slot: true,
            type: 'radio',
            rules: [{
                required: true,
                message: '请选择启用状态',
                trigger: 'blur'
            }],
            dicData: [
			{
                label: '启用',
                value: "1"
            },{
                label: '停用',
                value: "0"
            },],
       },
		{
            label: '创建时间',
            prop: 'createTime',
            sortable: false,
			hide:true,
            addDisplay: false,
            editDisplay: true,
            viewDisplay: true,
			disabled:true,
        },
		{
            label: '修改时间',
            prop: 'updateTime',
            sortable: false,
 			hide:true,
            addDisplay: false,
            editDisplay: true,
            viewDisplay: true,
			disabled:true,
        },
    ]
}
