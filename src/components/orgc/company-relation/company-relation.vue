<template>
    <avue-crud ref="crud" :option="option" :data="data" @row-update="addUpdate" @row-del="rowDel" @row-click="handleRowClick">
    </avue-crud>
</template>

<script>
export default {
  name: "companyRelation",
    data(){
    return {
        data:[
            {
            id:0,
            relationType:'子公司',
            srcCompany: '集团公司',
            destCompany: '集团分公司',
            rstate: '已失效',
            $cellEdit: false
        },{
            id:1,
            relationType:'分公司',
            srcCompany: '集团公司',
            destCompany: '集团分公司',
            rstate: '已生效',
            $cellEdit: false
        }
        ],
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
            prop: 'srcCompany',
            type:'select',
            cell: true,
            dicData: [
                {
                    label: '上级公司1',
                    value: "SUBSIDIARY"
                },{
                    label: '上级公司2',
                    value: "BRANCH"
                }],
            rules: [{
                required: true,
                message: '上级公司不能为空',
                trigger: 'blur'
            }],
        },
        {
            label: '目的公司',
            prop: 'destCompany',
            type:'select',
            cell: true,
            dicData: [
                {
                    label: '下级公司1',
                    value: "SUBSIDIARY"
                },{
                    label: '下级公司2',
                    value: "BRANCH"
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
        {
            label: '源id',
            prop: 'srcCompanyId',
            sortable: false,
            hide: true,
            showColumn: true,
        },
        {
            label: '目的Id',
            prop: 'destCompanyId',
            sortable: false,
            hide: true,
            showColumn: true,
        },
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
      }
    }
  },
  methods:{
    addUpdate(form,index,done,loading){
      this.$message.success('模拟网络请求')
      setTimeout(() => {
        this.$message.success('关闭按钮等待')
        loading()
      }, 1000)
      setTimeout(() => {
        this.$message.success(
          '编辑数据' + JSON.stringify(form) + '数据序号' + index
        )
        done()
      }, 2000)
    },
    rowDel(form,index){
      var id = form.id;
      this.data = this.data.filter(item=>{
        return item.id !== id;
      })
      console.log(form)
    },
    handleRowClick(row, event, column) {
        this.$message({
          showClose: true,
          message: '序号' + row.$index,
          type: 'success',
        });
      }
  }
};
</script>

<style lang="scss">

</style>
