// pages/sanhuiyike/sanhuiyikedetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"十九大期间的相关工作安排",
    type:"党小组会",
    org: "初级党组织",
    isSign:false,
    touxiang:"http://img3.imgtn.bdimg.com/it/u=1116587413,1335069674&fm=27&gp=0.jpg",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const ctx = wx.createCanvasContext('from_to')

    ctx.beginPath()
    ctx.arc(10, 10, 2, 0, 2 * Math.PI)
    ctx.setFillStyle('gray')
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(10, 10)
    ctx.lineTo(82, 10)
    ctx.setStrokeStyle('gray')
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(82, 10, 2, 0, 2 * Math.PI)
    ctx.setFillStyle('gray')
    ctx.fill()

    ctx.draw()
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

})