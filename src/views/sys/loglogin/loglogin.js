export const tableOption = {
  dialogDrag:true,
  border: true,
  index: true,
  indexLabel: '序号',
  stripe: true,
  menuAlign: 'center',
  menuWidth: 150,
  align: 'center',
  refreshBtn: true,
  showColumnBtn: false,
  searchSize: 'mini',
  searchShow: false,
  addBtn: false,
  editBtn: false,
  delBtn: false,
  viewBtn: true,
  excelBtn: true,
  printBtn: true,
  menuType:'text',
  props: {
    label: 'label',
    value: 'value'
  },
  column: [
    {
      width: 150,
      label: '登录时间',
      prop: 'createTime',
      type: 'datetime',
      sortable:true,
      format: 'yyyy-MM-dd HH:mm',
      valueFormat: 'yyyy-MM-dd HH:mm:ss'
    },
    {
      label: '用户ID',
      prop: 'createId',
      sortable:true,
      search: true
    },
    {
    label: '登录类型',
    prop: 'type',
    sortable:true,
    search: true
  },
  {
    label: '登录账号',
    prop: 'createBy',
    sortable:true,
    search: true,
  }, 
  {
    label: 'IP地址',
    prop: 'remoteAddr',
    sortable:true,
    search: true,
  }, 
  {
    label: '地址信息',
    prop: 'address',
    sortable:true,
    search: true,
  }, 
  {
    label: '用户代理',
    prop: 'userAgent'
  }, 
]}
