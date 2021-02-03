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
    menu: false,
    column: [
        {
            label: '创建时间',
            prop: 'createTime',
            sortable: true
        },
        {
            label: '订单信息',
            prop: 'orderId',
            slot: true,
            width: 280
        },
        {
            label: '商品信息',
            prop: 'orderItemId',
            slot: true,
            width: 200
        },
        {
            label: '退款状态',
            prop: 'status',
            slot: true,
            sortable: true
        },
        {
            label: '是否退款',
            prop: 'isRefund',
            slot: true
        },
        {
            label: '退款金额',
            prop: 'refundAmount',
            sortable: true
        },
        {
            label: '退款流水号',
            prop: 'refundTradeNo',
            sortable: true
        },
        {
            label: '退款原因',
            prop: 'refundReson'
        },
        {
            label: '拒绝退款原因',
            prop: 'refuseRefundReson'
        },
    ]
}
