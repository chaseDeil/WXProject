var app = getApp()
Page({
  data: {
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
    unstart_list: [{ title: '第一次代表大会', time: '2018-01-21 09:35', person: '李想' }, { title: '第二次代表大会',time: '2018-01-23 07:55', person: '张先'}],
    isover_list: [{ title: '第0次代表大会', time: '2018-01-21 09:35', person: '李想' }, { title: '第二次代表大会', time: '2018-01-23 07:55', person: '张先' }],
    isfinish_list: [{ title: '第0次代表大会', time: '2018-01-21 09:35', person: '李想' }, { title: '第二次代表大会', time: '2018-01-23 07:55', person: '张先' }],
    iscancel_list: [{ title: '第0次代表大会', time: '2018-01-21 09:35', person: '李想' }, { title: '第二次代表大会', time: '2018-01-23 07:55', person: '张先' }],
    isMeeting:true,
  },
  onLoad: function () {
    var that = this;

    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });
  },
  /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  itemClick:function(e){
    wx.navigateTo({
      url: '../sanhuiyike/sanhuiyikedetail',
    })
  },
  gotoMeeting: function (e) {
    wx.navigateTo({
      url: '../sanhuiyike/sanhuiyikeing',
    })
  }
})  