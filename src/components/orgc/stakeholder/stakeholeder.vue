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
 * 干系人
 */
import { uid } from "@/util/util";
export default {
  name: "stakeholder",
  props: ["companyId", "stakeholderData", "isShowView","stationData"],
  data() {
    return {
      data: [], // 展示数据
      resultData: [], // 传给接口的数据
      option: {
        addBtn: false,
        editBtn: false,
        addRowBtn: true,
        cellBtn: true,
        menuWidth: 150,
        columnBtn: false,
        refreshBtn: false,
        menu: true,
        header: true,
        saveBtnText: "确定",
        column: [
          {
            label: "驻点代码",
            width: 120,
            prop: "stationCode",
            sortable: false,
            hide: false,
            showColumn: true,
            cell: true,
            type: 'select',
            props: {
              label: 'stationName',
              value: 'id'
            },
            dicData: this.stationData,
          },
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
          }],
      },
    };
  },
  created() {
    this.data = this.stakeholderData.map((item) => ({
      ...item,
      markId: uid(),
    }));
    this.resultData = this.data;
    this.handleBtn();
  },
  mounted: function () {},
  methods: {
    addUpdate(form, index, done) {
      form.companyId = this.companyId;
      form.markId = uid();
      let flag = this.resultData.find((item) => item.id == form.id);
      if (!flag) {
        this.resultData.push(form);
      }
      this.$emit("getStakeholder", this.resultData);
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
      this.$emit("getStakeholder", this.resultData);
    },
    /**
     * 控制干系人列表操作按钮
     */
    handleBtn() {
      if (this.isShowView) {
        this.option.addRowBtn = false;
        this.option.header = false;
        this.option.menu = false;
      }
    },
  },
};
</script>

<style lang="scss">
</style>
