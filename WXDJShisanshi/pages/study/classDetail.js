const util = require('../../utils/util.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    guid: "",
    obj: "",
    objList: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      guid: options.guid
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
    util.requestGet('learnManagementAction!learnCourseInfo.action', { userId: app.globalData.userId, strCourseGuid: that.data.guid }, function (res) {
      var tempobj = res.data['obj'];
      var tempobjList = res.data['objList'];


      wx.request({
        url: res.data['obj'].strCourseUrl,
        complete: function (res) {
          console.log(tempobj)
          if (res.statusCode != 200) {
            tempobj.strCourseUrl = "/image/kechengmoren.png";
          }
          that.setData({
            obj: tempobj,
            objList: tempobjList
          })
        }
      })
    });
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

  //学习课程
  gotostudy: function (event) {
    var that = this;
    console.log(event.currentTarget.dataset.index);
    var obj = that.data.objList[event.currentTarget.dataset.index];
    if (obj.strFileExtension.toLowerCase() == "mp4") {
      app.globalData.url = obj['strLibraryUrl'];
      wx.navigateTo({
        url: '/pages/video/videocontrl?' + "strCourseGuid=" + that.data.obj.strGuid + "&strChapterGuid=" + obj.strChapterGuid + "&numChapterNumber=" + that.data.objList.length + "&strCourseEndTime=" + that.data.obj.dtEndDate + "&numSchedule=" + obj.numSchedule + "&numAlreadyTimeLong=" + obj.numAlreadyTimeLong,
      })
    }

    if (obj.strFileExtension.toLowerCase() == "pdf") {
      wx.showLoading({
        title: '文件加载中',
        mask: true,
      })

      //下载文档
      wx.downloadFile({
        url: obj['strLibraryUrl'],
        success: function (res) {
          var path = res.tempFilePath;
          // console.log("path:" + path);
          //打开文档
          wx.openDocument({
            fileType: "pdf",
            filePath: path,
            success: function (res) {
              console.log("文档打开成功");
            },
            fail: function (res) {
              console.log(res);
            }
          })
        },
        fail: function (res) {
          console.log(res);
        },
        complete: function (res) {
          wx.hideLoading()
        }
      })
    }
  },


  //查看附件
  fujianclick: function (event) {
    // console.log(event.currentTarget.dataset.fujianid)
    // console.log(event.currentTarget.dataset.fujianurl)
    // console.log(event.currentTarget.dataset.fujiantype)
    var that = this;
    var strChapterGuid = "";
    var strChapterName = "";
    for (var i = 0; i < that.data.objList.length; i++) {
      var obj = that.data.objList[i];
      for (var j = 0; j < obj.fileInfoList.length; j++) {
        var f = obj.fileInfoList[j];
        if (f.strFileGuid == event.currentTarget.dataset.fujianid) {
          strChapterGuid = obj.strChapterGuid;
          strChapterName = obj.strChapterName;
          break;
        }
      }
      if (strChapterGuid != "") {
        break
      }
    }
    // console.log("strCourseGuid:" + that.data.obj.strGuid)
    // console.log("strChapterGuid:" + strChapterGuid)

    var data = {
      strCourseGuid: that.data.obj.strGuid,
      strChapterGuid: strChapterGuid,
      strCourseName: that.data.obj.strCourseName,
      strChapterName: strChapterName,
      fujianid: event.currentTarget.dataset.fujianid,
      fujianurl: event.currentTarget.dataset.fujianurl,
      fujiantype: event.currentTarget.dataset.fujiantype,
      fujianname: event.currentTarget.dataset.fujianname,
      fujiansize: event.currentTarget.dataset.fujiansize
    }
    var datas = []
    //添加到我的资料
    wx.getStorage({
      key: 'mydatas' + app.globalData.userId,
      success: function (res) {
        console.log(res.data)
        datas = res.data
        //去重
        for (var i = 0; i < datas.length; i++) {
          var obj = datas[i];
          if (obj.fujianid == data.fujianid) {
            datas.splice(i, 1)
          }
        }
      },
      complete: function (res) {
        datas.push(data)
        //保存
        wx.setStorage({
          key: "mydatas" + app.globalData.userId,
          data: datas
        })
      }
    })

    //调用文件浏览计数
    util.requestGet('learnManagementAction!downLoadFile.action', { userId: app.globalData.userId, strCourseGuid: that.data.obj.strGuid, strChapterGuid: strChapterGuid, strFileGuid: event.currentTarget.dataset.fujianid }, null, function (res) {
      console.log("提交文件计数失败")
    });
    wx.showLoading({
      title: '文件加载中',
      mask: true,
    })

    //下载文档
    wx.downloadFile({
      url: event.currentTarget.dataset.fujianurl,
      success: function (res) {
        var path = res.tempFilePath;
        // console.log("path:" + path);
        //打开文档
        if (event.currentTarget.dataset.fujiantype.toUpperCase() == "JPG" ||
          event.currentTarget.dataset.fujiantype.toUpperCase() == "PNG"
        ) {
          //图片格式
          wx.previewImage({
            urls: [path] // 需要预览的图片http链接列表
          });
        } else {
          //文档格式
          wx.openDocument({
            fileType: event.currentTarget.dataset.fujiantype,
            filePath: path,
            success: function (res) {
              console.log("文档打开成功");
            },
            fail: function (res) {
              console.log(res);
            }
          })
        }


      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        wx.hideLoading()
      }
    })
  },

  gotoExam: function (event) {
    if (this.data.obj.numComplete == "2") {
      wx.navigateTo({
        url: '/pages/study/exam/startExam?strCourseGuid' + "=" + this.data.obj.strGuid
      });
    } else {
      wx.navigateTo({
        url: '/pages/study/exam/examResult?strExamGuid' + "=" + this.data.obj.strExamGuid + "&strCourseGuid=" + this.data.obj.strGuid + "&numComplete=" + this.data.obj.numComplete
      });
    };
  },
  gotoPractice: function (event) {
    wx.navigateTo({
      url: '/pages/study/practice/practice?strCourseGuid' + "=" + this.data.obj.strGuid + "&isWrong=" + "1"
    });

  }
})