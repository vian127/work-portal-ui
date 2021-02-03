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
	defaultExpandAll: true,
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
 			hide:true,
			showColumn:false,
			display: false,
        },
		{
            label: '上级机构',
            prop: 'parentId',
            sortable: false,
			hide: true,
			showColumn: true,
            addDisplay: true,
            editDisplay: true,
            viewDisplay: true,
			type: 'tree',
			// dicUrl: '/tntm/orginfo/allTree',
			props: {
				label: 'name',
				value: 'id'
			},
			rules: [{
				required: true,
				message: '请选择上级机构',
				trigger: 'change'
			}],
        },
		{
            label: '机构名称',
            prop: 'name',
            sortable: false,
			hide: false,
			showColumn: true,
            addDisplay: true,
            editDisplay: true,
            viewDisplay: true,
			align: 'left',
			width: 200,
			rules: [{
				required: true,
				message: '机构名称不能为空',
				trigger: 'blur'
			}],
        },
		{
            label: '机构代码',
            prop: 'code',
            sortable: false,
			hide: false,
			showColumn: true,
            addDisplay: true,
            editDisplay: true,
            viewDisplay: true,
        },
		{
            label: '机构简称',
            prop: 'alias',
            sortable: false,
			hide: false,
			showColumn: true,
            addDisplay: true,
            editDisplay: true,
            viewDisplay: true,
        },
		{
            label: '机构描述',
            prop: 'description',
            sortable: false,
			hide: true,
			showColumn: true,
            addDisplay: true,
            editDisplay: true,
            viewDisplay: true,
			type: 'textarea',
			hide:true,
			span:24,
            minRows:3,
            maxlength:500,
        },
		{
            label: '机构类型',
            prop: 'type',
            sortable: false,
			hide: false,
			showColumn: true,
            addDisplay: true,
            editDisplay: true,
            viewDisplay: true,
			type: 'select',
			dicUrl: '/sys/dict/type/saas_org_type',
			rules: [{
				required: true,
				message: '请选择机构类型',
				trigger: 'blur'
			}],
        },
		{
            label: '顺序号',
            prop: 'seq',
            sortable: false,
			hide: false,
			showColumn: true,
            addDisplay: true,
            editDisplay: true,
            viewDisplay: true,
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
