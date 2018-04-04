
const util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    pics: [],
    array: [],
    messageCount: 0,
  },

  onLoad: function () {
    var that = this;
    var userId = app.globalData.userId;
    console.log(userId);
    util.requestGet('mobileShareNewsAction!getShareNewsListInfo.action', { userId: userId }, function (res) {
      that.setData({
        pics: res.data['obj']['jsonArrayImg'],
        array: res.data['obj']['jsonArrayInfo']
      })
    })
  },

  //下拉刷新
  onPullDownRefresh: function () {
    var that = this;
    wx.showNavigationBarLoading() //在标题栏中显示加载
    util.requestGet('mobileShareNewsAction!getShareNewsListInfo.action', { userId: app.globalData.userId }, function (res) {
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
      that.setData({
        pics: res.data['obj']['jsonArrayImg'],
        array: res.data['obj']['jsonArrayInfo']
      })
    })
  },

  onShow: function () {
    var that = this;
    util.requestGet('mobileMessageAction!getMessageCount.action', { userId: app.globalData.userId }, function (res) {
      that.setData({
        messageCount: res.data['obj']['count']
      })
    })
  },

  imgClick: function (e) {
    var index = parseInt(e.currentTarget.dataset.index);
    console.log(this.data.array[index]['strDetailUrl'])
    app.globalData.url = this.data.array[index]['strDetailUrl']
    wx.navigateTo({
      url: '../web/web'
    })
  },

  itemClick: function (e) {
    var index = parseInt(e.currentTarget.dataset.index);
    console.log(this.data.array[index]['strDetailUrl'])
    app.globalData.url = this.data.array[index]['strDetailUrl']
    wx.navigateTo({
      url: '../web/web'
    })
  },

  gotoSanhuiyike: function (e) {
    // wx.navigateTo({
    //   url: '../sanhuiyike/sanhuiyike'
    // })
    app.globalData.url = util.baseWebUrl + "renda_web/mobile/mobileMeetingInfoAction.action"
    wx.navigateTo({
      url: '../web/web'
    })
  },
  gotoStudy: function (e) {
    wx.navigateTo({
      url: '../study/mystudy'
    })
  },
  gotoMine: function (e) {
    wx.navigateTo({
      url: '../mine/mine'
    })
  },
  gotoRibao: function (e) {
    wx.navigateTo({
      url: '../ribao/ribaoList'
    })
  },
  gotoRicheng: function (e) {
    wx.navigateTo({
      url: '../richeng/richengMain'
    })
  },
  gotoQRcode: function (e) {
    // wx.navigateTo({
    //   url: '../QRcode/readQrcode'
    // })
    wx.scanCode({
      onlyFromCamera: true,
      success: (result) => {
        console.log(result.result)
        if (result.result.indexOf("allrun") != 0) {
          wx.showToast({
            title: '无效的签到二维码',
            icon: 'none',
            duration: 2000
          });
          return
        }
        wx.showLoading({
          title: '签到中……',
        })

        wx.getLocation({
          type: 'wgs84',
          success: function (res) {
            util.requestGet('meetingCodeAction!qrCodeSign.action', { userId: app.globalData.userId, strMeetingInfo: result.result, strCheckAddress: "来自微信小程序", numLongitude: res.longitude, numLatitude: res.latitude, }, function (res) {
              wx.hideLoading()
              wx.showToast({
                title: '签到成功',
                icon: 'none',
                duration: 2000
              });
            })
          }
        })
        
      }
    })
  },
  gotoMessageList: function (e) {
    if (this.data.messageCount > 0) {
      wx.navigateTo({
        url: '../message/messageList'
      })
    } else {
      wx.showToast({
        title: "没有消息！",
        icon: 'none',
        duration: 2000
      });
    }
  },
})

