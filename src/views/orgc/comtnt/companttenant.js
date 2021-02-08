/**
 * Copyright (C) 2020
 * All rights reserved, Designed By AiCoder.
 * date 2021-01-28 14:42:08
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
            display: false,
            hide: true,
            showColumn: false,
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
            label: '公司Id',
            prop: 'companyId',
            sortable: true,
            hide: false,
            showColumn: true,
        },
        {
            label: '顺序号',
            prop: 'seq',
            sortable: true,
            hide: false,
            showColumn: true,
        },
        {
            label: '记录状态',
            prop: 'rstate',
            sortable: true,
            hide: false,
            showColumn: true,
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
            prop: 'createTime',
            sortable: true,
            hide: false,
            showColumn: true,
            type: "date",  
            format: "yyyy-MM-dd hh:mm:ss",
            valueFormat: "yyyy-MM-dd hh:mm:ss",
        },
        {
            label: '修改时间',
            prop: 'updateTime',
            sortable: true,
            hide: false,
            showColumn: true,
            type: "date",  
            format: "yyyy-MM-dd hh:mm:ss",
            valueFormat: "yyyy-MM-dd hh:mm:ss",
        },
        ]
}
