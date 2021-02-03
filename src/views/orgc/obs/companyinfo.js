/**
 * Copyright (C) 2020
 * All rights reserved, Designed By AiCoder.
 * date 2021-01-28 14:25:08
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
    viewBtn: true,
    column: [
        {
            label: '记录编号',
            prop: 'id',
            sortable: true,
			search: true,
			width: 120,
			align: 'left',
            display:false,
        },
        {
            label: '租户编号',
            prop: 'tenantId',
            sortable: true,
			search: true,
			width: 120,
            display:false,
        },
        {
            label: '公司名称',
            prop: 'name',
            sortable: true,
			search: true,
			width: 120,
            display:false,
        },
        {
            label: '公司代码',
            prop: 'code',
            sortable: true,
			search: true,
			width: 120,
            display:false,
        },
        {
            label: '公司简称',
            prop: 'alias',
            sortable: true,
			search: true,
			width: 120,
            display:false,
        },
        {
            label: '公司描述',
            prop: 'description',
            sortable: true,
			search: true,
			width: 120,
            display:false,
        },
        {
            label: '企业类型',
            prop: 'type',
            sortable: true,
            display:false,
            search: true,
			type: 'select',
            // dicUrl: '/sys/dict/type/saas_app_type',
            dicData: [
                {
                    label: '子公司',
                    value: "SUBSIDIARY"
                },{
                    label: '分公司',
                    value: "BRANCH"
                },{
                    label: '投资关系',
                    value: "INVESTMENT_RELATION"
                },{
                    label: '其他',
                    value: "OTHER"
                }],
			rules: [{
				required: true,
				message: '企业类型不能为空',
				trigger: 'blur'
			}],
        },
        {
            label: '企业注册代码',
            prop: 'registerCode',
            sortable: true,
			search: true,
            display:false,
        },
        {
            label: '区域代码',
            prop: 'areaCode',
            sortable: true,
			search: true,
            display:false,
        },
        {
            label: '行政区号',
            prop: 'regionCode',
            sortable: true,
			search: true,
            display:false,
        },
        {
            label: '地址-省',
            prop: 'province',
            type: 'select',
            sortable: true,
			display:false,
			props: {
                label: 'regionName',
                value: 'regionCode'
			},
			cascaderItem: ['city', 'district'],
			dicUrl: '/sys/region/listProvince',
        },
        {
            label: '地址-市',
            prop: 'city',
            type: 'select',
            sortable: true,
			display:false,
			dicFlag: false,
			props: {
                label: 'regionName',
                value: 'regionCode'
			},
			dicUrl: '/sys/region/listCity/{{key}}',
        },
        {
            label: '地址-区',
            prop: 'district',
            type: 'select',
            sortable: true,
			display:false,
			dicFlag: false,
			props: {
                label: 'regionName',
                value: 'regionCode'
			},
			dicUrl: '/sys/region/listDistrict/{{key}}',
        },
        {
            label: '地址',
            prop: 'address',
            sortable: true,
            display:false,
        },
        {
            label: '记录状态',
            prop: 'rstate',
            display:false,
            sortable: true,
            type: 'select',
            // dicUrl: '/sys/dict/type/saas_app_type',
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
            type: "date",  
            format: "yyyy-MM-dd hh:mm:ss",
            valueFormat: "yyyy-MM-dd hh:mm:ss",
            sortable: true,
            display:false,
        },
        {
            label: '修改时间',
            prop: 'updateTime',
            type: "date",  
            format: "yyyy-MM-dd hh:mm:ss",
            valueFormat: "yyyy-MM-dd hh:mm:ss",
            sortable: true,
            display:false,
    }],
    group:[{
        icon:'el-icon-info',
        label: '基本信息',
        prop: 'group1',
        column:[  {
            label: '记录编号',
            prop: 'id',
            sortable: false,
            hide:true,
			showColumn:false,
			display:false,
        },
        {
            label: '租户编号',
            prop: 'tenantId',
            sortable: false,
            hide:true,
			showColumn:false,
			display:false,
        },
        {
            label: '公司名称',
            prop: 'name',
            sortable: false,
            hide: false,
            showColumn: true,
        },
        {
            label: '公司代码',
            prop: 'code',
            sortable: false,
            hide: false,
            showColumn: true,
        },
        {
            label: '公司简称',
            prop: 'alias',
            sortable: false,
            hide: false,
            showColumn: true,
        },
        {
            label: '企业类型',
            prop: 'type',
            sortable: false,
            hide: false,
            showColumn: true,
            search: true,
            type: 'select',
            // dicUrl: '/sys/dict/type/saas_app_type',
            dicData: [
                {
                    label: '子公司',
                    value: "SUBSIDIARY"
                },{
                    label: '分公司',
                    value: "BRANCH"
                },{
                    label: '投资关系',
                    value: "INVESTMENT_RELATION"
                },{
                    label: '其他',
                    value: "OTHER"
                }],
            rules: [{
                required: true,
                message: '企业类型不能为空',
                trigger: 'blur'
            }],
        },
        {
            label: '公司描述',
            prop: 'description',
            type: 'textarea',
            span: 24,
            minRows: 3,
            maxlength: 200,
            sortable: false,
            hide: false,
            showColumn: true,
        },
        {
            label: '区域代码',
            prop: 'areaCode',
            sortable: false,
            hide: false,
            showColumn: true,
        },
        {
            label: '行政区号',
            prop: 'regionCode',
            sortable: false,
            hide: false,
            showColumn: true,
        },
        {
            label: '地址-省',
            prop: 'province',
            span:12,
            type: 'select',
            hide:true,
            props: {
                label: 'regionName',
                value: 'regionCode'
            },
            cascaderItem: ['city', 'district'],
            dicUrl: '/sys/region/listProvince',
            rules: [{
                message: '请选择省份',
                trigger: 'blur'
            }],
        },
        {
            label: '地址-市',
            prop: 'city',
            span:12,
            type: 'select',
            hide:true,
            dicFlag: false,
            props: {
                label: 'regionName',
                value: 'regionCode'
            },
            dicUrl: '/sys/region/listCity/{{key}}',
            rules: [{
                message: '请选择城市',
                trigger: 'blur'
            }],
        },
        {
            label: '地址-区',
            prop: 'district',
            span:12,
            type: 'select',
            hide:true,
            dicFlag: false,
            props: {
                label: 'regionName',
                value: 'regionCode'
            },
            dicUrl: '/sys/region/listDistrict/{{key}}',
            rules: [{
                message: '请选择地区',
                trigger: 'blur'
            }],
        },
        {
            label: '地址',
            prop: 'address',
            sortable: false,
            hide: false,
            showColumn: true,
        },
        {
            label: '记录状态',
            prop: 'rstate',
            sortable: false,
            hide: false,
            showColumn: true,
            type: 'select',
            // dicUrl: '/sys/dict/type/saas_app_type',
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
            type: "date",  
            format: "yyyy-MM-dd hh:mm:ss",
            valueFormat: "yyyy-MM-dd hh:mm:ss",
            sortable: false,
            hide: false,
            showColumn: true,
        },
        {
            label: '修改时间',
            prop: 'updateTime',
            type: "date",  
            format: "yyyy-MM-dd hh:mm:ss",
            valueFormat: "yyyy-MM-dd hh:mm:ss",
            sortable: false,
            hide: false,
            showColumn: true,
        },
        {
            label: '企业注册代码',
            labelWidth: 100,
            prop: 'registerCode',
            sortable: false,
            hide: false,
            showColumn: true,
        },]
    },
    {
        icon:'el-icon-info',
        label: '干系人',
        prop: 'group2',
        column:[{
            labelWidth:0,
            label: '',
            prop: 'takeholder',
            span:24,
            hide:true,
            formslot:true,
            }]
    },
    {
        icon:'el-icon-info',
        label: '服务驻点',
        prop: 'group3',
        column:[{
            labelWidth:0,
            label: '',
            prop: 'station',
            span:24,
            hide:true,
            formslot:true,
            }]
    },
    {
        icon:'el-icon-info',
        label: '公司关系',
        prop: 'group4',
        column:[{
            labelWidth:0,
            label: '',
            prop: 'companyRelation',
            span:24,
            hide:true,
            formslot:true,
            }]
    },]
}
