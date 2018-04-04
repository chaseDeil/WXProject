const util = require('../../../utils/util.js')
var app = getApp()
var inputContent = ""
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hiddenmodalput: true,
    strCourseGuid: "",
    obj: "",
    objList: "",
    objobjList: "",
    height: 0,
    qusetionindex: 0,
    isShowAnswer: false,
    typeLabel: "",
    isWrong: 1,
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
          isWrong: options.isWrong,
        })
      }
    });

    wx.showLoading({
      title: '加载中',
    });
    //获取题目列表
    util.requestGet('learnManagementAction!getCourseExerciseList.action', { userId: app.globalData.userId, strCourseGuid: options.strCourseGuid }, function (res) {
      var objList = res.data['objList']
      //练习收藏题目
      if (parseInt(options.isWrong) == 2) {
        objList = objList.filter(function (x) {
          return parseInt(x.numExerciseWrong) == 2;
        });
      }
      if (objList.length == 0) {
        if (parseInt(options.isWrong) == 2) {
          wx.showToast({
            title: '没有收藏题目',
            icon: 'none',
            duration: 2000
          });
        } else {
          wx.showToast({
            title: '没有题目',
            icon: 'none',
            duration: 2000
          });
        }
        setTimeout(function () {
          wx.navigateBack()
        }, 2000)
      } else {
        that.setData({
          strCourseGuid: options.strCourseGuid,
          objList: objList
        })
        that.getQuestion(0);
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
      if (objobjList[index].numIsChoice == 1) {
        //反选的场合
        obj.strUserExerciseAnswer = "";
        objobjList[index].numIsChoice = 0
        that.setData({
          obj: obj,
          objobjList: objobjList
        })
      } else {
        //正选的场合
        obj.strUserExerciseAnswer = event.currentTarget.dataset.anwswer;
        for (var i = 0; i < objobjList.length; i++) {
          objobjList[i].numIsChoice = 0
        }
        objobjList[index].numIsChoice = 1
        that.setData({
          obj: obj,
          objobjList: objobjList,
          isShowAnswer: true
        })
        //单选提交答案
        that.submitAnswer()
      }
    }
    //多选的场合
    if (obj.numQuestionType == 2) {
      if (objobjList[index].numIsChoice == 1) {
        //反选的场合
        obj.strUserExerciseAnswer = obj.strUserExerciseAnswer.split(event.currentTarget.dataset.anwswer).join("");
        objobjList[index].numIsChoice = 0
      } else {
        //正选的场合
        obj.strUserExerciseAnswer += event.currentTarget.dataset.anwswer;
        objobjList[index].numIsChoice = 1
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
    util.requestGet('learnManagementAction!getExerciseQuestionInfo.action', { userId: app.globalData.userId, strCourseGuid: that.data.strCourseGuid, strQuestionGuid: that.data.objList[ind].strQuestionGuid }, function (res) {
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
      //选择题的场合，将用户答案从obj.strUserExerciseAnswer转移到objobjList的numIsChoice

      if (res.data['obj'].strUserExerciseAnswer.length != 0 && (res.data['obj'].numQuestionType == 1 || res.data['obj'].numQuestionType == 2)) {
        for (var i = 0; i < res.data['obj'].strUserExerciseAnswer.length; i++) {
          var s = res.data['obj'].strUserExerciseAnswer[i]

          var index = SS.indexOf(s)
          if (index > -1) {
            objobjList[index].numIsChoice = 1
          }
        }
      }
      //用户答案转移结束

      //选择题将正确答案转移到obj.strAnalysis用于显示答案
      var obj = res.data['obj'];
      if (res.data['obj'].numQuestionType == 1 || res.data['obj'].numQuestionType == 2) {
        var strAnalysis = "";
        for (var i = 0; i < objobjList.length; i++) {
          if (objobjList[i].numIsSurefire == 2) {
            strAnalysis += SS[objobjList[i].numSquence]
          }
        }
        obj.strAnalysis = strAnalysis;
      }

      that.setData({
        obj: obj,
        objobjList: objobjList,
        typeLabel: typeLabel,
        qusetionindex: ind,
        isShowAnswer: false,
      })
      wx.hideLoading()
    });
  },

  //提交答案
  submitAnswer: function (index) {
    var that = this;
    if (that.data.obj.numQuestionType == 3 || that.data.obj.numQuestionType == 4) {
      util.requestPost('learnManagementAction!submitExerciseInfo.action', { userId: app.globalData.userId, strCourseGuid: that.data.strCourseGuid, strQuestionGuid: that.data.objList[that.data.qusetionindex].strQuestionGuid, strUserAnswer: that.inputContent }, function (res) {
      });
    } else {
      util.requestGet('learnManagementAction!submitExerciseInfo.action', { userId: app.globalData.userId, strCourseGuid: that.data.strCourseGuid, strQuestionGuid: that.data.objList[that.data.qusetionindex].strQuestionGuid, strUserAnswer: that.data.obj.strUserExerciseAnswer }, function (res) {
      });
    }
  },

  //上一题
  beforeBt: function (event) {
    var that = this;
    if (that.data.qusetionindex == 0) {
      wx.showToast({
        title: '已经是第一道题了',
        icon: 'none',
      })
    } else {
      var index = that.data.qusetionindex;
      index = index - 1;
      wx.showLoading({
        title: '加载中',
      });
      that.getQuestion(parseInt(index));
    }
  },

  //下一题
  nextBt: function (event) {
    var that = this;
    if (that.data.qusetionindex == that.data.objList.length - 1) {
      wx.showToast({
        title: '已经是最后一道题了',
        icon: 'none',
      })
    } else {
      var index = that.data.qusetionindex;
      index = index + 1;
      wx.showLoading({
        title: '加载中',
      });
      that.getQuestion(parseInt(index));
    }
  },

  OKbt: function (event) {
    var that = this;
    //防止确定按钮重复点击
    if (that.data.isShowAnswer == true) {
      return
    }
    var obj = that.data.obj;
    obj.strUserExerciseAnswer = inputContent;
    that.setData({
      obj: obj,
      isShowAnswer: true,
    })

    that.submitAnswer(that.data.qusetionindex)
  },

  //取到答案输入框的输入内容保存在inputContent
  getInputAnswer: function (event) {
    var that = this;
    that.inputContent = event.detail.value;
  },

  //收藏按钮点击事件
  collectClick: function (event) {
    var that = this;
    var index = that.data.qusetionindex;
    wx.showLoading({
      title: '加载中',
    });
    util.requestGet('learnManagementAction!changeExerciseWrong.action', { userId: app.globalData.userId, strCourseGuid: that.data.strCourseGuid, strQuestionGuid: that.data.objList[that.data.qusetionindex].strQuestionGuid, numExerciseWrong: that.data.objList[index].numExerciseWrong }, function (res) {
      var list = that.data.objList
      list[index].numExerciseWrong = res.data['obj'].numExerciseWrong
      that.setData({
        objList: list
      })
      wx.hideLoading()
    });
  },

  //题目导航菜单点击事件
  navigate: function (event) {
    var that = this;
    var index = parseInt(event.currentTarget.dataset.index);
    this.setData({
      hiddenmodalput: true
    })
    that.getQuestion(index);
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

})
