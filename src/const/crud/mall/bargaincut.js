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
    column: [
                {
            label: 'PK',
            prop: 'id',
            sortable: true
        },
                {
            label: '所属租户',
            prop: 'tenantId',
            sortable: true
        },
                {
            label: '逻辑删除标记（0：显示；1：隐藏）',
            prop: 'delFlag',
            sortable: true
        },
                {
            label: '创建时间',
            prop: 'createTime',
            sortable: true
        },
                {
            label: '最后更新时间',
            prop: 'updateTime',
            sortable: true
        },
                {
            label: '创建者ID',
            prop: 'createId',
            sortable: true
        },
                {
            label: '砍价ID',
            prop: 'bargainId',
            sortable: true
        },
                {
            label: '用户ID',
            prop: 'userId',
            sortable: true
        },
                {
            label: '砍价金额',
            prop: 'cutPrice',
            sortable: true
        },
            ]
}

export const tableOption2 = {
    dialogDrag: true,
    border: true,
    stripe: true,
    menuAlign: 'center',
    align: 'center',
    menuType: 'text',
    searchShow: false,
    refreshBtn: false,
    menu: false,
    addBtn: false,
    column: [
        {
            label: '创建时间',
            prop: 'createTime',
            sortable: true
        },
        {
            label: '用户ID',
            prop: 'userId',
            slot: true,
            width: 240
        },
        {
            label: '砍价金额¥',
            prop: 'cutPrice',
            sortable: true
        },
    ]
}
