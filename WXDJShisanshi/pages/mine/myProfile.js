// pages/mine/myProfile.js
const util = require('../../utils/util.js')
const area = require('../../utils/area.js')
var app = getApp()

var areaInfo = [];//所有省市区县数据

var provinces = [];//省

var citys = [];//城市

var index = [0, 0];

var cellId;
var show = false;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    headerImg: '../../image/defaultUserFace.png',
    dates: '1970-01-01',
    show: show,
    provinces: provinces,
    citys: citys,
    value: [0, 0],
    showValue: '',
    showData: null,
  },

  //显示默认图
  binderrorimg: function (event) {
    var that = this;

    that.setData({
      headerImg: '../../image/defaultUserFace.png'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var userDetail = options.userDetail;
    // var dataDic = JSON.parse(userDetail);
    var dataDic = app.globalData.passData;
    var face = options.headerImg;
    var provinceId = 0;
    var cityId = 0;
    var cityArr = [];
    //获取省市区县数据
    area.getAreaInfo(function (arr) {
      areaInfo = arr;
      console.log(areaInfo);
      for (var i = 0; i < areaInfo.length; i++) {
        if (dataDic.province == areaInfo[i].ID) {
          provinceId = i;
          cityArr = areaInfo[i].cities;
          for (var j = 0; j < cityArr.length; j++) {
            if (dataDic.city == cityArr[j].ID) {
              cityId = j;
              break;
            }
          }
        }
      }
    });
    var timestamp3 = dataDic.birthday;
    var showDates = area.formatTime(timestamp3,'Y-M-D');
    var that = this;
    that.setData({
      provinces: areaInfo,
      citys: areaInfo[provinceId].cities,
      value: [provinceId, cityId],
      showData: dataDic,
      dates : showDates,
      headerImg: face,
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

  nono: function () { },

  chosePic: function () {
    var that = this;
    wx.chooseImage({
      count: 1, // 默认9  
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        that.setData({
          headerImg: tempFilePaths,
        })

        var pages = getCurrentPages();
        var prePage = pages[pages.length - 2];
        prePage.setData({
          headerImg: that.data.headerImg
        })
        // wx.showLoading({
        //   title: '上传中...',
        // })
        // wx.uploadFile({
        //   url: 'http://department.c2m.cn:802/api/index.php/UserApi/updateFace',
        //   filePath: tempFilePaths[0],
        //   name: 'Filedata',
        //   formData: {
        //     'access_token': app.globalData.access_token
        //   },
        //   success: function (resB) {
        //     wx.hideLoading();
        //     wx.showToast({
        //       title: '上传成功',
        //       icon: 'success',
        //       duration: 2000
        //     })
        //   },
        //   fail: function () {
        //     wx.hideLoading();
        //     wx.showToast({
        //       title: '上传失败请重试',
        //       icon: 'none',
        //       duration: 2000
        //     })
        //   }
        // })  
      }
    })
  },

  editName: function () {
    var that = this;
    var userDetail = that.data.showData;
    // var json = JSON.stringify(userDetail);
    app.globalData.passData = userDetail;
    wx.navigateTo({
      url: '../mine/editProfile?type=0',
    })
  },
  editEmail: function () {
    var that = this;
    var userDetail = that.data.showData;
    // var json = JSON.stringify(userDetail);
    app.globalData.passData = userDetail;
    wx.navigateTo({
      url: '../mine/editProfile?type=1',
    })
  },
  editMood: function () {
    var that = this;
    var userDetail = that.data.showData;
    // var json = JSON.stringify(userDetail);
    app.globalData.passData = userDetail;
    wx.navigateTo({
      url: '../mine/editProfile?type=2',
    })
  },
  editSex: function () {
    var that = this;
    var userDetail = that.data.showData; 
    wx.showActionSheet({
      itemList: ['女', '男'],
      success: function (res) {
        userDetail.sex = res.tapIndex,
        that.setData({
          showData : userDetail
        })
      },
    })
  },
  editBirth: function () {

  },

  //  点击日期组件确定事件  
  bindDateChange: function (e) {
    console.log(e.detail.value)
    var that = this;
    var userDetail = that.data.showData;

    var stringTime = e.detail.value;
    var timestamp2 = Date.parse(new Date(stringTime));
    timestamp2 = timestamp2 / 1000;

    userDetail.birthday = timestamp2;
    that.setData({
      dates: stringTime,
      showData: userDetail,
    })
  },

  //移动按钮点击事件
  editAddress: function (e) {
    var that = this;
    that.setData({
      show: true,
    })

  },

  //隐藏弹窗浮层
  hiddenFloatView(e) {
    var that = this;
    that.setData({
      show: false,
    })
  },

  //滑动事件
  bindChange: function (e) {
    var that = this;
    var val = e.detail.value
    // console.log(e)
    //判断滑动的是第几个column
    //若省份column做了滑动则定位到地级市和区县第一位
    if (index[0] != val[0]) {
      val[1] = 0;
      // getCityArr(val[0], this);
      citys = areaInfo[val[0]].cities;
    }
    index = val;

    console.log(index + " => " + val);

    var provinceId = 0;
    var cityId = 0;

    var showD = that.data.showData;
    showD.province = areaInfo[val[0]].ID;
    showD.city = citys[val[1]].ID;
    showD.location = areaInfo[val[0]].ProvinceName + ' ' + citys[val[1]].CityName;
    //更新数据
    that.setData({
      provinces: areaInfo,
      citys: areaInfo[val[0]].cities,
      value: [val[0], val[1]],
      showValue: areaInfo[val[0]].ProvinceName + citys[val[1]].CityName,
      showData: showD
    })

  },

  /**
   * 保存个人信息
   */
  save: function () {
    wx.showLoading({
      title: '保存中...',
    })
    var that = this;
    util.requestPHPPost('api/index.php/UserApi/update', { user_name: that.data.showData.username, access_token: app.globalData.access_token, email: that.data.showData.email === null ? '' : that.data.showData.email, sex: that.data.showData.sex, province_id: that.data.showData.province, city_id: that.data.showData.city, mood: that.data.showData.mood === null ? '' : that.data.showData.mood, birthday: that.data.showData.birthday, address: that.data.showData.address }, function (res) {
      if(res.data.code == '00000') {
        wx.showToast({
          title: '保存成功',
          icon: 'success',
          duration: 2000,
        })

        setTimeout(function () {
          var pages = getCurrentPages();
          var prePage = pages[pages.length - 2];
          prePage.setData({
            dataDic: that.data.showData,
            headerImg: that.data.headerImg
          })
          wx.navigateBack({

          })
        }, 2000);
      } else {
        wx.showToast({
          title: res.data.message,
          icon: 'none',
          duration: 2000
        })
      }
    });
  }

})

