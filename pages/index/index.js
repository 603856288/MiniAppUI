Page({
  data: {
  },
  dialog:function(){
    wx.navigateTo({
      url: '../dialog/dialog'
    })
  },
  wetoast: function() {
    wx.navigateTo({
      url: '../wetoast/wetoast'
    })
  },
  button: function() {
    wx.navigateTo({
      url: '../button/button'
    })
  },
  steps: function() {
    wx.navigateTo({
      url: '../steps/steps'
    })
  },
  form: function() {
    wx.navigateTo({
      url: '../form/form'
    })
  },
  tips: function() {
    wx.navigateTo({
      url: '../tips/tips'
    })
  },
  checkBox: function() {
    wx.navigateTo({
      url: '../checkBox/checkBox'
    })
  },
  mark: function(){
    wx.navigateTo({
      url: '../mark/mark'
    })
  }
})
