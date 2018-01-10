// pages/mark/mark.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stars: [0, 1, 2, 3, 4],
    normalSrc: '../../images/star-off.png',
    selectedSrc: '../../images/star-on.png',
    key:[0,0,0]//评分
  },
  selectClick: function (e) {
    var key = e.currentTarget.dataset.key;//得分
    var zindex = e.currentTarget.dataset.zindex;//第几项
    //console.log("第" + zindex + "项，得" + key + "分")
    var keyArr = this.data.key;
    keyArr[zindex] = key;
    this.setData({
      key: keyArr
    })
  }
})