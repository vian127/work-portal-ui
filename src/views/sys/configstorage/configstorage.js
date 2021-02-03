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
    labelWidth: 150,
    group: [
        {
            icon: 'el-icon-s-order',
            label: '基本信息',
            prop: 'group1',
            column: [
                {
                    label: '存储类型',
                    prop: 'storageType',
                    type: 'select',
                    dicUrl: '/sys/dict/type/sys_storage_type',
                    rules: [{
                        required: true,
                        message: '请选择存储类型',
                        trigger: 'blur'
                    }]
                },
                {
                    label: 'endpoint',
                    prop: 'endpoint',
                    rules: [{
                        required: true,
                        message: 'endpoint不能为空',
                        trigger: 'blur'
                    }]
                },
                {
                    label: 'accessKeyId',
                    prop: 'accessKeyId',
                    rules: [{
                        required: true,
                        message: 'accessKeyId不能为空',
                        trigger: 'blur'
                    }]
                },
                {
                    label: 'accessKeySecret',
                    prop: 'accessKeySecret',
                    type:'password',
                    rules: [{
                        required: true,
                        message: 'accessKeySecret不能为空',
                        trigger: 'blur'
                    }]
                },
                {
                    label: 'bucket',
                    prop: 'bucket',
                    rules: [{
                        required: true,
                        message: 'bucket不能为空',
                        trigger: 'blur'
                    }]
                },
            ]
        },
        {
            icon: 'el-icon-picture',
            label: '图片配置',
            prop: 'group2',
            column: [
                {
                    label: '图片水印',
                    prop: 'waterMarkContent'
                }
            ]
        }]
}
