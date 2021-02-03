/**
 * Copyright (C) 2020
 * All rights reserved, Designed By AiCoder.

 */
export const tableOption = {
    dialogDrag: true,
    border: true,
    stripe: true,
    menuAlign: 'center',
    align: 'center',
    menuType: 'text',
    searchShow: false,
    excelBtn: true,
    printBtn: true,
    column: [
        {
            label: '名称',
            prop: 'name',
            sortable: true
        },
        {
            label: '创建时间',
            prop: 'createTime',
            sortable: true,
            addDisplay: false,
            editDisplay: false
        },
        {
            label: '更新时间',
            prop: 'updateTime',
            sortable: true,
            addDisplay: false,
            editDisplay: false
        },
    ]
}
