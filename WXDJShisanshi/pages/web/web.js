// web.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("打开网页：" + app.globalData.url)
    this.setData({
      // url: 'https://djtest.c4m.cn/renda_web/mobile/mobileShareNewsAction!gotoView.action?shareNews.strGuid=aec02ea3abfb4511823d77f5466f7acb&shareNews.strCurrentUserGuid=6e52e7b6b69d45c182f1df16cfeca649',
      url: '',
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
    // var article_id = wx.getStorageSync('current_article_id');
    // var path = '/pages/web/web?article_id=' + article_id + '';
    // return {
    //   title: article_title,
    //   path: path
    // }
  }
})