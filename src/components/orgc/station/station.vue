<template>
    <avue-crud ref="crud" :option="option" :data="data" @row-update="addUpdate" @row-del="rowDel" @row-click="handleRowClick">
    </avue-crud>
</template>

<script>
export default {
  name: "station",
    data(){
    return {
        data:[{
            id:0,
            stationName:'驻点1',
            rstate: '已生效',
            stationCode: 'qwqw',
            $cellEdit: false
        },{
            id:1,
            stationName:'驻点2',
            rstate: '已失效',
            stationCode: 'oqq',
             $cellEdit: false
        }],
       option:{
        addBtn:false,
        editBtn:false,
        addRowBtn:true,
        cellBtn:true,
        menuWidth:250,
        columnBtn: false,
        refreshBtn: false,
       
        column: [{
            label: '驻点名称',
            prop: 'stationName',
            cell: true,
            rules: [
              {
                required: true,
                message: '请输入驻点名称',
                trigger: 'blur'
              }
            ]
        },{
            label: '驻点代码',
            prop: 'stationCode',
            rules: [
              {
                required: true,
                message: '请输入驻点名称',
                trigger: 'blur'
              }
            ],
            cell: true
        },{
            label: '记录状态',
            prop: 'rstate',
            type:'select',
            dicData: [
            {
                label: '已生效',
                value: "1"
            },{
                label: '已失效',
                value: "0"
            }],
             rules: [
              {
                required: true,
                message: '请选择记录状态',
                trigger: 'blur'
              }
            ],
            cell: true
        }]
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
