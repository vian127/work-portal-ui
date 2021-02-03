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
    addBtn: false,
    excelBtn: false,
    printBtn: false,
    column: [
		{
            label: '记录编号',
            prop: 'id',
            sortable: false,
			hide: true,
			showColumn: false,
			display: false,
        },
		{
            label: '租户编号',
            prop: 'tenantId',
            sortable: false,
			hide: true,
			showColumn: false,
			display: false,
        },
		{
            label: '应用编号',
            prop: 'appId',
            sortable: false,
			hide: true,
			showColumn: false,
			display: false,
        },
		{
            label: '应用名称',
            prop: 'name',
            sortable: true,
            search: true,
			hide: false,
			showColumn: true,
            addDisplay: true,
            editDisplay: true,
            viewDisplay: true,
			display: true,
			disabled:true,
        },
		{
            label: '应用代码',
            prop: 'code',
            sortable: true,
            search: true,
			hide: false,
			showColumn: true,
            addDisplay: true,
            editDisplay: true,
            viewDisplay: true,
			display: true,
			disabled:true,
        },
		{
            label: '应用类型',
            prop: 'type',
            sortable: false,
			hide: false,
			showColumn: true,
            search: true,
            sortable: true,
			type: 'select',
			dicUrl: '/sys/dict/type/saas_app_type',
            addDisplay: true,
            editDisplay: true,
            viewDisplay: true,
			display: true,
			disabled:true,
        },
		{
            label: '安装类型',
            prop: 'tplMode',
            sortable: false,
            search: true,
            type: 'select',
            dicData: [
			{
                label: '必装',
                value: "MA"
            },{
				label: '选装',
				value: "OP"
            },{
                label: '不适用',
                value: "NA"
            },],    
            slot: true,
            addDisplay: true,
            editDisplay: true,
            viewDisplay: true,
			display: true,
			disabled:true,
		},
		{
            label: '应用版本',
            prop: 'appVersion',
            sortable: false,
			hide: true,
			showColumn: true,
            addDisplay: true,
            editDisplay: true,
            viewDisplay: true,
			display: true,
 			disabled:true,
       },
		{
            label: '访问地址',
            prop: 'appUrl',
            sortable: false,
			hide: false,
			showColumn: true,
            addDisplay: true,
            editDisplay: true,
            viewDisplay: true,
			display: true,
			disabled:true,
        },
		{
            label: '二维码',
            prop: 'qrCode',
            sortable: false,
			hide: true,
			showColumn: false,
			display: false,
        },
		{
            label: '展示图片(大)',
            prop: 'logoLarge',
            sortable: false,
			hide: true,
			showColumn: false,
			display: false,
        },
		{
            label: '展示图片(中)',
            prop: 'logoMid',
            sortable: false,
			hide: true,
			showColumn: false,
			display: false,
        },
		{
            label: '展示图片(小)',
            prop: 'logoSmall',
            sortable: false,
			hide: true,
			showColumn: false,
			display: false,
        },
		{
            label: '来源租户编号',
            prop: 'fromTid',
            sortable: false,
			hide: true,
			showColumn: false,
			display: false,
        },
		{
            label: '应用管理模式',
            prop: 'mgmtMode',
            sortable: false,
			hide: true,
			showColumn: false,
			display: false,
        },
		{
            label: '应用简称',
            prop: 'alias',
            sortable: false,
			hide: false,
			showColumn: true,
            addDisplay: true,
            editDisplay: true,
            viewDisplay: true,
			display: true,
        },
		{
            label: '应用描述',
            prop: 'description',
			type: 'textarea',
            sortable: false,
			hide: false,
			showColumn: true,
            addDisplay: true,
            editDisplay: true,
            viewDisplay: true,
			display: true,
			span:24,
            minRows:3,
            maxlength:500,
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
			display: true,
        },
		{
            label: '是否启用',
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
            },],
        },
		{
            label: '创建时间',
            prop: 'createTime',
            sortable: false,
			hide: false,
			showColumn: true,
            addDisplay: false,
            editDisplay: true,
            viewDisplay: true,
			display: true,
			disabled:true,
        },
		{
            label: '修改时间',
            prop: 'updateTime',
            sortable: false,
			hide: true,
			showColumn: true,
            addDisplay: false,
            editDisplay: true,
            viewDisplay: true,
			display: true,
			disabled:true,
        },
    ]
}
