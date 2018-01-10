Page({
  data: {
    dialogItem: {
      'dialogHidden':true,//是否显示
      'iconSrc':'https://static.zhongan.com/website/open/assets/wp/3cMiniAppUI/images/buy_success.png',//图标路径
      'tt':'提交成功',//标题
      'msg': '由于目前系统原因，本公司维修发票仅支持普通发票，项目栏仅能填写技术服务费，给您造成的不便感到万分抱歉。',//显示文案
      'btnText':'知道了',//按钮文案
      'dialogBindTap':'dialogClose'//按钮方法
    },
    modelItem:{
      'modalHidden':true,
      'title':'提示',
      'content':'3cUI提示表现框',
      'modelBindTap':'modelHide'//按钮方法
    }
  },
  type01:function(){
    this.setData({
      'dialogItem.dialogHidden':false,
      'dialogItem.iconSrc':"https://static.zhongan.com/website/open/assets/wp/3cMiniAppUI/images/buy_success.png",
      'dialogItem.msg':'由于目前系统原因，本公司维修发票仅支持普通发票，项目栏仅能填写技术服务费，给您造成的不便感到万分抱歉。'
    })
  },
  type02: function(e) {
    this.setData({
      'dialogItem.dialogHidden':false,
      'dialogItem.iconSrc':"",
      'dialogItem.msg':'在您提交申请的15个工作日内，发票将以挂号信形式发出，请您保持手机畅通以便快递员联系到您。'
    })
  },
  dialogClose:function(){
    this.setData({
      'dialogItem.dialogHidden':true
    }); 
  },
  modelTest01:function() {
    this.setData({
      'modelItem.modalHidden': false
    });
  },
  modelHide:function() {
    this.setData({'modelItem.modalHidden': true});
  }
})
