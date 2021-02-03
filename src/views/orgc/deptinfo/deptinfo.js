/**
 * Copyright (C) 2020
 * All rights reserved, Designed By AiCoder.
 * date 2021-01-28 14:42:49
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
            labelWidth: 100,
            prop: 'id',
            sortable: false,
            hide: false,
            showColumn: true,
        },
        {
            label: '租户编号',
            labelWidth: 100,
            prop: 'tenantId',
            sortable: false,
            hide: false,
            showColumn: true,
        },
        {
            label: '部门节点名称',
            labelWidth: 100,
            prop: 'name',
            sortable: false,
            hide: false,
            showColumn: true,
        },
        {
            label: '部门节点代码',
            labelWidth: 100,
            prop: 'code',
            sortable: false,
            hide: false,
            showColumn: true,
        },
        {
            label: '部门节点简称',
            labelWidth: 100,
            prop: 'alias',
            sortable: false,
            hide: false,
            showColumn: true,
        },
        {
            label: '部门节点类型',
            labelWidth: 100,
            prop: 'type',
            sortable: false,
            hide: false,
            showColumn: true,
            type: 'select',
            dicData: [
                {
                    label: '执行长部门',
                    value: "1"
                },{
                    label: '事业处/总处/分公司部门',
                    value: "2"
                },{
                    label: '处级部门',
                    value: "3"
                },{
                    label: '部级部门',
                    value: "4"
                },{
                    label: '课级部门',
                    value: "5"
                }]
        },
        {
            label: '区域代码',
            labelWidth: 100,
            prop: 'areaCode',
            sortable: false,
            hide: false,
            showColumn: true,
        },
        {
            label: '行政区号',
            labelWidth: 100,
            prop: 'regionCode',
            sortable: false,
            hide: false,
            showColumn: true,
        },
        {
            label: '地址-省',
            labelWidth: 100,
            prop: 'province',
            type: 'select',
            sortable: true,
			props: {
                label: 'regionName',
                value: 'regionCode'
			},
			cascaderItem: ['city', 'district'],
			dicUrl: '/sys/region/listProvince',
        },
        {
            label: '地址-市',
            labelWidth: 100,
            prop: 'city',
            type: 'select',
            sortable: true,
			dicFlag: false,
			props: {
                label: 'regionName',
                value: 'regionCode'
			},
			dicUrl: '/sys/region/listCity/{{key}}',
        },
        {
            label: '地址-区',
            labelWidth: 100,
            prop: 'district',
            type: 'select',
            sortable: true,
			dicFlag: false,
			props: {
                label: 'regionName',
                value: 'regionCode'
			},
			dicUrl: '/sys/region/listDistrict/{{key}}',
        },
        {
            label: '地址',
            labelWidth: 100,
            prop: 'address',
            sortable: false,
            hide: false,
            showColumn: true,
        },
        {
            label: '备注',
            labelWidth: 100,
            prop: 'remark',
            sortable: false,
            hide: false,
            showColumn: true,
        },
        {
            label: '利润中心',
            labelWidth: 100,
            prop: 'profitCenter',
            sortable: false,
            hide: false,
            showColumn: true,
        },
        {
            label: '薪资成本中心',
            labelWidth: 100,
            prop: 'salaryCostCenter',
            sortable: false,
            hide: false,
            showColumn: true,
        },
        {
            label: '对应租户编号',
            labelWidth: 100,
            prop: 'relTenantId',
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
            sortable: false,
            hide: false,
            showColumn: true,
            addDisplay: true,
            editDisplay: true,
            viewDisplay: true,
        },
        {
            label: '修改时间',
            labelWidth: 100,
            prop: 'updateTime',
            sortable: false,
            hide: false,
            showColumn: true,
            addDisplay: true,
            editDisplay: true,
            viewDisplay: true,
        },
        {
            label: '是否为直接人力',
            labelWidth: 125,
            prop: 'isDirect',
            type: 'radio',
            sortable: false,
            slot: true,
            rules:[{
                required: true,
                message: '请选择是否直接人力',
                trigger: 'blur'
            }],
            dicData: [
                {
                    label: '是',
                    value: '1',
                },
                {
                    label: '否',
                    value: '0',
                }
            ]
        },
        {
            label: '所属公司(缺省)记录编号',
            labelWidth: 168,
            span: 24,
            prop: 'companyId',
            sortable: false,
            hide: false,
            showColumn: true,
            addDisplay: true,
            editDisplay: true,
            viewDisplay: true,
        },
        {
            label: '所属公司(缺省)代码',
            labelWidth: 168,
            span: 24,
            prop: 'companyCode',
            sortable: false,
            hide: false,
            showColumn: true,
            addDisplay: true,
            editDisplay: true,
            viewDisplay: true,
        },
        {
            label: '部门节点描述',
            labelWidth: 168,
            prop: 'description',
            sortable: false,
            hide: false,
            showColumn: true,
            type: 'textarea',
            span: 24,
            minRows: 3,
            maxlength: 200,
        },
        ]
}
