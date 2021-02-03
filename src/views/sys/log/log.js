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
  column: [{
    label: '类型',
    prop: 'type',
    sortable:true,
    type: 'select',
    dicUrl: '/sys/dict/type/sys_log_type',
    search: true
  }, {
    label: '标题',
    prop: 'title'
  }, {
    label: 'IP地址',
    prop: 'remoteAddr'
  }, {
    label: '资源路径',
    prop: 'requestUri'
  }, {
    label: '请求方式',
    prop: 'method',
    sortable:true,
    type: 'select',
    dicUrl: '/sys/dict/type/sys_request_method',
    search: true
  }, 
  {
    label: '操作人',
    sortable:true,
    prop: 'createBy'
  }, 
  {
    label: '客户端',
    sortable:true,
    prop: 'serviceId',
    hide: true
  }, 
  {
    width: 80,
    label: '执行时间',
    prop: 'execTime'
  }, 
  {
    width: 150,
    label: '创建时间',
    prop: 'createTime',
    type: 'datetime',
    sortable:true,
    format: 'yyyy-MM-dd HH:mm',
    valueFormat: 'yyyy-MM-dd HH:mm:ss'
  }]
}
