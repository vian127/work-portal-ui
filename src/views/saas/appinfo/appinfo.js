/**
 * Copyright (C) 2020
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
    excelBtn: false,
    printBtn: false,
    column: [
                {
            label: '记录编号',
            prop: 'id',
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
			display: false,
        },
                {
            label: '应用类型',
            prop: 'type',
            search: true,
            sortable: true,
			type: 'select',
			dicUrl: '/sys/dict/type/saas_app_type',
			rules: [{
				required: true,
				message: '应用类型不能为空',
				trigger: 'blur'
			}],
        },
                {
            label: '应用名称',
            prop: 'name',
            search: true,
            sortable: true,
 			rules: [{
				required: true,
				message: '请输入应用名称',
				trigger: 'blur'
			}]
       },
                {
            label: '应用代码',
            prop: 'code',
            search: true,
            sortable: true,
			rules: [{
				required: true,
				message: '请输入应用代码',
				trigger: 'blur'
			}]
        },
        {
            label: '顺序号',
            prop: 'seq',
            search: true,
            sortable: true,
            hide:false,
        },
                {
            label: '应用别名',
            prop: 'alias',
            sortable: false,
			hide:true,
        },
                {
            label: '应用描述',
            prop: 'description',
			type: 'textarea',
            sortable: false,
			hide:true,
			span:24,
            minRows:3,
            maxlength:500,
        },
                {
            label: '使用范围',
            prop: 'appScope',
            type: 'select',
            search: false,
            sortable: false,
            hide:true,
            rules: [{
                 message: '请选择使用范围',
                trigger: 'blur'
            }],
            dicData: [
			{
                label: '当前租户',
                value: "CT"
            },{
				label: '当前及下级',
				value: "FT"
            },{
                label: '全部租户',
                value: "AT"
            },]
        },
                {
            label: '应用版本',
            prop: 'appVersion',
            sortable: false,
			hide:true,
        },
                {
            label: '访问地址',
            prop: 'appUrl',
            sortable: false,
        },
                {
            label: '二维码',
            prop: 'qrCode',
            sortable: false,
			hide:true,
        },
                {
            label: '展示图片(大)',
            prop: 'logoLarge',
            sortable: false,
            hide:true,
            labelWidth: 110,
       },
                {
            label: '展示图片(中)',
            prop: 'logoMid',
            sortable: false,
			hide:true,
            labelWidth: 110,
        },
                {
            label: '展示图片(小)',
            prop: 'logoSmall',
            sortable: false,
			hide:true,
            labelWidth: 110,
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
            },]
        },
                {
            label: '创建时间',
            prop: 'createTime',
            addDisplay: false,
            editDisplay: true,
            viewDisplay: true,
			disabled:true,
        },
                {
            label: '修改时间',
            prop: 'updateTime',
 			hide:true,
            addDisplay: false,
            editDisplay: true,
            viewDisplay: true,
			disabled:true,
        },
    ]
}
