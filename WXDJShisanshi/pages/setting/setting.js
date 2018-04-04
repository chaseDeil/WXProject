// pages/setting/setting.js

var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var s = options.val;
    // var s1 = options.val1 + s;
    // console.log(s1)
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
  /**
   * 点击清除缓存
   */
  cleanCash: function () {
    wx.showModal({
      title: '提示',
      content: '确定清除缓存数据吗?',
      success:function(res) {
        if(res.confirm) {
          wx.clearStorage();
        } else if(res.cancel) {

        }
      }
    })
  },
  /**
   * 关于我们
   */
  aboutUs: function () {
    wx.navigateTo({
      url: '../setting/aboutUs',
    })
  },
  logout: function () {
    wx.showModal({
      title: '提示',
      content: '确定退出登录吗?',
      success: function (res) {
        if (res.confirm) {
          app.globalData.userId = '';
          app.globalData.access_token = '';
          wx.reLaunch({
            url: '../login/login',
          })
        } else if (res.cancel) {

        }
      }
    })
    
  }
})