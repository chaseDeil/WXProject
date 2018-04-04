// pages/ribao/ribaoList.js
const util = require('../../utils/util.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: 0,
    page: 1,
    objList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          height: res.windowHeight,
        })
      }
    })

    
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
    var that = this;
    that.setData({
      objList: []
    })
    that.loadData(1)
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

  //加载更多
  loadmore: function () {
    var that = this;
    that.loadData(that.data.page + 1)
  },

  //加载数据
  loadData: function (p) {
    // console.log("加载第" + p + "页")
    wx.showLoading({
      title: '加载中',
    })
    var that = this;
    var objList = that.data.objList
    util.requestGet('partyDailyAction!getPartyDailyList.action', { userId: app.globalData.userId, page: p }, function (res) {
      if (res.data['objList'].length == 0) {
        wx.showToast({
          title: '没有更多数据',
          icon: 'none',
          duration: 2000
        });
      } else {
        objList = objList.concat(res.data['objList'])
        that.setData({
          objList: objList,
          page: p,
        })
      }
      wx.hideLoading()
    })
  },

  //item点击时间处理
  itemClick: function (e) {
    var that = this
    app.globalData.passData = that.data.objList[e.currentTarget.dataset.index]
    wx.navigateTo({
      url: '/pages/ribao/ribaoInfo'
    })
  },

  //新建
  gotoNew: function (e) {
    app.globalData.passData = null;
    wx.navigateTo({
      url: '/pages/ribao/ribaoAdd'
    })
  },
})