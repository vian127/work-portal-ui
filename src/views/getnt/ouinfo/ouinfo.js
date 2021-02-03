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
	addBtn: false,
	delBtn: false,
	viewBtn: true,
    excelBtn: true,
    printBtn: true,
    column: [
        {
			label: '记录编号',
			prop: 'id',
			hide:true,
			showColumn:false,
			display:false,
		},
        {
            label: '租户编号',
            prop: 'tenantId',
			hide:true,
            showColumn:false,
			display:false,
        },
        {            
			label: '上级单位',
			prop: 'parentId',
 			hide: true,
            showColumn: true,
			type: 'tree',
            dicUrl: '/getnt/ouinfo/tree',
            disabled: true,
 			props: {
				label:'name',
				value: 'id'
			},
			rules: [{
				// required: true,
				message: '请选择上级单位',
				trigger: 'change'
			}]
	    },
        {
            label: '单位名称',
            prop: 'name',
            sortable: true,
			search: true,
			width: 200,
			align: 'left',
			rules: [{
				required: true,
				message: '经营单位名称不能为空',
				trigger: 'blur'
			}],
			display:false,
        },
        {            
			label: '单位代码',
			prop: 'code',
			search: true,
			sortable: true,
			width: 120,
			rules: [{
				required: true,
				message: '单位代码不能为空',
				trigger: 'blur'
			}],
			display:false,
        },
        {
            label: '单位类型',
            prop: 'ouType',
			type: 'select',
			dicUrl: '/sys/dict/type/saas_tenant_type',
			sortable: true,
			search: true,
			rules: [{
				required: true,
				message: '单位类型不能为空',
				trigger: 'blur'
			}],
			display:false,
        },
		{            
			label: '省份',
            prop: 'province',
            type: 'select',
			display:false,
			hide:true,
			props: {
                label: 'regionName',
                value: 'regionCode'
			},
			cascaderItem: ['city', 'district'],
			dicUrl: '/sys/region/listProvince',
        },
        {            
			label: '城市',
            prop: 'city',
			type: 'select',
			hide:true,
			display:false,
			dicFlag: false,
			props: {
                label: 'regionName',
                value: 'regionCode'
			},
			dicUrl: '/sys/region/listCity/{{key}}',
        },
        {            
			label: '地区',
            prop: 'district',
			type: 'select',
			hide:true,
			display:false,
			dicFlag: false,
			props: {
                label: 'regionName',
                value: 'regionCode'
			},
			dicUrl: '/sys/region/listDistrict/{{key}}',
        },
		{            
			label: '申请单状态',
            prop: 'status',
            sortable: true,
            disabled:true,
			display:false,
        },
        {            
			label: '创建时间',
            prop: 'createTime',
            disabled:true,
			display:false,
         },
		],
	group:[{
		icon:'el-icon-info',
		label: '基本资料',
		prop: 'group1',
		column: [		
        {
            label: '单位类型',
            prop: 'ouType',
			type: 'select',
			dicUrl: '/sys/dict/type/saas_tenant_type',
            sortable: true,
			rules: [{
				required: true,
				message: '单位类型不能为空',
				trigger: 'blur'
			}]
        },
        {
            label: '单位名称',
            prop: 'name',
            sortable: true,
			width: 200,
			rules: [{
				required: true,
				message: '单位名称不能为空',
				trigger: 'blur'
			}]
        },
        {            
			label: '单位代码',
			prop: 'code',
			sortable: true,
			width: 120,
			rules: [{
				required: true,
				message: '单位代码不能为空',
				trigger: 'blur'
			}]
        },
        {            
			label: '单位简称',
            prop: 'alias',
        },
        {            
			label: '单位描述',
            prop: 'description',
			type: 'textarea',
			hide:true,
			span:24,
            minRows:3,
            maxlength:200,
			
        }]
	},
	// group2
	{
		icon:'el-icon-info',
		label: '地址信息',
		prop: 'group2',
		column: [{            
			label: '国别代码',
            prop: 'countryCode',
			hide:true,
            showColumn:false,
            addDisplay: false,
            editDisplay: false,
            viewDisplay:false,
 			display:false,
       },
        {            
			label: '行政区号',
            prop: 'regionCode',
 			hide:true,
            showColumn: false,
            addDisplay: false,
            editDisplay: false,
            viewDisplay: false,
 			display:false,
       },
        {            
			label: '省份',
            prop: 'province',
            type: 'select',
            hide:true,
			span:8,
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
			label: '城市',
            prop: 'city',
			type: 'select',
 			hide:true,
			span:8,
			props: {
                label: 'regionName',
                value: 'regionCode'
			},
			dicUrl: '/sys/region/listCity/{{key}}',
			rules: [{
				message: '请选择城市',
				trigger: 'blur'
		  }],
		  dicFlag: false,
		},
        {            
			label: '地区',
            prop: 'district',
			type: 'select',
			hide:true,
			span:8,
			props: {
                label: 'regionName',
                value: 'regionCode'
			},
			dicUrl: '/sys/region/listDistrict/{{key}}',
			rules: [{
				message: '请选择地区',
				trigger: 'blur'
		  }],
		  dicFlag: false,
		},
        {            
			label: '详细地址',
            prop: 'address',
 			hide:true,
 			span:24,
       }]
 	},
	// group3
	{
		icon:'el-icon-info',
		label: '联络信息',
		prop: 'group3',
		column: [
		{            
			label: '联系人',
            prop: 'contacts',
            sortable: true,
        },
        {            
			label: '电话',
            prop: 'phone',
			hide:true,
        },
        {            
			label: '传真',
            prop: 'fax',
 			hide:true,
        },
        {            
			label: '邮箱',
            prop: 'email',
			hide:true,
            sortable: true,
		},
		]
	},
	// group4
	// {
	// 	icon:'el-icon-info',
	// 	label: '系统管理员',
	// 	prop: 'group4',
	// 	column: [{            
	// 		label: '管理员账号',
	// 		labelWidth: 110,
    //         prop: 'adminCode',
	// 		hide:true,
  	// 		rules: [{
	// 			required: true,
	// 			message: '管理员账号不能为空',
	// 			trigger: 'blur'
	// 		}]
	// 	},
    //     {            
	// 		label: '管理员姓名',
    //         prop: 'adminName',
 	// 		hide:true,
	// 		display: false,
	// 	},
	// 	{            
	// 		label: '管理员密码',
	// 		labelWidth: 110,
  	// 		hide:true,
    //         prop: 'adminPassword',
	// 		type: 'password',
 	// 		rules: [{
	// 			required: true,
	// 			message: '管理员密码不能为空',
	// 			trigger: 'blur'
	// 		}]
	// 	},
	// ]},
	// 审核信息		
	// group5
	{
		// icon:'el-icon-info',
		label: '  ',
		prop: 'group5',
 		column: [
		{
            label: '记录状态',
            prop: 'rstate',
 			hide:true,
            showColumn: false,
			display:false,
        },
        {            
			label: '创建时间',
            prop: 'createTime',
            hide:true,
            disabled:true,
            addDisplay: false,
        },
        {            
			label: '修改时间',
            prop: 'updateTime',
 			hide:true,
            disabled:true,
            disabled:true,
            addDisplay: false,
        },		
		]
	}]
}
