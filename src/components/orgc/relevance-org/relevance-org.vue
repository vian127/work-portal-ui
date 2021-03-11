<template>
    <avue-crud ref="crud"
        :option="option" 
        :page="page"
        :table-loading="tableLoading"
        :data="data"
        >
        <template slot="selectId" slot-scope="scope">
           <el-radio :label="scope.row" v-model="selectData">&nbsp;</el-radio>
        </template>
    </avue-crud>
</template>
<script>
    import {getOrg} from '@/api/orgc/orgtenant'
    /**
     * 关联公司
     */
    export default {
            name: "relevanceOrg",
            data(){
                return {
                    data:[],
                    tableLoading: false,
                    option:{
                        addBtn:false,
                        editBtn:false,
                        cellBtn:true,
                        menuWidth:250,
                        columnBtn: false,
                        refreshBtn: false,
                        header: false,
                        menu:false,
                        column: [
                            {
                                label: '选择',
                                prop: 'selectId',
                                width: 80,
                                sortable: false,
                                hide: false,
                                showColumn: true,
                                addDisplay: true,
                                editDisplay: true,
                                viewDisplay: true,
                                slot:true
                            },
                            {
                                label: '公司名称',
                                prop: 'name',
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
                    },
                    page: {
                        total: 0, // 总页数
                        currentPage: 1, // 当前页数
                        pageSize: 20, // 每页显示多少条
                        ascs: [],//升序字段
                        descs: []//降序字段
                    },
                    companyList:[],
                    selectData: null,
                }
               
        },
        props: ['relevanceOrgIds'],
        created() {
            this.getPage(this.page);
        },
        mounted: function () {
        },
        methods:{
            /**
             * 获取列表(分页)数据
             */
            getPage(page) {
                this.tableLoading = true;
                let that = this;
                getOrg(Object.assign({
                    current: page.currentPage,
                    size: page.pageSize,
                    descs: this.page.descs,
                    ascs: this.page.ascs,
                })).then(response => {
                    that.data = response.data.data.records;
                    let result = that.data.filter(item=>{
                        return item.id == this.relevanceOrgIds;
                    })
                    setTimeout(()=>{
                        this.selectData = result[0];
                    },0)
                    this.tableLoading = false;
                }).catch(() => {
                    this.tableLoading = false
                })
            },
        }
    };
</script>

<style lang="scss">

</style>
