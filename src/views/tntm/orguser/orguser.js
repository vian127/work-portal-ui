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
    excelBtn: true,
    printBtn: true,
    column: [
		{
            label: '记录编号',
            prop: 'id',
 			hide:true,
			showColumn:false,
			display: false,
        },
		{
            label: '租户编号',
            prop: 'tenantId',
  			hide:true,
			showColumn:false,
			display: false,
        },
		{
            label: '用户编号',
            prop: 'userId',
            prop: 'tenantId',
  			hide:true,
			showColumn:false,
			display: false,
        },
		{
            label: '用户姓名',
            prop: 'name',
            sortable: false,
			hide: false,
			showColumn: true,
            addDisplay: true,
            editDisplay: true,
            viewDisplay: true,
			search: true,
			rules: [{
				required: true,
				message: '请输入用姓名'
			},
			{
				min: 2,
				max: 20,
				message: '长度在2到20个字符',
				trigger: 'blur'
			}],
		},
		{
            label: '用户代码',
            prop: 'code',
            sortable: false,
			hide: false,
			showColumn: true,
            addDisplay: true,
            editDisplay: true,
            viewDisplay: true,
			rules: [{
				required: true,
				message: '请输入用姓名',
				trigger: 'blur'
			}],
		 },
		{
            label: '用户简称',
            prop: 'alias',
  			hide:true,
			showColumn:false,
			display: false,
        },
		{
            label: '用户类型',
            prop: 'type',
  			hide:true,
			showColumn:false,
			display: false,
        },
		{
            label: '头像',
            prop: 'avatar',
  			hide:true,
			showColumn:false,
			display: false,
        },
		{
            label: '手机',
            prop: 'mobile',
            sortable: false,
			hide: false,
			showColumn: true,
            addDisplay: true,
            editDisplay: true,
            viewDisplay: true,
			search: true,
			type: 'tel',
			value: '',
			rules: [
				{
					required: true,
					message: '请输入手机号'
				},	
				{
					min: 11,
					max: 11,
					message: '长度在 11 个字符',
					trigger: 'blur'
				}
			],
		},
		{
            label: '电话',
            prop: 'phone',
            sortable: false,
			hide: true,
			showColumn: true,
            addDisplay: true,
            editDisplay: true,
            viewDisplay: true,
        },
		{
            label: '传真',
            prop: 'fax',
            sortable: false,
			hide: true,
			showColumn: true,
            addDisplay: true,
            editDisplay: true,
            viewDisplay: true,
        },
		{
            label: '邮箱',
            prop: 'email',
            sortable: false,
			hide: false,
			showColumn: true,
            addDisplay: true,
            editDisplay: true,
            viewDisplay: true,
			type: 'email',
        },
		{
            label: '证件类型',
            prop: 'certType',
  			hide:true,
			showColumn:false,
			display: false,
        },
		{
            label: '证件号',
            prop: 'certId',
  			hide:true,
			showColumn:false,
			display: false,
        },
		{
            label: '刷险ID',
            prop: 'faceId',
   			hide:true,
			showColumn:false,
			display: false,
        },
		{
            label: '是否锁定',
            prop: 'locked',
  			hide:true,
			showColumn:false,
			display: false,
        },
		{
            label: '是否过期',
            prop: 'expired',
  			hide:true,
			showColumn:false,
			display: false,
        },
		{
            label: '过期时间',
            prop: 'expiredTime',
  			hide:true,
			showColumn:false,
			display: false,
        },
		{
            label: '用户描述',
            prop: 'description',
            sortable: false,
			hide: true,
			showColumn: true,
            addDisplay: true,
            editDisplay: true,
            viewDisplay: true,
 			type: 'textarea',
			span:24,
            minRows:3,
            maxlength:500,
		},
		{
            label: '所属机构',
            prop: 'orgId',
			hide: true,
			showColumn: true,
            addDisplay: true,
            editDisplay: true,
            viewDisplay: true,
			type: 'tree',
			dicUrl: '/tntm/orginfo/tree',
			defaultExpandAll: true,
			props: {
				label: 'name',
				value: 'id'
			},
			rules: [{
				required: true,
				message: '请选择所属机构',
				trigger: 'change'
			}],
		},
		{
            label: '顺序号',
            prop: 'seq',
            sortable: false,
			hide: false,
			showColumn: true,
            addDisplay: true,
            editDisplay: true,
            viewDisplay: true,
		},
		{
			label: '角色',
			prop: 'roleIdList',
			overHidden: true,
			dataType: 'array',
			type: 'checkbox',
			span: 24,
			rules: [{
				required: true,
				message: '请选择角色',
				trigger: 'blur'
			}],
			props: {
				label: 'name',
				value: 'roleId'
			},
			dicUrl: '/saas/tenantrole/list'
		}, 
		{
            label: '记录状态',
            prop: 'rstate',
            sortable: false,
			hide: false,
			showColumn: true,
            addDisplay: false,
            editDisplay: true,
            viewDisplay: true,
			span: 24,
			slot: true,
            type: 'radio',
            rules: [{
                required: true,
                message: '请选择启用状态',
                trigger: 'blur'
            }],
            dicData: [
			{
                label: '启用',
                value: "1"
            },{
                label: '停用',
                value: "0"
            },],
		},
		{
            label: '创建时间',
            prop: 'createTime',
            sortable: false,
			hide:true,
            addDisplay: false,
            editDisplay: true,
            viewDisplay: true,
			disabled:true,
        },
		{
            label: '修改时间',
            prop: 'updateTime',
            sortable: false,
 			hide:true,
            addDisplay: false,
            editDisplay: true,
            viewDisplay: true,
			disabled:true,
		},],
		group:[{
			icon:'el-icon-info',
			label: '账号信息',
			prop: 'group1',
			column: [{            
				label: '登录账号',
				prop: 'loginCode',
				sortable: false,
				hide: true,
				showColumn: true,
				addDisplay: true,
				editDisplay: true,
				viewDisplay: true,
				rules: [{
						required: true,
						message: '请输入用姓名'
					},
					{
						min: 2,
						max: 20,
						message: '长度在2到20个字符',
						trigger: 'blur'
					}],
				},
				{
					label: '初始密码',
					prop: 'loginPassword',
					sortable: false,
					hide: true,
					showColumn: false,
					addDisplay: true,
					editDisplay: false,
					viewDisplay: false,
					type: 'password',
					value: '',
					rules: [{
						required: true,
						min: 6,
						max: 20,
						message: '长度在 6 到 20 个字符',
						trigger: 'blur'
					}],
				},],
		},],
}
