const util = require('../../utils/util.js')
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: '',
    strCourseGuid:'',
    strChapterGuid: '',
    numChapterNumber: '',
    strCourseEndTime: '',
    numSchedule: 0,
    numAlreadyTimeLong:0,
    videoPauseTime:[],
  },
  count :0,//提交进度计数
  total: 0,//总视频长度
  lastVideoTime:0,//上次播放时间，用于判断拖拽
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this;
    that.setData({
      strCourseGuid: options.strCourseGuid,
      strChapterGuid: options.strChapterGuid,
      numChapterNumber: options.numChapterNumber,
      strCourseEndTime: options.strCourseEndTime,
      numSchedule: options.numSchedule,
      numAlreadyTimeLong: options.numAlreadyTimeLong,
    })

    that.setData({
      url: app.globalData.url,
    }); 
    // console.log(that.data.strCourseGuid)
    // console.log(that.data.strChapterGuid)
    // console.log(that.data.numChapterNumber)
    // console.log(that.data.strCourseEndTime)
    // console.log(that.data.numSchedule)

    //处理暂停点
    util.requestGet('learnManagementAction!getCourseChapterDetail.action', {
      userId: app.globalData.userId,
      strChapterGuid: that.data.strChapterGuid
    }, function (res) {
      var arr = []
      for (var i=0; i < res.data['objList'].length; i++) {
        var time = res.data['objList'][i].strPauseTime;
        var min = parseInt(time.split(':')[0]);
        var sec = parseInt(time.split(':')[1]);
        var s = min * 60 * 1000 + sec * 1000;
        //播放过的暂停点不再暂停
        if (that.data.numAlreadyTimeLong <= s){
          arr.push(s)
        }
      }
      that.setData({
        videoPauseTime: arr
      })
      console.log(arr)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoContext = wx.createVideoContext('myVideo')
    //如果已经播放完毕，就从头播放
    if (this.data.numSchedule == 100) {
      return;
    }

    //恢复播放进度
    if (this.data.numAlreadyTimeLong != undefined){
      var start = this.data.numAlreadyTimeLong / 1000
      this.videoContext.seek(start)
    }
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

  //开始播放事件回调
  bindplay:function(e){
    console.log(e)
  },

  //暂停播放事件回调
  bindpause: function (e) {
    console.log(e)
  },

  //进度跟踪,触发频率 250ms 一次
  bindtimeupdate: function (event){
    var that = this;

    //防止进度条向后拖拽（以1秒间隔作为判断），但是已经上传进度之前没有限制
    var now = parseInt(event.detail.currentTime) * 1000
    if ((now - this.lastVideoTime) > 1000 && this.data.numAlreadyTimeLong < now){
      this.videoContext.seek(this.lastVideoTime/1000)
    }else{
      this.lastVideoTime = now;
    }
    for(var n in this.data.videoPauseTime){
      if (this.data.videoPauseTime[n] == now){
        that.videoContext.pause();
        wx.showModal({
          title: '提示',
          content: '您还在看吗？',
          showCancel:false,
          confirmColor: "#b6011f",
          success: function (res) {
            if (res.confirm) {
              that.videoContext.play()
            }
          }
        })
        //暂停过，就删除暂停点
        var videoPauseTime = this.data.videoPauseTime
        delete videoPauseTime[n];
        break;
      }
    }
    this.count++;
    
    //取到视频总长度
    this.total = event.detail.duration * 1000;

    //每250ms 4*5 = 20,每5秒提交一次
    if (this.count % 20 != 0) {
      return;
    }
    var totaltime = event.detail.duration * 1000;
    var numSchedule = parseInt(event.detail.currentTime / event.detail.duration * 100 + "") ;
    var currentTime = parseInt(event.detail.currentTime * 1000 + "");
    if (this.data.numAlreadyTimeLong/1000 < event.detail.currentTime){
      util.requestGet('learnManagementAction!updateUserSchedule.action', { 
        userId: app.globalData.userId,
        strCourseGuid: this.data.strCourseGuid,
        numChapterNumber: this.data.numChapterNumber,
        numTotalTimeLong: totaltime,
        strUserGuid: app.globalData.userId,
        numSchedule: numSchedule,
        numAlreadyTimeLong: currentTime,
        strChapterGuid: this.data.strChapterGuid,
        strCourseEndTime: this.data.strCourseEndTime
         }, function (res) {
        that.setData({
          numAlreadyTimeLong: event.detail.currentTime
        })
      },function(res){
        console.log("进度提交失败")
      })
    }
  },

  //播放完毕，返回
  bindended: function (event) {

    util.requestGet('learnManagementAction!updateUserSchedule.action', {
      userId: app.globalData.userId,
      strCourseGuid: this.data.strCourseGuid,
      numChapterNumber: this.data.numChapterNumber,
      numTotalTimeLong: this.totaltime,
      strUserGuid: app.globalData.userId,
      numSchedule: 100,
      numAlreadyTimeLong: this.totaltime,
      strChapterGuid: this.data.strChapterGuid,
      strCourseEndTime: this.data.strCourseEndTime
    }, function (res) {
      
    }, function (res) {
      console.log("播放结束，进度提交失败")
    })

    wx.showToast({
      title: "播放完毕",
      icon: 'none',
      duration: 2000
    });

    wx.navigateBack();
  },
  //播放错误
  binderror: function (event) {
    wx.showToast({
      title: '视频不可用！',
      icon: 'none',
      duration: 2000
    });

    setTimeout(function () {
      wx.navigateBack()
    }, 2000)
  },
})