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
            label: '编辑器',
            prop: 'editorType',
            type: 'select',
            dicUrl: '/admin/dict/type/editor_type',
            rules: [{
                required: true,
                message: '请选择编辑器',
                trigger: 'blur'
            }]
        },
    ]
}
