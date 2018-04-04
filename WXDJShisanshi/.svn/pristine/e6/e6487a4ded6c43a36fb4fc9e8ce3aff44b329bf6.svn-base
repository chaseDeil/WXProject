const util = require('../../utils/util.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    objList: [],
    height: 0,
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
    wx.showLoading({
      title: '加载中',
    })
    util.requestGet('mobileMessageAction!getMessageList.action', { userId: app.globalData.userId }, function (res) {
      that.setData({
        objList: res.data['objList']
      })
      wx.hideLoading();
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

  //item点击时间处理
  itemClick: function (e) {
    var that = this
    var objList = that.data.objList;
    var obj = that.data.objList[e.currentTarget.dataset.index]

   
    switch (obj.numSendType) {
      // case 2: //H5
      //   app.globalData.url = obj.strMeetingInfoUrl
      //   wx.navigateTo({
      //     url: '../web/web'
      //   })
      //   break;
      case 4: //课程详情
        wx.navigateTo({
          url: '/pages/study/classDetail?guid=' + obj.strRelevanceGuid
        });
        break;
      case 5://课程详情
        wx.navigateTo({
          url: '/pages/study/classDetail?guid=' + obj.strRelevanceGuid
        });
        break;
      case 6://课程详情
        wx.navigateTo({
          url: '/pages/study/classDetail?guid=' + obj.strUrlParameter
        });
        break;
      // case 7://审批详情
      //   break;
      // case 8://月报详情
      //   break;
      // case 9: //周报详情
      //   break;
      // case 10://舆情直报审批
      //   break;
      // case 12://舆情直报详情
      //   break;
      case 20://日程
        app.globalData.passData = null;
        wx.navigateTo({
          url: '/pages/richeng/richengInfo?guid=' + obj.strRelevanceGuid
        })
        break;
      default:
        wx.showToast({
          title: '小程序端暂不支持查看',
          icon: 'none',
          duration: 2000
        });
        return;
    }
    //设置已读
    util.requestGet('mobileMessageAction!setIsRead.action', { userId: app.globalData.userId, messageId: obj.strGuid, strAcceptanceId: obj.strAcceptanceId }, function (res) {
      //从列表中移除
      objList.splice(e.currentTarget.dataset.index, 1)
      that.setData({
        objList: objList
      })
    })
  },
})