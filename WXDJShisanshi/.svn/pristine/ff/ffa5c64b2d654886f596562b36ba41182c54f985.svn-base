// pages/mine/editProfile.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    noteMaxLen: 70,//备注最多字数
    noteMaxEmail:50,
    noteMaxName:20,
    noteMaxMood:20,
    infoTypeShow:"",
    infoShow: "",
    placeholderValue: "",
    noteNowLen: 0,//备注当前字数
    editData:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // var userDetail = options.info;
    // var dataDic = JSON.parse(userDetail);
    var dataDic = app.globalData.passData;
    var infoType = options.type;
    var info = '';
    
    var placeholder = '';
    if(infoType==0) {
      wx.setNavigationBarTitle({
        title: '姓名',
      })
      placeholder = '请输入姓名',
      info = dataDic.username
    } else if(infoType == 1) {
      wx.setNavigationBarTitle({
        title: '邮箱',
      })
      placeholder = '请输入邮箱',
        info = dataDic.email === null ? '' : dataDic.email
    } else if (infoType == 2) {
      wx.setNavigationBarTitle({
        title: '签名',
      })
      placeholder = '请输入签名',
        info = dataDic.mood === null ? '' : dataDic.mood
    } 
    var len = info.length;
    
    that.setData ({
      noteMaxLen:infoType==0?20:infoType==1?50:infoType==2?20:20,
      infoTypeShow:infoType,
      infoShow:info,
      noteNowLen:len,
      placeholderValue: placeholder,
      editData:dataDic,
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
  //字数改变触发事件
  bindTextAreaChange: function (e) { 
    var that = this
    var value = e.detail.value, len = parseInt(value.length); 
    var showDic = that.data.editData;
    if(that.data.infoTypeShow == 0) {
      showDic.username = value
    } else if (that.data.infoTypeShow == 1) {
      showDic.email = value
    } else if (that.data.infoTypeShow == 2) {
      showDic.mood = value
    }
    if (len > that.data.noteMaxLen) return;  
    that.setData({
       infoShow: value, noteNowLen: len ,
       editData: showDic
    }) 
  },

  save: function () {
    var that = this;
    var pages = getCurrentPages();
    var prePage = pages[pages.length - 2];
    prePage.setData({
      showData:that.data.editData
    })
    wx.navigateBack({
      
    })
  }

})