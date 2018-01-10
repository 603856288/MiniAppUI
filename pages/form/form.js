// pages/form/form.js

const WeToast = require('../../components/wetoast/wetoast.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tel:'',
    second:"60",
    yzmtxt:"获取验证码",
    timer:false,
    mobType:"iphone 5 金色",
    breakArr:[{
      'key':'外屏',
      'val':'99',
      'open':true
    },{
      'key':'内屏',
      'val':'99',
      'open':false
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const wetoast = new WeToast;
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  inputSaveTel:function(e){
    var val = e.detail.value;
    this.setData({
      tel:val
    });
  },//记录手机号
  btnYzm:function(){
    var self = this;
    if(!self.data.timer){
      var tel = this.data.tel;
      //console.log(tel)
      if(!tel){
        this.wetoast.toast({
              title: '手机号不能为空',
              duration: 1000
          })
        return;
      }else{
        var reg=/^1[3|4|5|7|8][0-9]\d{8}$/ ;
        if(!reg.test(tel)){
          this.wetoast.toast({
              title: '手机号格式错误',
              duration: 1000
          })
          return;
        }
      }
      self.setData({
        timer:true,
      })  
      var time = setInterval(function(){
        if(self.data.second>0){
          self.data.second--;
          self.setData({
            second:self.data.second,
            yzmtxt:self.data.second+"秒",
          })
        }else{
          clearInterval(time);
          self.setData({
            yzmtxt:"获取验证码",
            second:"60",
            timer:false,
          })
        }
      },1000); 
    }
  }//发送短信
})