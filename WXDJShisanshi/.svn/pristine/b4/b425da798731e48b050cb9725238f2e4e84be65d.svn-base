// pages/richeng/richengInfo.js
const util = require('../../utils/util.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    obj: "",
    height: 0,
    guid: '',
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

    if (app.globalData.passData == null) {
      util.requestGet('partyScheduleAction!searchScheduleInfo.action', { userId: app.globalData.userId, strpartyScheduleGuid: options.guid }, function (res) {
        that.setData({
          obj: res.data['obj']
        })
      })
    } else {
      that.setData({
        obj: app.globalData.passData,
      })
    }
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

  //删除
  gotoDelete: function (e) {
    var that = this
    //删除日程
    wx.showModal({
      title: '提示',
      content: '确定删除该日程？',
      success: function (res) {
        if (res.confirm) {
          util.requestGet('partyScheduleAction!deleteScheduleInfo.action', { userId: app.globalData.userId, strpartyScheduleGuid: that.data.obj.strGuid }, function (res) {
            wx.navigateBack()
          });
        } else if (res.cancel) {

        }
      }
    })
  },

  //编辑
  gotoEdit: function (e) {
    var that = this
    //修改日程
    app.globalData.passData = that.data.obj;
    wx.navigateTo({
      url: '/pages/richeng/richengAdd'
    })
  },

  //显示菜单
  callMenu: function (event) {
    var that = this;
    wx.showActionSheet({
      itemList: ['修改日程', '删除日程'],
      success: function (res) {
        if (res.tapIndex == 0) {
          //修改日程
          app.globalData.passData = that.data.obj;
          wx.navigateTo({
            url: '/pages/richeng/richengAdd'
          })
        } else {
          //删除日程
          wx.showModal({
            title: '提示',
            content: '确定删除该日程？',
            success: function (res) {
              if (res.confirm) {
                util.requestGet('partyScheduleAction!deleteScheduleInfo.action', { userId: app.globalData.userId, strpartyScheduleGuid: that.data.obj.strGuid }, function (res) {
                  wx.navigateBack()
                });
              } else if (res.cancel) {

              }
            }
          })
        }
      }
    })
  }
})