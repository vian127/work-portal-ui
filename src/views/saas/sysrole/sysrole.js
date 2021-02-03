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
 			hide:true,
			showColumn:false,
			display: false,
        },
        {
            label: '角色编号',
            prop: 'roleId',
 			hide:true,
			showColumn:false,
			display: false,
        },
                {
            label: '角色名称',
            prop: 'name',
            sortable: true,
 			rules: [{
				required: true,
				message: '请输入角色名称',
				trigger: 'blur'
			}]
       },
                {
            label: '角色代码',
            prop: 'code',
            sortable: true,
 			rules: [{
				required: true,
				message: '请输入角色代码',
				trigger: 'blur'
			}]
        },
                {
            label: '角色简称',
            prop: 'alias',
            sortable: true,
 			hide:true,
       },
                {
            label: '角色描述',
            prop: 'description',
			type: 'textarea',
            sortable: false,
			hide:true,
			span:24,
            minRows:3,
            maxlength:500,
        },
                {
            label: '角色类型',
            prop: 'type',
 			hide:true,
			showColumn:false,
			display: false,
        },
                {
            label: '顺序号',
            prop: 'seq',
            sortable: true,
			hide:true,
			rules: [{
				required: true,
				message: '顺序号不能为空',
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
