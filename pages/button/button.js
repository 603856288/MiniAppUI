// pages/button/button.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  getCall:function(){
    wx.makePhoneCall({
      phoneNumber: '1010-9955'
    })
  }
})