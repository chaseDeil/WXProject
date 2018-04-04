// pages/study/practice/myPractice.js
const util = require('../../../utils/util.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courseImg: '/image/kechengmoren.png',
    array: [],
    page: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    util.requestGet('learnManagementAction!getUserExercise.action', { userId: app.globalData.userId, page: 1, pageSize: 20 }, function (res) {
      that.setData({
        array: res.data['objList'],
        page: 1
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
    var temp = that.data.array
    for (var i = 0; i < temp.length; i++) {
      var obj = temp[i];
      if (obj.strGuid == event.currentTarget.dataset.guid) {
        obj.strCourseUrl = "/image/kechengmoren.png"
      }
    }

    that.setData({
      array: temp
    })
  },

  save:function(event) {
    wx.navigateTo({
      url: '/pages/study/practice/practice?strCourseGuid' + "=" + event.currentTarget.dataset.guid+"&isWrong="+"2"
    });
  },

  practice: function (event) {
    wx.navigateTo({
      url: '/pages/study/practice/practice?strCourseGuid' + "=" + event.currentTarget.dataset.guid + "&isWrong=" + "1"
    });
  },

  //刷新
  refresh: function () {
    var that = this;
    that.data.page = 1;
    wx.showLoading({
      title: '刷新中',
    })
    util.requestGet('learnManagementAction!getUserExercise.action', { userId: app.globalData.userId, page: that.data.page, pageSize: 20 }, function (res) {
      wx.hideLoading()
      that.setData({
        array: res.data['objList'],
        page: 1
      })
      // if (res.data['objList'].length == 0) {
      //   wx.showToast({
      //     title: '没有更多数据',
      //     icon: 'none',
      //     duration: 2000,
      //     mask: true
      //   });
      // } else {
      //   that.setData({
      //     array: res.data['objList'],
      //     page: 1
      //   })
      // }

    });
  },
  //加载
  loadmore: function () {
    var that = this
    var page = parseInt(that.data.page) + 1;
    var objList = that.data.array;
    wx.showLoading({
      title: '加载中',
    })
    util.requestGet('learnManagementAction!getUserExercise.action', { userId: app.globalData.userId, page: page, pageSize: 20 }, function (res) {
      wx.hideLoading()
      if (res.data['objList'].length == 0) {
        wx.showToast({
          title: '没有更多数据',
          icon: 'none',
          duration: 2000,
          mask: true
        });
      } else {
        objList = objList.concat(res.data['objList'])
        that.setData({
          array: objList,
          page: page
        })
      }

    });
  }

})