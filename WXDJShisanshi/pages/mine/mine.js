// pages/mine/mine.js
const util = require('../../utils/util.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headerImg: '../../image/defaultUserFace.png',
    richengImg: '../../image/richengMy.png',
    huiyiImg: '../../image/jinrihuiyi.png',
    lianxiImg: '../../image/lianxi.png',
    kaoshiImg: '../../image/kaoshi.png',
    shezhiImg: '../../image/shezhi.png',
    dataDic: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //
    var that = this;
    util.requestPHPPost('api/index.php/UserApi/detail', { userId: app.globalData.userId, access_token: app.globalData.access_token }, function (res) {
      that.setData({
        dataDic: res.data.result.user,
        headerImg: res.data.result.user.face
      })
    });

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

  //显示默认图
  binderrorimg: function (event) {
    var that = this;
  
    that.setData({
      headerImg: '../../image/defaultUserFace.png'
    })
  },
  /**
   * 点击设置
   */
  showSetting: function () {
    wx.navigateTo({
      url: '../setting/setting?val=555&val1=666',
    })
  },
  /**
   * 点击我的练习
   */
  showMyPractice: function () {
    wx.navigateTo({
      url: '../study/practice/myPractice',
    })
  },
  /**
   * 点击我的考试
   */
  showMyExam: function () {
    wx.navigateTo({
      url: '../study/exam/myExam',
    })
  },

  /**
   * 跳转个人信息页
   */
  goMyProfile: function () {
    var that = this;
    var userDetail = that.data.dataDic;
    if(userDetail === null) {
      wx.showToast({
        title: "未获取到用户信息",
        icon: 'none',
        duration: 2000
      })
    } else {
      // var json = JSON.stringify(userDetail);
      app.globalData.passData = userDetail;
      wx.navigateTo({
        url: '../mine/myProfile?headerImg='+that.data.headerImg,
      })
    }

    // var json = JSON.stringify(userDetail);
    // wx.navigateTo({
    //   url: '../mine/myProfile?userDetail=' + json,
    // })
  },

  /**
   * 跳转日程
   */
  showMyRiCheng: function () {
    wx.navigateTo({
      url: '../richeng/richengMain',
    })
  }

})