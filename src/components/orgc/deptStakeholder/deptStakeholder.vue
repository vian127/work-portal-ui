<template>
  <avue-crud
    ref="crud"
    :option="option"
    :data="data"
    @row-update="addUpdate"
    @row-del="rowDel"
  >
  </avue-crud>
</template>

<script>
/**
 * 部门干系人
 */
import { uid } from "@/util/util";
export default {
  name: "deptStakeholder",
  props: ['deptStakeholderList','isEdit'],
  data() {
    return {
      data: [], // 展示数据
      resultData: [], // 传给接口的数据
      option: {
        addBtn: false,
        editBtn: false,
        addRowBtn: false,
        cellBtn: true,
        menuWidth: 150,
        columnBtn: false,
        refreshBtn: false,
        menu: true,
        header: false,
        saveBtnText: "确定",
        column: [
          {
            label: "干系人类型",
            width: 120,
            type: 'select',
            prop: "stakeholderType",
            sortable: false,
            hide: false,
            showColumn: true,
            dicData: [
              {
                  label: '部门负责人',
                  value: "1"
              },{
                  label: '工时签核人',
                  value: "2"
              },{
                  label: '财务',
                  value: "3"
              },{
                  label: '商务',
                  value: "4"
              },{
                  label: '行政',
                  value: "5"
              },{
                  label: 'HR',
                  value: "6"
              },{
                  label: 'IT',
                  value: "7"
              }],
            cell: true,
          },
          {
            label: "顺序号",
            width: 120,
            prop: "seq",
            sortable: false,
            hide: false,
            showColumn: true,
            cell: true,
          },
          {
            label: "员工记录编号",
            width: 120,
            prop: "empId",
            sortable: false,
            hide: false,
            showColumn: true,
            cell: true,
          },
          {
            label: "员工代码",
            width: 120,
            prop: "empCode",
            sortable: false,
            hide: false,
            showColumn: true,
            cell: true,
          },
          {
            label: "员工姓名",
            width: 120,
            prop: "empName",
            sortable: false,
            hide: false,
            showColumn: true,
            cell: true,
          },{
            label: "备注",
            width: 120,
            prop: "remark",
            sortable: false,
            hide: false,
            showColumn: true,
            cell: true,
          }],
      },
    };
  },
  created() {
   
  },
  watch:{
    /**控制部门干系人是否可新增 */
    deptStakeholderList(){
       this.data = this.deptStakeholderList.map((item) => ({
        ...item,
        markId: uid(),
      }));
      if(this.deptStakeholderList && this.deptStakeholderList.length >0){
        this.option.addRowBtn = false;
        this.option.header = false;
      }else {
        this.option.addRowBtn = true;
        this.option.header = true;
      }
      this.resultData = this.data;
    },
    /**控制部门干系人是否可编辑 */
    isEdit(cur){
      if(cur){
        this.option.menu = false;
      }else{
        this.option.menu = true;
      }
    }
  },
  mounted: function () {},
  methods: {
    addUpdate(form, index, done) {
      form.markId = uid();
      let flag = this.resultData.find((item) => item.id == form.id);
      if (!flag) {
        this.resultData.push(form);
      }
      this.$emit("getDeptStakeholder", this.resultData);
      this.option.addRowBtn = false;
      this.option.header = false;
      done();
    },
    rowDel(form, index) {
      let markId = form.markId;
      /**页面展示数据 */
      this.data = this.data.filter((item) => {
        return item.markId !== markId;
      });
      /**传递给后台数据 */
      this.resultData.forEach((item) => {
        if (item.markId === markId) {
          item.rstate = "0";
        }
      });
      this.$emit("getDeptStakeholder", this.resultData);
    },
  },
};
</script>

<style lang="scss">
</style>
