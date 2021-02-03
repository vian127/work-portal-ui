/**
 * Copyright (C) 2020
 * All rights reserved, Designed By AiCoder.

 */
export const tableOption = {
    dialogDrag: true,
    border: true,
    index: true,
    indexLabel: '序号',
    stripe: true,
    menuAlign: 'center',
    align: 'center',
    menuType: 'text',
    searchShow: false,
    excelBtn: true,
    printBtn: true,
    labelWidth: 100,
    column: [
        {
            label: '名称',
            prop: 'name',
            rules: [{
                required: true,
                message: '请输入名称',
                trigger: 'blur'
            }]
        },
        {
            label: '排序字段',
            prop: 'sort',
            type: 'number',
            sortable: true,
            rules: [{
                required: true,
                message: '请输入排序',
                trigger: 'blur'
            }]
        },
        {
            label: '模板类型',
            prop: 'type',
            type: 'radio',
            search: true,
            sortable: true,
            dicData: [{
                label: '买家承担运费',
                value: '1'
            },{
                label: '卖家包邮',
                value: '2'
            }],
            rules: [{
                required: true,
                message: '请选择模板类型',
                trigger: 'blur'
            }]
        },
        {
            label: '计费方式',
            prop: 'chargeType',
            type: 'radio',
            search: true,
            hide: true,
            sortable: true,
            display: false,
            dicData: [{
                label: '按件数',
                value: '1'
            },{
                label: '按重量',
                value: '2'
            },{
                label: '按体积',
                value: '3'
            }],
            rules: [{
                required: true,
                message: '请输入计费方式',
                trigger: 'blur'
            }]
        },
        {
            label: '首件',
            prop: 'firstNum',
            type: 'number',
            hide: true,
            display: false,
            sortable: true,
            rules: [{
                required: true,
                message: '请输入首件',
                trigger: 'blur'
            }]
        },
        {
            label: '首运费(元)',
            prop: 'firstFreight',
            type: 'number',
            minRows: 0,
            precision: 2,
            hide: true,
            display: false,
            sortable: true,
            rules: [{
                required: true,
                message: '请输入首运费',
                trigger: 'blur'
            }]
        },
        {
            label: '续件',
            prop: 'continueNum',
            type: 'number',
            hide: true,
            display: false,
            sortable: true,
            rules: [{
                required: true,
                message: '请输入续件',
                trigger: 'blur'
            }]
        },
        {
            label: '续运费(元)',
            prop: 'continueFreight',
            type: 'number',
            minRows: 0,
            precision: 2,
            hide: true,
            display: false,
            sortable: true,
            rules: [{
                required: true,
                message: '请输入续运费',
                trigger: 'blur'
            }]
        },
    ]
}
