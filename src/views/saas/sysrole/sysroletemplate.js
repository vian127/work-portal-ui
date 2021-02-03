/**
 * Copyright (C) 2020
 * All rights reserved, Designed By www.ai-coder.net
 */
export const tableOption2 = {
    dialogDrag: true,
    border: true,
    indexLabel: '序号',
    stripe: true,
    menuAlign: 'center',
    align: 'center',
    addBtn:false,
    columnBtn:false,
    refreshBtn:false,
    menu:false,
    page:false,
    cellBtn:true,
    keyId: 'id',
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
            label: '租户类型代码',
            prop: 'tenantType',
            sortable: false,
        },
        {
            label: '租户类型名称',
            prop: 'tenantTypeName',
            sortable: false,
         },                
		{
            label: '角色类别',
            prop: 'tplMode',
            sortable: false,
            type: 'select',
            dicData: [
			{
                label: '必须有',
                value: "MA"
            },{
				label: '可选用',
				value: "OP"
            },{
                label: '不适用',
                value: "NA"
            },],    
            cell: true,
		},
                {
            label: '顺序号',
            prop: 'seq',
            sortable: false,
			hide:true,
			showColumn:false,
			display: false,
        },
                {
            label: '记录状态',
            prop: 'rstate',
            sortable: false,
			hide:true,
			showColumn:false,
			display: false,
        },
                {
            label: '创建时间',
            prop: 'createTime',
            hide:true,
			showColumn:false,
            addDisplay: false,
            display: false,
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
