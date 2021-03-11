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
 * 服务驻点
 */
import { uid } from "@/util/util";
export default {
  name: "station",
  props: ["companyId", "stationIsEdit", "stationData"],
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
            label: "驻点名称",
            prop: "stationName",
            cell: true,
            rules: [
              {
                required: true,
                message: "请输入驻点名称",
                trigger: "blur",
              },
            ],
          },
          {
            label: "驻点代码",
            prop: "stationCode",
            rules: [
              {
                required: true,
                message: "请输入驻点代码",
                trigger: "blur",
              },
            ],
            cell: true,
          },
        ],
      },
    };
  },
  created() {
    this.data = this.stationData.map((item) => ({
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
      this.$emit("getStation", this.resultData);
      done();
    },
    rowDel(form, index) {
      let markId = form.markId;
      /**页面展示数据 */
      this.data = this.data.filter((item) => {
        return item.markId != markId;
      });
      /**传递给后台数据 */
      this.resultData.forEach((item) => {
        if (item.markId === markId) {
          item.rstate = "0";
        }
      });
      this.$emit("getStation", this.resultData);
    },
    /**
     * 控制服务驻点列表操作按钮
     */
    handleBtn() {
      if (this.stationIsEdit) {
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
