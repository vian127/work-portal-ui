<template>
     <avue-crud ref="crud"
        :option="option" 
        :data="data"  
        @row-update="addUpdate"
        @row-del="rowDel">
    </avue-crud>
</template>

<script>
  /**
   * 干系人
   */
    export default {
        name: "stakeholder",
        props: ['companyId','stakeholderData','isShowView'],
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
                    menu: true,
                    header: true,
                    column: [
                    {
                        label: '驻点代码',
                        prop: 'stationCode',
                        sortable: false,
                        hide: false,
                        showColumn: true,
                        cell: true,
                    },
                    {
                        label: '干系人类型',
                        prop: 'stakeholderType',
                        sortable: false,
                        hide: false,
                        showColumn: true,
                        cell: true,
                    },
                    {
                        label: '顺序号',
                        prop: 'seq',
                        sortable: false,
                        hide: false,
                        showColumn: true,
                        cell: true,
                    },
                    {
                        label: '员工记录编号',
                        prop: 'empId',
                        sortable: false,
                        hide: false,
                        showColumn: true,
                        cell: true,
                    },
                    {
                        label: '员工代码',
                        prop: 'empCode',
                        sortable: false,
                        hide: false,
                        showColumn: true,
                        cell: true,
                    },
                    {
                        label: '员工姓名',
                        prop: 'empName',
                        sortable: false,
                        hide: false,
                        showColumn: true,
                        cell: true,
                    },
                    {
                        label: '记录状态',
                        prop: 'rstate',
                        sortable: false,
                        hide: false,
                        showColumn: true,
                        cell: true,
                    },
                    ]
                },
                
            }
        },
        created() {
            this.data = this.stakeholderData;
            this.handleBtn();
        },
        mounted: function () {
        },
        methods:{
            addUpdate(form,index,done,loading){
                form.id = new Date().getTime();
                form.companyId = this.companyId;
                this.$emit('getStakeholder', this.data);
                done()
            },
            rowDel(form,index){
                var id = form.id;
                this.data = this.data.filter(item=>{
                   return item.id !== id;
                })
            },
            /**
             * 控制干系人列表操作按钮
             */
            handleBtn(){
                if(this.isShowView){
                    this.option.addRowBtn = false;
                    this.option.header = false;
                    this.option.menu = false;
                }
            }
        }
    }
</script>

<style lang="scss">

</style>
