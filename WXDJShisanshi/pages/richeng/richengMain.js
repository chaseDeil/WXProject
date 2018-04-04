// pages/richeng/richengMain.js
const util = require('../../utils/util.js')
const calendar = require('../../utils/calendar.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowCalendar: true,
    date: '',//保存当前显示的月份
    title: '',
    days: '',//保存当前月的每一天
    todayDay: '',
    todayYear: '',
    todayMonth: '',
    selectedDay:'',
    selectedYear: '',
    selectedMonth: '',
    objList:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var now = new Date()
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight,
          date: now,
          todayDay: now.getDate(),
          todayYear: now.getFullYear(),
          todayMonth: now.getMonth() + 1,
          selectedDay: now.getDate(),
          selectedYear: now.getFullYear(),
          selectedMonth: now.getMonth() + 1,
        });
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
    var that = this;
    that.changeMonth();
    that.getRichengList();
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

  //传入一个Date,返回当月天数
  getDaysCount: function (d) {
    return (new Date(d.getFullYear(), d.getMonth() + 1, 0)).getDate()
  },

  //月份减1
  getPreMonth: function (d) {
    var year = d.getFullYear(); //获取当前日期的年份
    var month = d.getMonth() ; //获取当前日期的月份
    var day = d.getDate(); //获取当前日期的日
    var days = (new Date(year, month, 0)).getDate(); //获取当前日期中月的天数
    var year2 = year;
    var month2 = parseInt(month) - 1;
    if (month2 == -1) {
      year2 = parseInt(year2) - 1;
      month2 = 11;
    }
    var day2 = day;
    var days2 = (new Date(year2, month2, 0)).getDate();
    if (day2 > days2) {
      day2 = days2;
    }
    return new Date(year2, month2, day2);
  },

  //月份加1
  getNextMonth: function (d) {
    var year = d.getFullYear(); //获取当前日期的年份
    var month = d.getMonth(); //获取当前日期的月份
    var day = d.getDate(); //获取当前日期的日
    var days = (new Date(year, month, 0)).getDate(); //获取当前日期中月的天数
    var year2 = year;
    var month2 = parseInt(month) + 1;
    if (month2 == 12) {
      year2 = parseInt(year2) + 1;
      month2 = 0;
    }
    var day2 = day;
    var days2 = (new Date(year2, month2, 0)).getDate();
    if (day2 > days2) {
      day2 = days2;
    }
    return new Date(year2, month2, day2);
  },

  //刷新当前日期的月份数据
  changeMonth: function () {
    var that = this;
    var days = []
    var point = []
    //获取有数据的日期列表,"yyyy-MM" 
    var month = that.data.date.getMonth() + 1 < 10 ? "0" + (that.data.date.getMonth() + 1) : that.data.date.getMonth() + 1;
    var strMonthtime = that.data.date.getFullYear() + "-" + month;
    util.requestGet('partyScheduleAction!searchResultListMonth.action', { userId: app.globalData.userId, page: 1, strMonthtime: strMonthtime }, function (res) {
      //拿到有数据的日期列表
      point = res.data['objList']
      for (var i = 0; i < that.getDaysCount(that.data.date); i++) {
        var day = calendar.calendar.solar2lunar(that.data.date.getFullYear(), (that.data.date.getMonth() + 1), (i + 1))   
        //初始化为没有红点
        day["hasPoint"] = false;
        //遍历，在日期结构中装载红点
        for (var j = 0; j < point.length; j++){
          if ((day.cYear + "-" + (day.cMonth < 10 ? "0" + day.cMonth : day.cMonth) + "-" + (day.cDay < 10 ? "0" + day.cDay : day.cDay)) == point[j]){
            day["hasPoint"] = true;
          }
        }
        days.push(day)
      }
      //刷新界面
      that.setData({
        title: that.data.date.getFullYear() + "年" + (that.data.date.getMonth() + 1) + "月",
        days: days
      });
    }); 
  },

  //前一个月切换
  beforeMonth:function(event) {
    var that = this;
    var date = that.getPreMonth(that.data.date);
    that.setData({
      date: date
    });
    that.changeMonth();
  },

  //下一个月切换
  nextMonth: function (event) {
    var that = this;
    var date = that.getNextMonth(that.data.date);
    that.setData({
      date: date
    });
    that.changeMonth();
  },

  //切换日期
  selectDate: function (event) {
    var that = this;
    var year = event.currentTarget.dataset.year;
    var month = event.currentTarget.dataset.month;
    var day = event.currentTarget.dataset.day;
    that.setData({
      selectedDay: day,
      selectedYear: year,
      selectedMonth: month,
    });
    that.getRichengList();
  },

  //收起打开日历
  CalendarTarget: function (event) {
    var that = this;
    that.setData({
      isShowCalendar: !that.data.isShowCalendar
    });
  },
  
  //显示今天的数据
  gotoToday: function (event) {
    var that = this;
    var now = new Date()
    that.setData({
      date: now,
      selectedDay: now.getDate(),
      selectedYear: now.getFullYear(),
      selectedMonth: now.getMonth() + 1,
    });
    that.changeMonth();
    that.getRichengList();
  },

  //显示日程列表
  getRichengList:function(){
    var that = this;
    var day = that.data.selectedDay < 10 ? "0" + (that.data.selectedDay) : that.data.selectedDay;
    var month = that.data.selectedMonth < 10 ? "0" + (that.data.selectedMonth) : that.data.selectedMonth;
    var strScheduleDateStart = that.data.selectedYear + "-" + month + "-" + day;
    console.log(strScheduleDateStart)
    util.requestGet('partyScheduleAction!searchResultList.action', { userId: app.globalData.userId, page: 1, strScheduleDateStart: strScheduleDateStart }, function (res) {
      that.setData({
        objList: res.data['objList']
      });
    })
  },

  // 跳转新建
  gotoNew: function (event) {
    var that = this;
    app.globalData.passData = null;
    wx.navigateTo({
      url: '/pages/richeng/richengAdd'
    })
  },

  // 跳转详情
  gotoDetail: function (event) {
    var that = this;
    app.globalData.passData = that.data.objList[event.currentTarget.dataset.index]
    wx.navigateTo({
      url: '/pages/richeng/richengInfo'
    })
  },
})