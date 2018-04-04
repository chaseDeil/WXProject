const util = require('../../../utils/util.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    obj:"",
    strExamGuid:"",
    strCourseGuid:"",
    numComplete:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      strExamGuid: options.strExamGuid,
      strCourseGuid: options.strCourseGuid,
      numComplete: options.numComplete,
    });
    util.requestGet('learnManagementAction!getExamResult.action', { userId: app.globalData.userId, strExamGuid: options.strExamGuid }, function (res) {
      that.setData({
        obj: res.data['obj']
      });
    });
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const ctx = wx.createCanvasContext('myCanvas')
    ctx.setFillStyle('#b6011f')
    ctx.beginPath()
    ctx.moveTo(0,0)
    //0.08=60rpx/750rpx
    ctx.quadraticCurveTo(wx.getSystemInfoSync().windowWidth * 0.5, wx.getSystemInfoSync().windowHeight *0.08, wx.getSystemInfoSync().windowWidth, 0)
  
    ctx.fill()
    ctx.draw()
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
    var temp = that.data.obj
    temp.strCourseUrl = "/image/kechengmoren.png"
    that.setData({
     obj: temp
    })
  },
})