/**
 * Copyright (C) 2020
 * All rights reserved, Designed By AiCoder.
 * date 2021-01-28 14:41:17
 */
export const tableOption = {
    /**控制表格配置 */
    initTableOption: (type) => {
        tableOption.tableConfig.printBtn = type;
        tableOption.tableConfig.menu = type;
        tableOption.tableConfig.excelBtn = type;
        tableOption.tableConfig.header = type;
        tableOption.tableConfig.column.forEach(item => {
            item.addDisplay = type;
            item.editDisplay =  type;
            item.viewDisplay = type;
        });
        return tableOption.tableConfig;
    },
    tableConfig: {
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
        header: true,
        column: [
            {
                label: '记录编号',
                prop: 'id',
                sortable: false,
                hide: false,
                showColumn: true,
                addDisplay: true,
                editDisplay: true,
                viewDisplay: true,
            },
            {
                label: '租户编号',
                prop: 'tenantId',
                sortable: false,
                hide: false,
                showColumn: true,
                addDisplay: true,
                editDisplay: true,
                viewDisplay: true,
            },
            {
                label: '所属公司Id',
                prop: 'companyId',
                sortable: false,
                hide: false,
                showColumn: true,
                addDisplay: true,
                editDisplay: true,
                viewDisplay: true,
            },
            {
                label: '驻点代码',
                prop: 'stationCode',
                sortable: false,
                hide: false,
                showColumn: true,
                addDisplay: true,
                editDisplay: true,
                viewDisplay: true,
            },
            {
                label: '干系人类型',
                prop: 'stakeholderType',
                sortable: false,
                hide: false,
                showColumn: true,
                addDisplay: true,
                editDisplay: true,
                viewDisplay: true,
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
                label: '员工记录编号',
                prop: 'empId',
                sortable: false,
                hide: false,
                showColumn: true,
                addDisplay: true,
                editDisplay: true,
                viewDisplay: true,
            },
            {
                label: '员工代码',
                prop: 'empCode',
                sortable: false,
                hide: false,
                showColumn: true,
                addDisplay: true,
                editDisplay: true,
                viewDisplay: true,
            },
            {
                label: '员工姓名',
                prop: 'empName',
                sortable: false,
                hide: false,
                showColumn: true,
                addDisplay: true,
                editDisplay: true,
                viewDisplay: true,
            },
            {
                label: '备注',
                prop: 'remark',
                sortable: false,
                hide: false,
                showColumn: true,
                addDisplay: true,
                editDisplay: true,
                viewDisplay: true,
            },
            {
                label: '记录状态',
                prop: 'rstate',
                sortable: false,
                hide: false,
                showColumn: true,
                addDisplay: true,
                editDisplay: true,
                viewDisplay: true,
            },
            {
                label: '创建时间',
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
                prop: 'updateTime',
                sortable: false,
                hide: false,
                showColumn: true,
                addDisplay: true,
                editDisplay: true,
                viewDisplay: true,
            },
            ]
    }
}
