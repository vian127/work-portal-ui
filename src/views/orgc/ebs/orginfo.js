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
    column: [
    {
            label: '记录编号',
            prop: 'id',
            sortable: false,
            hide: false,
            display: false,
            showColumn: true,
        },
        {
            label: '租户编号',
            prop: 'tenantId',
            sortable: false,
            hide: false,
            display: false,
            showColumn: true,
        },
        {
            label: '组织结构名称',
            labelWidth: 100,
            prop: 'name',
            sortable: false,
            hide: false,
            showColumn: true,
        },
        {
            label: '组织结构代码',
            labelWidth: 100,
            prop: 'code',
            sortable: false,
            hide: false,
            showColumn: true,
        },
        {
            label: '组织结构简称',
            labelWidth: 100,
            prop: 'alias',
            sortable: false,
            hide: false,
            showColumn: true,
        },
        {
            label: '当前版本',
            labelWidth: 100,
            prop: 'versionId',
            sortable: false,
            hide: false,
            showColumn: true,
        },
        {
            label: '记录状态',
            labelWidth: 100,
            prop: 'rstate',
            sortable: false,
            hide: false,
            showColumn: true,
            type: 'select',
            // dicUrl: '/sys/dict/type/saas_app_type',
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
            type: "date",  
            format: "yyyy-MM-dd hh:mm:ss",
            valueFormat: "yyyy-MM-dd hh:mm:ss",
            sortable: false,
            hide: false,
            showColumn: true,
        },
        {
            label: '修改时间',
            labelWidth: 100,
            prop: 'updateTime',
            type: "date",  
            format: "yyyy-MM-dd hh:mm:ss",
            valueFormat: "yyyy-MM-dd hh:mm:ss",
            sortable: false,
            hide: false,
            showColumn: true,
        },
        {
            label: '组织结构描述',
            labelWidth: 100,
            prop: 'description',
            type: 'textarea',
            span: 24,
            minRows: 3,
            maxlength: 200,
            sortable: false,
            hide: false,
            showColumn: true,
        },
        ]
}
