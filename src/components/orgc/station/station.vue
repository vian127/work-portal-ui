<template>
    <avue-crud ref="crud" :option="option" :data="data" @row-update="addUpdate" @row-del="rowDel">
    </avue-crud>
</template>

<script>
  /**
   * 服务驻点
   */
  export default {
    name: "station",
      props: ['companyId','isShowView'],
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
                  message: '请输入驻点代码',
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
    created() {
      this.data = this.stakeholderData;
      this.handleBtn();
    },
    mounted: function () {
    },
    methods:{
      addUpdate(form,index,done){
        form.id = new Date().getTime();
        this.$emit('getStation', this.data);
        done()
      },
      rowDel(form,index){
        var id = form.id;
        form.companyId = this.companyId;
        this.data = this.data.filter(item=>{
          return item.id !== id;
        })
        this.$emit('getStation', this.data);
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
  };
</script>

<style lang="scss">

</style>
