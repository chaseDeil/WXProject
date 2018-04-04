// pages/Login/Login.js
var app = getApp()

Page({

  data: {
    phone: '',
    password: ''
  },

  // 获取输入账号 
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },

  // 获取输入密码 
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  // 登录 
  login: function () {
    // wx.redirectTo({
    //   url: '../index/index'
    // })
    if (this.data.phone.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '用户名和密码不能为空',
        icon: 'none',
        duration: 2000
      })
    } else {
      wx.showLoading({
        title: '登录中...',
      })
      var utilMD5 = require('../../utils/MD5.js');
      var util = require('../../utils/util.js');
      var verify = utilMD5.hexMD5(this.data.password);
      util.requestPHPPost('api/index.php/Oauth2/access_token', { username: this.data.phone, password: verify, client_id: 'arc52dc98568b1f9', client_secret: 'f48b2557e21ac2c0be6f8c8fa56eebdca77ef560', grant_type: 'password' }, function (res) {
        
        var access_token = res['data']['access_token'];
        
        util.requestPHPPost('api/index.php/UserApi/user_info', { access_token: access_token }, function (res) {
          
          var userId = res.data['result']['id'];
          var openId = app.globalData.openId;

          app.globalData.userId = userId;
          app.globalData.access_token = access_token;
          wx.redirectTo({
            url: '../index/index',
          })

          // if (openId == '' || openId == null) {
          //   wx.login({
          //     success: res => {
          //       // 发送 res.code 到后台换取 openId, sessionKey, unionId
          //       var js_code = res.code;
          //       if (js_code == '' || js_code == null) {
          //         app.globalData.userId = userId;
          //         app.globalData.access_token = access_token;
          //         wx.redirectTo({
          //           url: '../index/index',
          //         })
          //       } else {
          //         util.requestWxPost('saveLoginAction!searchUserInfo.action', { js_code: js_code }, function (res) {

          //           setTimeout(function () {
          //             // 这里修改成跳转的页面 
          //             if (res.data['code'] == 0) {
          //               // app.globalData.userId = res.data['obj']['phpId']
          //                 app.globalData.openId = res.data['obj']['openId']
          //               util.requestWxPost('saveLoginAction!insertInfo.action', { access_token: access_token, userId: userId, openId: app.globalData.openId }, function (res) {
          //                 app.globalData.access_token = access_token;
          //                 app.globalData.userId = userId
          //                 // 这里修改成跳转的页面 
          //                 wx.redirectTo({
          //                   url: '../index/index'
          //                 })
          //               })
          //               // wx.redirectTo({
          //               //   url: '../index/index'
          //               // })
          //             } else if ((res.data['code'] == 1)) {
          //               app.globalData.openId = res.data['obj']['openId']
                        
          //               util.requestWxPost('saveLoginAction!insertInfo.action', { access_token: access_token, userId: userId, openId: app.globalData.openId }, function (res) {
          //                 app.globalData.access_token = access_token;
          //                 app.globalData.userId = userId
          //                 // 这里修改成跳转的页面 
          //                 wx.redirectTo({
          //                   url: '../index/index'
          //                 })
          //               })
          //             } else {
          //               app.globalData.userId = userId;
          //               app.globalData.access_token = access_token;
          //               wx.redirectTo({
          //                 url: '../index/index',
          //               })
          //             }

          //           }, 2000);
          //         })
          //       }
          //     }
          //   })
          // } else {
          //   util.requestWxPost('saveLoginAction!insertInfo.action', { access_token: access_token, userId: userId, openId: app.globalData.openId }, function (res) {
          //     app.globalData.access_token = access_token;
          //     app.globalData.userId = userId
          //     // 这里修改成跳转的页面 
          //     wx.redirectTo({
          //       url: '../index/index'
          //     })
          //   })
          // }


          // util.requestWxPost('saveLoginAction!insertInfo.action', { access_token: access_token, userId: userId, openId: app.globalData.openId}, function (res) {
          //   app.globalData.access_token = access_token;
          //   app.globalData.userId = userId
          //   // 这里修改成跳转的页面 
          //   wx.redirectTo({
          //     url: '../index/index'
          //   })
          //   wx.showToast({
          //     title: '登录成功',
          //     icon: 'success',
          //     duration: 2000
          //   })
          // })




          // // 这里修改成跳转的页面 
          // wx.redirectTo({
          //   url: '../index/index'
          // })
          // wx.showToast({
          //   title: '登录成功',
          //   icon: 'success',
          //   duration: 2000
          // })
        })
      })
    }
  }
})