export const tableOption = {
  dialogDrag:true,
  border: true,
  index: true,
  indexLabel: '序号',
  stripe: true,
  menuAlign: 'center',
  align: 'center',
  viewBtn: true,
  excelBtn: true,
  printBtn: true,
  menuType:'text',
  column: [{
    width: 150,
    label: '服务ID',
    prop: 'id',
    align: 'center',
    sortable: true,
    rules: [{
      required: true,
      message: '请输入服务ID',
      trigger: 'blur'
    }]
  }, {
    label: '服务密钥',
    prop: 'clientSecret',
    type: 'password',
    align: 'center',
    overHidden: true,
    hide: true,
    showColumn: false,
    width: 120,
    rules: [{
      required: true,
      message: '请输入服务密钥',
      trigger: 'blur'
    }]
  }, {
    label: '作用域',
    prop: 'scope',
    align: 'center',
    rules: [{
      required: true,
      message: '请输入作用域',
      trigger: 'blur'
    }]
  }, {
    label: '授权类型',
    prop: 'authorizedGrantTypes',
    align: 'center',
    type: 'checkbox',
    dicUrl: '/sys/dict/type/sys_authorized_grant_type',
    overHidden: true,
    rules: [{
      required: true,
      message: '请输入授权模式',
      trigger: 'blur'
    }]
  }, {
    label: '回调地址',
    prop: 'webServerRedirectUri',
    align: 'center',
    hide: true
  }, {
    label: '权限',
    prop: 'authorities',
    align: 'center',
    hide: true
  }, {
    label: '自动放行',
    prop: 'autoapprove',
    align: 'center',
    type: 'radio',
    dicUrl: '/sys/dict/type/sys_true_false',
    hide: true,
    rules: [{
      required: true,
      message: '请选择是否放行',
      trigger: 'blur'
    }]
  }, {
    label: '令牌时效(s)',
    prop: 'accessTokenValidity',
    align: 'center',
    hide: true
  }, {
    label: '刷新时效(s)',
    prop: 'refreshTokenValidity',
    align: 'center',
    hide: true
  }, {
    label: '扩展信息',
    prop: 'additionalInformation',
    align: 'center',
    hide: true
  }, {
    label: '资源ID',
    prop: 'resourceIds',
    align: 'center',
    hide: true
  }]
}
