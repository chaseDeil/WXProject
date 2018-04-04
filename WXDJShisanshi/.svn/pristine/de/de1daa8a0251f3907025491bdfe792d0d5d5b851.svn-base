const util = require('../../../utils/util.js')
var app = getApp()
var inputContent = ""
var task = null
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: 0,
    hiddenmodalput: true,
    strCourseGuid: "",
    strExamGuid: "",//试题id
    dtStartTime: "",//开始时间
    dtEndTime: "",//结束时间
    dtRemainingTime: "",//剩余时间，单位毫秒
    obj: "",
    objList: "",
    objobjList: "",
    qusetionindex: 0,
    typeLabel: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          height: res.windowHeight
        })
      }
    });
    //开始考试
    util.requestGet('learnManagementAction!startExam.action', { userId: app.globalData.userId, strCourseGuid: options.strCourseGuid }, function (res) {
      that.setData({
        strCourseGuid: options.strCourseGuid,
        strExamGuid: res.data['obj'].strExamGuid,
        dtStartTime: res.data['obj'].dtStartTime,
        dtEndTime: res.data['obj'].dtEndTime,
      });

      var strs = res.data['obj'].dtRemainingTime + "";
      var fdStart = strs.indexOf("-");
      //如果倒计时不是以‘-’开头，说明还有剩余时间，去取试题列表
      if (fdStart != 0) {
        //获取考试试题信息
        util.requestGet('learnManagementAction!getExamQuestionInfo.action', { userId: app.globalData.userId, strExamGuid: res.data['obj'].strExamGuid }, function (res) {
          that.setData({
            objList: res.data['objList']
          })
          //如果没有取到题目
          if (that.data.objList.length == 0) {
            wx.showToast({
              title: '没有试题！',
              icon: 'none',
              duration: 2000
            })
            setTimeout(function () {
              wx.navigateBack({})
            }, 2000)
          }
          that.getQuestion(0);
        });

        //获取倒计时
        that.countDuring(res.data['obj'].dtRemainingTime, false)
      }else{
        that.countDuring(res.data['obj'].dtRemainingTime, false)
      }
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

  //选择题答案点击事件
  anwser: function (event) {
    var that = this;
    var obj = that.data.obj;
    var objobjList = that.data.objobjList;
    var index = parseInt(event.currentTarget.dataset.index);

    //单选的场合
    if (obj.numQuestionType == 1) {
      if (objobjList[index].numIsChoice == 2) {
        //反选的场合
        objobjList[index].numIsChoice = 1
        that.setData({
          obj: obj,
          objobjList: objobjList
        })
      } else {
        //正选的场合
        obj.strUserExerciseAnswer = event.currentTarget.dataset.anwswer;
        for (var i = 0; i < objobjList.length; i++) {
          objobjList[i].numIsChoice = 1
        }
        objobjList[index].numIsChoice = 2
        that.setData({
          obj: obj,
          objobjList: objobjList,
        })
      }
    }
    //多选的场合
    if (obj.numQuestionType == 2) {
      if (objobjList[index].numIsChoice == 2) {
        //反选的场合
        objobjList[index].numIsChoice = 1
      } else {
        //正选的场合
        objobjList[index].numIsChoice = 2
      }
      that.setData({
        obj: obj,
        objobjList: objobjList
      })
    }
  },

  //获取题目详情
  getQuestion: function (ind) {
    var that = this;
    util.requestGet('learnManagementAction!getExamQuestionDetailInfo.action', {
      userId: app.globalData.userId,
      strExaminationQuestionGuid: that.data.objList[ind].strGuid,
      strQuestionGuid: that.data.objList[ind].strQuestionGuid,
      strCourseGuid: that.data.strCourseGuid,
      strExamGuid: that.data.strExamGuid
    }, function (res) {
      var SS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var objobjList = res.data['objList']
      var typeLabel = ""
      if (res.data['obj'].numQuestionType == 1) {
        typeLabel = "单选题"
      }
      if (res.data['obj'].numQuestionType == 2) {
        typeLabel = "多选题"
      }
      if (res.data['obj'].numQuestionType == 3) {
        typeLabel = "简答题"
        that.inputContent = res.data['obj'].strUserExamAnswer
      }
      if (res.data['obj'].numQuestionType == 4) {
        typeLabel = "填空题"
        that.inputContent = res.data['obj'].strUserExamAnswer
      }
      that.setData({
        obj: res.data['obj'],
        objobjList: objobjList,
        typeLabel: typeLabel,
        qusetionindex: ind,
        isShowAnswer: false,
      })
      wx.hideLoading()
    });
  },

  //上一题
  beforeBt: function (event) {
    var that = this;

    if (that.data.qusetionindex == 0) {
      that.submitAnswer(that.data.qusetionindex)
      wx.showToast({
        title: '已经是第一道题了',
        icon: 'none',
      })
    } else {
      that.submitAnswer(that.data.qusetionindex, function () {
        var index = that.data.qusetionindex;
        index = index - 1;
        wx.showLoading({
          title: '加载中',
        });
        that.getQuestion(parseInt(index));
      })
    }
  },

  //提交考试按钮事件处理
  submitExamClick: function (event) {
    this.submitExam(false);
  },

  //下一题
  nextBt: function (event) {
    var that = this;

    if (that.data.qusetionindex == that.data.objList.length - 1) {
      that.submitAnswer(that.data.qusetionindex, function () {
        //提交考试
        that.submitExam(false);
      })
    } else {
      that.submitAnswer(that.data.qusetionindex, function () {
        var index = that.data.qusetionindex;
        index = index + 1;
        wx.showLoading({
          title: '加载中',
        });
        that.getQuestion(parseInt(index));
      })
    }
  },

  //取到答案输入框的输入内容保存在inputContent
  getInputAnswer: function (event) {
    var that = this;
    that.inputContent = event.detail.value;
  },

  //提交考试
  submitExam: function (isAutoFinish) {
    var that = this;
    if (isAutoFinish) {
      util.requestGet('learnManagementAction!submitExam.action', {
        userId: app.globalData.userId,
        strExamGuid: that.data.strExamGuid
      }, function (res) {
        wx.navigateBack();
      });
    } else {
      var  count = 0;
      for(var i = 0;i<that.data.objList.length;i++){
        if (that.data.objList[i].numIsCorrect == 0){
          count++
        }
      }
      if (count > 0){
        wx.showModal({
          title: '提示',
          content: '您还有'+count+'道题未答，确定交卷吗？',
          confirmColor: '#b6011f',
          success: function (res) {
            if (res.confirm) {
              util.requestGet('learnManagementAction!submitExam.action', {
                userId: app.globalData.userId,
                strExamGuid: that.data.strExamGuid
              }, function (res) {
                wx.navigateBack();
              });
            }
          }
        })
      }else{
        wx.showModal({
          title: '提示',
          content: '确定交卷吗？',
          confirmColor: '#b6011f',
          success: function (res) {
            if (res.confirm) {
              util.requestGet('learnManagementAction!submitExam.action', {
                userId: app.globalData.userId,
                strExamGuid: that.data.strExamGuid
              }, function (res) {
                wx.navigateBack();
              });
            }
          }
        })
      }
      
    }
  },

  //提交答案
  submitAnswer: function (index, callback) {
    var that = this;
    var answer = []
    //选择题类型
    if (that.data.obj.numQuestionType == 1 || that.data.obj.numQuestionType == 2) {
      for (var i = 0; i < that.data.objobjList.length; i++) {
        if (that.data.objobjList[i].numIsChoice == 2) {
          answer.push(that.data.objobjList[i].strGuid)
        }
      }
    } else {
      //填空简答题类型
      answer.push(that.inputContent)
    }
    
    util.requestPost('learnManagementAction!submitExamAnswer.action', {
      userId: app.globalData.userId,
      strExaminationQuestionGuid: that.data.objList[index].strGuid,
      strExamGuid: that.data.strExamGuid,
      strQuestionGuid: that.data.objList[index].strQuestionGuid,
      numQuestionType: that.data.obj.numQuestionType,
      strCourseGuid: that.data.strCourseGuid,
      arrUserAnswer: JSON.stringify(answer)
    }, function (res) {
      //改变是否答题状态
      var objList = that.data.objList
      if (answer.length == 0 || answer[0] == ""){
        objList[index].numIsCorrect = 0
      }else{
        objList[index].numIsCorrect = 2
      }
      that.setData({
        objList: objList
      });

      if (typeof callback === "function") {
        callback()
      }

      //开始倒计时
      that.countDuring(res.data['obj'].dtRemainingTime, false)
    });
  },

  //毫秒转时分秒
  formatDuring: function (mss) {
    var that = this;
    var hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = parseInt((mss % (1000 * 60)) / 1000);

    var hoursStr = hours + "";
    var minutesStr = minutes + "";
    var secondsStr = seconds + "";
    if(hours < 10){
      hoursStr = "0"+ hoursStr;
    }
    if (minutes < 10) {
      minutesStr = "0" + minutesStr;
    }
    if (seconds < 10) {
      secondsStr = "0" + secondsStr;
    }
    that.setData({
      dtRemainingTime: hoursStr + ":" + minutesStr + ":" + secondsStr
    });
  },

  //计时减
  countDuring: function (s, flag) {
    var that = this;
    var strs = s + "";
    var fdStart = strs.indexOf("-");
    if (fdStart == 0) {
      wx.showToast({
        title: '考试时间到，将自动交卷！',
        icon: 'none',
        duration: 1800
      })
      setTimeout(function () {
        if (flag) {//是否来自自动倒计时，是的话，时间到了需要提交最后一道题的答案
          that.submitAnswer(that.data.qusetionindex, function () {
            //提交考试
            that.submitExam(true);
          })
        } else {//来自提交答案后的返回，到时的话不需要再次提交答案
          //提交考试
          that.submitExam(false);
        }
      }, 2000)  
    } else {
      that.formatDuring(strs);
      //进行倒计时
      var temps = parseInt(strs);
      temps = temps - 1000;
      //移除上一个计时任务
      if (that.task != undefined){
        clearTimeout(that.task)
      }
      that.task = setTimeout(function () {that.countDuring(temps, true)}, 1000);
    }
  },

  //显示题目导航菜单  
  menu_click: function (event) {
    this.setData({
      hiddenmodalput: false
    })
  },

  //隐藏题目导航菜单  
  menuCancel: function (event) {
    this.setData({
      hiddenmodalput: true
    })
  },

  //题目导航菜单点击事件
  navigate: function (event) {
    var that = this;
    this.setData({
      hiddenmodalput: true
    })

    that.submitAnswer(that.data.qusetionindex, function () {
      wx.showLoading({
        title: '加载中',
      });
      that.getQuestion(parseInt(event.currentTarget.dataset.index));
    })
  },

})