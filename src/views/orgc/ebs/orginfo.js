/**
 * Copyright (C) 2020
 * All rights reserved, Designed By AiCoder.
 * date 2021-01-28 14:38:06
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
    copyBtn:false,
    delBtn:false,
    addBtn:false,
    editBtn: false,
    column: [
    {
            label: '记录编号',
            prop: 'id',
            sortable: true,
            hide: true,
            display: false,
            showColumn: false,
        },
        {
            label: '租户编号',
            prop: 'tenantId',
            sortable: true,
            hide: true,
            display: false,
            showColumn: false,
        },
        {
            label: '组织结构名称',
            width: 120,
            labelWidth: 110,
            search: true,
            prop: 'orgName',
            sortable: true,
            hide: false,
            showColumn: true,
            disabled: true,
        },
        {
            label: '组织结构代码',
            width: 120,
            labelWidth: 110,
            search: true,
            prop: 'orgCode',
            sortable: true,
            hide: false,
            showColumn: true,
            disabled: true,
        },
        {
            label: '组织结构简称',
            width: 120,
            labelWidth: 110,
            search: true,
            prop: 'alias',
            sortable: true,
            hide: false,
            showColumn: true,
        },
        {
            label: '版本号',
            width: 120,
            labelWidth: 110,
            search: true,
            prop: 'versionCode',
            sortable: true,
            hide: false,
            showColumn: true,
        },
        {
            label: '版本名称',
            width: 120,
            labelWidth: 110,
            search: true,
            prop: 'versionName',
            sortable: true,
            hide: false,
            showColumn: true,
        },
        {
            label: '状态',
            width: 100,
            prop: 'status',
            display:false,
            sortable: true,
            type: 'select',
            dicData: [
                {
                    label: '待提交',
                    value: 0
                },{
                    label: '已启用',
                    value: 100
                },{
                    label: '已停用',
                    value: -100
                },{
                    label: '取消',
                    value: -900
                }]
        },
        {
            label: '生效日期',
            width: 100,
            labelWidth: 110,
            prop: 'effectiveDate',
            type: "date",  
            format: "yyyy-MM-dd hh:mm:ss",
            valueFormat: "yyyy-MM-dd hh:mm:ss",
            sortable: true,
            hide: false,
            showColumn: true,
        },
        {
            label: '失效日期',
            width: 100,
            labelWidth: 110,
            prop: 'expiringDate',
            type: "date",  
            format: "yyyy-MM-dd hh:mm:ss",
            valueFormat: "yyyy-MM-dd hh:mm:ss",
            sortable: true,
            hide: false,
            showColumn: true,
        }
        ]
}
