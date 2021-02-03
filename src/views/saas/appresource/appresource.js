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
    excelBtn: true,
    printBtn: true,
    column: [
        {
            label: '应用名称',
            prop: 'appId',
            type: 'tree',
            filterable: true,
			// cascaderItem: ['parentId'],
			// dicUrl: '/saas/appinfo/list',
 			props: {
				label: 'name',
				value: 'id'
			},
			hide: true,
            showColumn: false,
            disabled: true,
        },
		{
			label: '上级菜单',
			prop: 'parentId',
			type: 'tree',
            hide: true,
            align: 'left',
            dicFlag: false,
            filterable: true,
			// dicUrl: '/saas/appresource/appMenuTree/{{key}}',
 			props: {
				label: 'name',
				value: 'id'
			},
			rules: [{
				required: true,
				message: '请选择上级菜单',
				trigger: 'change'
			}],
        },
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
 			hide:true,
			showColumn:false,
			display: false,
        },
        {
            label: '资源名称',
            prop: 'name',
            sortable: false,
            align: 'left',
			rules: [{
				required: true,
				message: '请输入资源名称',
				trigger: 'blur'
			}]
        },
        {
            label: '资源代码',
            prop: 'code',
            sortable: false,
 			rules: [{
				required: true,
				message: '请输入资源名称',
				trigger: 'blur'
			}]
        },
                {
            label: '资源别名',
            prop: 'alias',
            sortable: false,
			hide:true,
        },
                {
            label: '资源描述',
            prop: 'description',
			type: 'textarea',
            sortable: false,
			hide:true,
			span:24,
            minRows:3,
            maxlength:500,
         },
        {
            label: '资源类型',
            prop: 'type',
            type: 'select',
            slot: true,
            dicData: [
                {
                    label: '菜单',
                    value: "0"
                 },{
                    label: '按钮',
                    value: "1"
                },],
            solt: true,
        },
        {
            label: '权限标识符',
            prop: 'permission',
        },
        {
            label: '应用方式',
            prop: 'usageType',
			type: 'select',
            dicUrl: '/sys/dict/type/saas_appusage_type',
            hide:true,
            showColumn: false,
            display: false,
        },
                {
            label: '应用范围',
            prop: 'usageScope',
			hide:true,
        },
                {
            label: '显示方式',
            prop: 'displayModel',
			hide:true,
			showColumn: false,
			display: false,
        },
                {
            label: '资源位置',
            prop: 'resLocation',
        },
                {
            label: '访问地址',
            prop: 'accessUrl',
        },
                {
            label: '图标(大)',
            prop: 'iconLarge',
 			hide:true,
            // labelWidth: 110,
       },
                {
            label: '图标(中)',
            prop: 'iconMid',
			hide:true,
            // labelWidth: 110,
        },
                {
            label: '图标',
            prop: 'iconSmall',
            sortable: false,
            hide:true,
        },
                {
            label: '顺序号',
            prop: 'seq',
            sortable: false,
			rules: [{
				required: true,
				message: '排序不能为空',
				trigger: 'blur'
			}],
       },
         {
            label: '是否启用',
            prop: 'rstate',
            type: 'radio',
            search: true,
            sortable: false,
            slot: true,
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
            },]
        },
                {
            label: '创建时间',
            prop: 'createTime',
			hide:true,
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
