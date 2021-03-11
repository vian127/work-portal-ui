/**
 * Copyright (C) 2020
 * All rights reserved, Designed By AiCoder.
 * date 2021-01-28 14:42:15
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
    addBtn: false,
    editBtn: false,
    delBtn: false,
    column: [
    {
            label: '记录编号',
            labelWidth: 100,
            prop: 'id',
            sortable: false,
            hide: false,
            showColumn: false,
            display: false,
        },
        {
            label: '租户编号',
            labelWidth: 100,
            prop: 'tenantId',
            sortable: false,
            hide: false,
            showColumn: false,
            display: false,
        },
        {
            label: '组织机构编号',
            labelWidth: 100,
            prop: 'orgId',
            sortable: true,
            hide: false,
            showColumn: false,
            display: false,
        },
        {
            label: '记录状态',
            labelWidth: 100,
            prop: 'rstate',
            sortable: true,
            hide: false,
            showColumn: false,
            display: false,
            type: 'select',
            dicData: [
                {
                    label: '已生效',
                    value: "1"
                },{
                    label: '已失效',
                    value: "0"
                }]
        },
        {
            label: '创建时间',
            labelWidth: 100,
            prop: 'createTime',
            sortable: true,
            hide: false,
            showColumn: false,
            display: false,
            type: "date",  
            format: "yyyy-MM-dd hh:mm:ss",
            valueFormat: "yyyy-MM-dd hh:mm:ss",
        },
        {
            label: '修改时间',
            labelWidth: 100,
            prop: 'updateTime',
            sortable: true,
            hide: false,
            showColumn: false,
            display: false,
            type: "date",  
            format: "yyyy-MM-dd hh:mm:ss",
            valueFormat: "yyyy-MM-dd hh:mm:ss",
        },
        {
            label: '公司名称',
            prop: 'orgName',
            sortable: true,
            hide: false,
            showColumn: true,
            slot: true,
        },
        {
            label: '公司简称',
            prop: 'orgAlias',
            sortable: false,
            hide: false,
            showColumn: true,
            slot: true,
        },
        {
            label: '关联组织个数',
            labelWidth: 120,
            prop: 'orgNum',
            sortable: false,
            hide: false,
            showColumn: true,
        },
        ]
}
