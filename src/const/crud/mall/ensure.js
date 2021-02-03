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
    excelBtn: true,
    printBtn: true,
    column: [
        {
            label: '保障名',
            prop: 'name',
            rules: [{
                required: true,
                message: '请输入保障名',
                trigger: 'blur'
            }],
        },
        {
            label: '保障详情',
            prop: 'detail',
            type: 'text'
        },
    ]
}
