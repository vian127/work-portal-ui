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
            label: '地方',
            prop: 'place',
            rules: [{
                required: true,
                message: '请输入发货地',
                trigger: 'blur'
            }],
        },
    ]
}
