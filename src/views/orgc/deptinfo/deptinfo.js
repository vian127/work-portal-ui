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
            hide: true,
            showColumn: false,
            display: false,
        },
        {
            label: '租户编号',
            labelWidth: 100,
            prop: 'tenantId',
            sortable: false,
            hide: true,
            showColumn: false,
            display: false,
        },
        {
            label: '组织名称',
            search: true,
            labelWidth: 100,
            prop: 'zuzhi',
            sortable: false,
            hide: true,
            showColumn: false,
            display: false,
            type: 'select',
            dicData: [
                {
                    label: '组织名称1',
                    value: "1"
                },{
                    label: '组织名称2',
                    value: "2"
                },{
                    label: '组织名称3',
                    value: "3"
                }]
        },
        {
            label: '版本名称',
            search: true,
            labelWidth: 100,
            prop: 'banben',
            sortable: false,
            hide: true,
            showColumn: false,
            display: false,
            type: 'select',
            dicData: [
                {
                    label: '版本名称1',
                    value: "1"
                },{
                    label: '版本名称2',
                    value: "2"
                },{
                    label: '版本名称3',
                    value: "3"
                }]
        },
        {
            label: '部门节点名称',
            width: 120,
            labelWidth: 100,
            prop: 'name',
            sortable: true,
            hide: false,
            showColumn: true,
        },
        {
            label: '部门节点代码',
            width: 120,
            labelWidth: 100,
            prop: 'code',
            sortable: true,
            hide: false,
            showColumn: true,
        },
        {
            label: '部门节点简称',
            width: 120,
            labelWidth: 100,
            prop: 'alias',
            sortable: true,
            hide: false,
            showColumn: true,
        },
        {
            label: '部门节点类型',
            width: 120,
            labelWidth: 100,
            prop: 'type',
            sortable: true,
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
            width: 120,
            labelWidth: 100,
            prop: 'areaCode',
            sortable: true,
            hide: false,
            showColumn: true,
        },
        {
            label: '行政区号',
            width: 120,
            labelWidth: 100,
            prop: 'regionCode',
            sortable: true,
            hide: false,
            showColumn: true,
        },
        {
            label: '地址-省',
            width: 100,
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
            width: 100,
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
            width: 100,
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
            labelWidth: 80,
            prop: 'address',
            sortable: true,
            hide: false,
            showColumn: true,
        },
        {
            label: '备注',
            labelWidth: 100,
            prop: 'remark',
            sortable: true,
            hide: false,
            showColumn: true,
        },
        {
            label: '利润中心',
            width: 120,
            labelWidth: 100,
            prop: 'profitCenter',
            sortable: true,
            hide: false,
            showColumn: true,
        },
        {
            label: '薪资成本中心',
            width: 120,
            labelWidth: 100,
            prop: 'salaryCostCenter',
            sortable: true,
            hide: false,
            showColumn: true,
        },
        {
            label: '对应租户编号',
            width: 120,
            labelWidth: 100,
            prop: 'relTenantId',
            sortable: true,
            hide: false,
            showColumn: true,
        },
        {
            label: '记录状态',
            width: 100,
            labelWidth: 100,
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
            width: 100,
            labelWidth: 100,
            prop: 'createTime',
            sortable: true,
            hide: false,
            showColumn: true,
            addDisplay: true,
            editDisplay: true,
            viewDisplay: true,
        },
        {
            label: '修改时间',
            width: 100,
            labelWidth: 100,
            prop: 'updateTime',
            sortable: true,
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
            sortable: true,
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
            sortable: true,
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
            sortable: true,
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
            sortable: true,
            hide: false,
            showColumn: true,
            type: 'textarea',
            span: 24,
            minRows: 3,
            maxlength: 200,
        },
        ]
}
