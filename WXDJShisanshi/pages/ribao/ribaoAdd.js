// pages/ribao/ribaoAdd.js
const util = require('../../utils/util.js')
var app = getApp()
var uploadFileCount = 0;//待上传的附件数
Page({

  /**
   * 页面的初始数据
   */
  data: {
    obj: "",
    height: 0,
    picList: [],
    fileList: [],
    date: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    if (app.globalData.passData != null) {
      this.setData({
        obj: app.globalData.passData.obj,
        picList: app.globalData.passData.picList,
        fileList: app.globalData.passData.fileList,
        date: app.globalData.passData.obj.dtDailyDate
      });
      console.log(app.globalData.passData)
      wx.setNavigationBarTitle({ title: '修改日报' })
    } else {
      wx.setNavigationBarTitle({ title: '新增日报' })
    }

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

  //选择图片
  choosePic: function () {
    var that = this;
    var picList = that.data.picList
    wx.chooseImage({
      success: function (res) {
        for (var i = 0; i < res.tempFilePaths.length; i++) {
          var f = { strFileUrl: "", strFileName: "", numFileSize: 0, strFileExtension: "", strFileGuid: "" };
          f["strFileUrl"] = res.tempFilePaths[i]
          var pos = res.tempFilePaths[i].lastIndexOf(".") + 1;
          var extands = res.tempFilePaths[i].substring(pos, res.tempFilePaths[i].length);
          f["strFileExtension"] = extands;
          f["strFileName"] = (new Date().getTime() + "." + extands);
          picList.push(f)
        }
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          picList: picList
        })
        uploadFileCount = uploadFileCount + 1;
      }
    })
  },

  //选择视频
  chooseVideo: function () {
    var that = this;
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: '返回',
      success: function (res) {
        var f = { strFileUrl: "", strFileName: "", numFileSize: 0, strFileExtension: "", strFileGuid: "" };
        f["strFileUrl"] = res.tempFilePath
        var pos = res.tempFilePath.lastIndexOf(".") + 1;
        var extands = res.tempFilePath.substring(pos, res.tempFilePath.length);
        f["strFileExtension"] = extands;
        f["strFileName"] = (new Date().getTime() + "." + extands);
        f["numFileSize"] = res.size
        console.log(f)
        var fileList = that.data.fileList
        fileList.push(f)
        that.setData({
          fileList: fileList
        })
        uploadFileCount = uploadFileCount + 1;
      },
      fail: function (res) {
        console.log(res)
      }
    })
  },

  //日期选择框处理
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    });
  },

  //图片预览
  previewImage: function (e) {
    var that = this
    var current = that.data.picList[e.currentTarget.dataset.index].strFileUrl
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: [current] // 需要预览的图片http链接列表
    })
  },

  //视频预览
  previewVideo: function (e) {
    var that = this
    app.globalData.url = that.data.fileList[e.currentTarget.dataset.index].strFileUrl
    wx.navigateTo({
      url: '/pages/video/videoplayer',
    })
  },

  //删除图片
  picDelete: function (e) {
    var that = this;
    var picList = that.data.picList;
    //删除服务器文件
    if (picList[e.currentTarget.dataset.index].strFileGuid != "") {
      wx.showModal({
        title: '提示',
        content: '确定删除？',
        success: function (res) {
          if (res.confirm) {
            that.deleteFile(picList[e.currentTarget.dataset.index].strFileGuid)
            picList.splice(e.currentTarget.dataset.index, 1);
            that.setData({
              picList: picList
            });
          } else if (res.cancel) {
            return
          }
        }
      })
    } else {
      //删除本地文件，待上传文件数减1
      uploadFileCount = uploadFileCount - 1;
      picList.splice(e.currentTarget.dataset.index, 1);
      that.setData({
        picList: picList
      });
    }
   
  },

  //删除视频
  videoDelete: function (e) {
    var that = this;
    var fileList = that.data.fileList;
    //删除服务器文件
    if (fileList[e.currentTarget.dataset.index].strFileGuid != "") {
      wx.showModal({
        title: '提示',
        content: '确定删除？',
        success: function (res) {
          if (res.confirm) {
            that.deleteFile(fileList[e.currentTarget.dataset.index].strFileGuid)
            fileList.splice(e.currentTarget.dataset.index, 1);
            that.setData({
              fileList: fileList
            });
          } else if (res.cancel) {
            return
          }
        }
      })
    } else {
      //删除本地文件，待上传文件数减1
      uploadFileCount = uploadFileCount - 1;
      fileList.splice(e.currentTarget.dataset.index, 1);
      that.setData({
        fileList: fileList
      });
    }
  },

  submit: function (e) {
    var that = this;
    if (e.detail.value.dateChoose.length == 0) {
      wx.showToast({
        title: '请选择日报日期',
        icon: 'none',
        duration: 2000
      });
      return;
    }

    if (e.detail.value.contentInput.length == 0) {
      wx.showToast({
        title: '请输入日报内容',
        icon: 'none',
        duration: 2000
      });
      return;
    }

    wx.showLoading({
      title: '请等待',
    })
    if (app.globalData.passData != null) {
      //修改
      util.requestPost('partyDailyAction!updatePartyDaily.action', { userId: app.globalData.userId, strDailyDate: e.detail.value.dateChoose, content: e.detail.value.contentInput, reportId: that.data.obj.strGuid, formId: e.detail.formId }, function (res) {
        if (uploadFileCount == 0) {
          wx.hideLoading()
          wx.navigateBack({
            delta:2
          })
        }
        //上传图片
        for (var i = 0; i < that.data.picList.length; i++) {
          if (that.data.picList[i].strFileGuid == "") {
            that.uploadFile(that.data.obj.strGuid, that.data.picList[i].strFileUrl, that.data.picList[i].strFileName)
          }
        }
        //上传视频
        for (var i = 0; i < that.data.fileList.length; i++) {
          if (that.data.fileList[i].strFileGuid == "") {
            that.uploadFile(that.data.obj.strGuid, that.data.fileList[i].strFileUrl, that.data.fileList[i].strFileName)
          }
        }
      });
    }
    else {
      //新建
      util.requestPost('partyDailyAction!insertPartyDaily.action', { userId: app.globalData.userId, strDailyDate: e.detail.value.dateChoose, content: e.detail.value.contentInput, formId: e.detail.formId }, function (res) {
        if (uploadFileCount == 0){
          wx.hideLoading()
          wx.navigateBack()
        }
        //上传图片
        for (var i = 0; i < that.data.picList.length; i++) {
          that.uploadFile(res.data['obj'].reportId, that.data.picList[i].strFileUrl, that.data.picList[i].strFileName)
        }
        //上传视频
        for (var i = 0; i < that.data.fileList.length; i++) {
          that.uploadFile(res.data['obj'].reportId, that.data.fileList[i].strFileUrl, that.data.fileList[i].strFileName)
        }

      });
    }

  },

  //上传附件
  uploadFile: function (id, path, name) {
    var that = this
    wx.uploadFile({
      url: util.baseUrl + 'partyDailyAction!uploadReportFile.action',
      filePath: path,
      name: 'aFile',
      header: {
        'application': 'otcet-stream'
      },
      formData: { userId: app.globalData.userId, reportId: id, fileName: name },
      success: function (res) {
        console.log(res)
      },
      fail: function (res) {
        console.log(res)
      },
      complete: function (res) {
        uploadFileCount = uploadFileCount - 1
        if (uploadFileCount == 0) {
          if (app.globalData.passData != null) {
            //编辑的场合，返回到列表页（跳过详情页）
            wx.navigateBack({ delta: 2})
          }else{
            wx.navigateBack()
          }

        }
      },
    })
  },

  //删除附件
  deleteFile: function (fileId) {
    util.requestGet('partyDailyAction!delteReportFile.action', { userId: app.globalData.userId, fileId: fileId }, function (res) {
      wx.showToast({
        title: "文件删除成功",
        icon: 'none',
        duration: 2000
      });
    });
  }
})