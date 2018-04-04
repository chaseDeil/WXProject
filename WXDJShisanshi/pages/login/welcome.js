// pages/login/welcome.js
var app = getApp();
var util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageUrl: '/image/welcome.png',
    imgs: [
      '/image/welcome.png'
    ],
    indicatorDots: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    setTimeout(function () {
      wx.redirectTo({
        url: '../login/login'
      })
    }, 2000);

    // var userId = app.globalData.userId;
    // if (userId == '' || userId == null) {
    //   wx.login({
    //     success: res => {
    //       // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //       var js_code = res.code;
    //       if (js_code == '' || js_code == null) {
    //         wx.redirectTo({
    //           url: '../login/login',
    //         })
    //       } else {
    //         util.requestWxPost('saveLoginAction!searchUserInfo.action', { js_code: js_code }, function (res) {

    //           setTimeout(function () {
    //             // 这里修改成跳转的页面 
    //             if (res.data['code'] == 0) {
    //               app.globalData.userId = res.data['obj']['phpId'],
    //               app.globalData.openId = res.data['obj']['openId']
    //               wx.redirectTo({
    //                 url: '../index/index'
    //               })
    //             } else if ((res.data['code'] == 1)) {
    //               app.globalData.userId = res.data['obj']['phpId'],
    //               app.globalData.openId = res.data['obj']['openId']
    //               wx.redirectTo({
    //                 url: '../login/login'
    //               })
    //             } else {
    //               wx.redirectTo({
    //                 url: '../login/login'
    //               })
    //             }

    //           }, 3000);
    //         })
    //       }
    //     }
    //   })
    // } else {
    //   wx.redirectTo({
    //     url: '../index/index'
    //   })
    // }
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
  
  }
})