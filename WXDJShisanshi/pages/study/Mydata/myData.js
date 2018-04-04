// pages/study/Mydata/myData.js
const util = require('../../../utils/util.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
    mydatas: "",
    page:1,
    objList:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    })

    //取到‘我的’数据
    wx.getStorage({
      key: 'mydatas' + app.globalData.userId,
      success: function (res) {
        that.setData({
          mydatas: res.data
        })
      }
    });

    //取到我的全部数据的第一页
    util.requestGet('learnManagementAction!getMyDate.action', { userId: app.globalData.userId, page: that.data.page, pageSize: 20 }, function (res) {
      that.setData({
        objList: res.data['objList'],
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

  //滑动切换tab
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },

  //点击tab切换 
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

  //‘我的’item点击
  myDataItemClick: function (e) {
    var that = this
    var index = parseInt(e.currentTarget.dataset.index)
    var data = that.data.mydatas[index]

    if (data.fujiantype.toUpperCase() == 'MP4') {
      app.globalData.url = data.fujianurl
      wx.navigateTo({
        url: '/pages/video/videoplayer',
      })
    } else if (data.fujiantype.toUpperCase() == 'PNG' || data.fujiantype.toUpperCase() == 'JPG') {
      wx.previewImage({
        urls: [data.fujianurl] // 需要预览的图片http链接列表
      });
    } else {
      wx.showLoading({
        title: '文件加载中',
        mask: true,
      })
      //下载文档
      wx.downloadFile({
        url: data.fujianurl,
        success: function (res) {
          var path = res.tempFilePath;
          //打开文档
          wx.openDocument({
            fileType: data.fujiantype,
            filePath: path,
            success: function (res) {
              console.log("文档打开成功");
            },
            fail: function (res) {
              console.log(res);
              wx.showToast({
                title: '文件不可用！',
                icon: 'none',
                duration: 2000
              });
            }
          })
        },
        fail: function (res) {
          console.log(res);
          wx.showToast({
            title: '文件找不到了！',
            icon: 'none',
            duration: 2000
          });
        },
        complete: function (res) {
          wx.hideLoading()
        }
      })
    }
  },

  //我的全部资料-打开文件
  dataItemClick: function (e) {
    var that = this
    var index = parseInt(e.currentTarget.dataset.index)
    var data = that.data.objList[index]

    if (data.strFileExtension.toUpperCase() == 'MP4') {
      app.globalData.url = data.strFileUrl
      wx.navigateTo({
        url: '/pages/video/videoplayer',
      })
    } else if (data.strFileExtension.toUpperCase() == 'PNG' || data.strFileExtension.toUpperCase() == 'JPG') {
      wx.previewImage({
        urls: [data.strFileUrl] // 需要预览的图片http链接列表
      });
    } else {
      wx.showLoading({
        title: '文件加载中',
        mask: true,
      })
      //下载文档
      wx.downloadFile({
        url: data.strFileUrl,
        success: function (res) {
          var path = res.tempFilePath;
          //打开文档
          wx.openDocument({
            fileType: data.strFileExtension,
            filePath: path,
            success: function (res) {
              console.log("文档打开成功");
            },
            fail: function (res) {
              console.log(res);
              wx.showToast({
                title: '文件不可用！',
                icon: 'none',
                duration: 2000
              });
            }
          })
        },
        fail: function (res) {
          console.log(res);
          wx.showToast({
            title: '文件找不到了！',
            icon: 'none',
            duration: 2000
          });
        },
        complete: function (res) {
          wx.hideLoading()
        }
      })
    }
  },

  //我的全部资料-加载更多
  loadmore: function (e) {
    var that = this
    var page = parseInt(that.data.page) + 1;
    var objList = that.data.objList;
    wx.showLoading({
      title: '加载中',
    })
    util.requestGet('learnManagementAction!getMyDate.action', { userId: app.globalData.userId, page: that.data.page, pageSize: 20 }, function (res) {
      wx.hideLoading()
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
          page: page
        })
      }

    });
  },
})