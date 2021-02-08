<template>
    <avue-crud ref="crud"
        :option="option" 
        :page="page"
        :data="data"  
        @selection-change="selectionChange"
        >
    </avue-crud>
</template>

<script>
    import {getPage} from '@/api/orgc/companyinfo'
    /**
     * 关联公司
     */
    export default {
        name: "relevanceCompany",
            data(){
                return {
                    data:[],
                    option:{
                        addBtn:false,
                        editBtn:false,
                        cellBtn:true,
                        menuWidth:250,
                        columnBtn: false,
                        refreshBtn: false,
                        selection: true,
                        header: false,
                        menu:false,
                        column: [
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
                    selectData:[],
            }
        },
        created() {
            this.getPage(this.page,);
        },
        mounted: function () {
        },
        methods:{
            /**
             * 获取列表(分页)数据
             */
            getPage(page) {
                let that = this;
                getPage(Object.assign({
                    current: page.currentPage,
                    size: page.pageSize,
                    descs: this.page.descs,
                    ascs: this.page.ascs,
                })).then(response => {
                    that.data = response.data.data.records;
                }).catch(() => {
                    this.tableLoading = false
                })
            },
            selectionChange(list){
                this.selectData = list;
            },
        }
    };
</script>

<style lang="scss">

</style>
