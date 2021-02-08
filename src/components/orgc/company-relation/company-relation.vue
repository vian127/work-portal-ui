<template>
    <avue-crud ref="crud"
        :option="option" 
        :data="data"  
        @row-update="addUpdate"
        @row-del="rowDel">
    </avue-crud>
</template>

<script>
    import {getPage} from '@/api/orgc/companyinfo'
    /**
     * 公司关系
     */
    export default {
        name: "companyRelation",
            data(){
                return {
                    data:[],
                    option:{
                        addBtn:false,
                        editBtn:false,
                        addRowBtn:true,
                        cellBtn:true,
                        menuWidth:250,
                        columnBtn: false,
                        refreshBtn: false,
                        column: [
                        {
                            label: '记录编号',
                            prop: 'id',
                            sortable: false,
                            hide: true,
                            showColumn: false,
                            display: false,
                        },
                        {
                            label: '租户编号',
                            prop: 'tenantId',
                            sortable: false,
                            hide: true,
                            showColumn: false,
                            display: false,
                        },
                        {
                            label: '源公司',
                            prop: 'srcCompanyName',
                            type:'select',
                            cell: true,
                            dicData: [
                                {
                                    label: '上级公司1',
                                    value: "1"
                                },{
                                    label: '上级公司2',
                                    value: "2"
                                }],
                            rules: [{
                                required: true,
                                message: '上级公司不能为空',
                                trigger: 'blur'
                            }],
                        },
                        {
                            label: '目的公司',
                            prop: 'destCompanyName',
                            type:'select',
                            cell: true,
                            dicData: [
                                {
                                    label: '下级公司1',
                                    value: "1"
                                },{
                                    label: '下级公司2',
                                    value: "2"
                                }],
                            rules: [{
                                required: true,
                                message: '下级公司不能为空',
                                trigger: 'blur'
                            }],
                        },
                        {
                            label: '关联类型',
                            prop: 'relationType',
                            type:'select',
                            cell: true,
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
                                message: '关联类型不能为空',
                                trigger: 'blur'
                            }],
                        },
                        // {
                        //     label: '源id',
                        //     prop: 'srcCompanyId',
                        //     sortable: false,
                        //     hide: true,
                        //     showColumn: true,
                        // },
                        // {
                        //     label: '目的Id',
                        //     prop: 'destCompanyId',
                        //     sortable: false,
                        //     hide: true,
                        //     showColumn: true,
                        // },
                        {
                            label: '记录状态',
                            prop: 'rstate',
                            type:'select',
                            cell: true,
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
                            hide: true,
                            showColumn: false,
                        },
                        {
                            label: '修改时间',
                            prop: 'updateTime',
                            sortable: false,
                            hide: true,
                            showColumn: false,
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
                    let data = response.data.data.records;
                    that.companyList = data.map(item=>({
                        value: item.id,
                        lable: item.name,
                    }))
                    console.log(that.companyList);
                }).catch(() => {
                    this.tableLoading = false
                })
            },
            addUpdate(form,index,done,loading){
                // form.id = new Date().getTime();
                form.destCompanyId = form.destCompanyName;
                form.srcCompanyId = form.srcCompanyName;
                this.$emit('getCompanyRelation', this.data);
                done()
            },
            rowDel(form,index){
                var id = form.id;
                this.data = this.data.filter(item=>{
                    return item.id !== id;
                })
            },
            
        }
    };
</script>

<style lang="scss">

</style>
