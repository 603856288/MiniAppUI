const WeToast = require('../../components/wetoast/wetoast.js');

Page({
  data: {
  },
  onLoad:function(){
    
  },
  type01:function(){
    const wetoast = new WeToast;
    wetoast.toast({
        title: 'test01',
        duration: 1000
    })
  },
  type02: function(e) {
    const wetoast = new WeToast;
    wetoast.toast({
        title: 'test02',
        img:'../../images/about_btn.png',
        duration: 1000
    })
  }
})
