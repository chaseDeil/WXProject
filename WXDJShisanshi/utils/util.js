// const baseUrl = "http://192.168.101.4:6699/renda_web/api/"
// const baseUrl = "http://192.168.2.164:8080/renda_web/api/"
// const baseUrl = "https://djtest.c4m.cn/renda_web/api/"
const baseUrl = "http://department.c2m.cn:5001/renda_web/api/"

const basePhPUrl = "http://department.c2m.cn:802/"
// const basePhPUrl = "https://djtest.c4m.cn/dj_php/"
// const basePhPUrl = "http://192.168.102.10:802/"

const baseWebUrl = "http://department.c2m.cn:5001/"
// const baseWebUrl = "https://djtest.c4m.cn/"

const baseWxUrl = "http://192.168.2.164:8080/renda_web/miniapp/"

const requestGet = function (urlStr, reqData, callback, errorCallback) {
  console.log(baseUrl + urlStr);
  wx.request({
    url: baseUrl + urlStr,
    data: reqData,
    header: {
      'content-type': 'application/json' // 默认值
    },
    success: function (res) {  
      console.log(res);
      if (typeof callback === "function" && res.data['code'] == '0') {
        callback(res);
      }
      if (res.data['code'] != '0') {
        if (typeof errorCallback === "function" ){
          errorCallback(res);
        }else{
          wx.showToast({
            title: res.data['msg'],
            icon: 'none',
            duration: 2000
          });
        }
      } 
    },
    fail:function(res) {
      wx.showToast({
        title: "请求失败请重试！",
        icon: 'none',
        duration: 2000
      });
    }
  })
}

const requestPost = function (urlStr, reqData, callback, errorCallback) {
  wx.request({
    url: baseUrl + urlStr,
    method: "POST",
    data: json2Form(reqData),
    header: {
      'content-type': 'application/x-www-form-urlencoded' // 默认值
    },
    success: function (res) {
      console.log(urlStr);
      console.log(res);
      if (typeof callback === "function" && res.data['code'] == '0') {
        callback(res);
      }
      if (res.data['code'] != '0') {
        if (typeof errorCallback === "function") {
          errorCallback(res);
        } else {
          wx.showToast({
            title: res.data['msg'],
            icon: 'none',
            duration: 2000
          });
        }
      } 
    },
    fail: function (res) {
      wx.showToast({
        title: "请求失败请重试！",
        icon: 'none',
        duration: 2000
      });
    }
  })
}

const requestPHPPost = function (urlStr, reqData, callback, errorCallback) {
  wx.request({
    url: basePhPUrl + urlStr,
    method: "POST",
    data: json2Form(reqData),
    header: {
      'content-type': 'application/x-www-form-urlencoded' // 默认值
    },
    success: function (res) {
      console.log(res);
      if (typeof callback === "function") {
        callback(res);
      }
      if (res.data['code'] != '00000') {
        if (typeof errorCallback === "function") {
          errorCallback(res);
        } else {
          if(res.data['code'] == '10008')
          wx.showToast({
            title: '用户名或密码错误',
            duration: 2000,
            icon: 'none'
          });
        }
      } 
    },
    fail: function (res) {
      wx.showToast({
        title: "请求失败请重试！",
        duration: 2000
      });
    }
  })
}

const requestWxPost = function (urlStr, reqData, callback, errorCallback) {
  wx.request({
    url: baseWxUrl + urlStr,
    method: "POST",
    data: json2Form(reqData),
    header: {
      'content-type': 'application/x-www-form-urlencoded' // 默认值
    },
    success: function (res) {
      console.log(urlStr);
      console.log(res);
      callback(res);
      // if (typeof callback === "function" && res.data['code'] == '0') {
      //   callback(res);
      // }
      // if (res.data['code'] != '0') {
      //   if (typeof errorCallback === "function") {
      //     errorCallback(res);
      //   } else {
      //     wx.showToast({
      //       title: res.data['msg'],
      //       icon: 'none',
      //       duration: 2000
      //     });
      //   }
      // }
    },
    fail: function (res) {
      wx.showToast({
        title: "请求失败请重试！",
        icon: 'none',
        duration: 2000
      });
    }
  })
}

function json2Form(json) {
  var str = [];
  for (var p
    in json) {
    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(json[p]));
  }
  return str.join("&");
}

module.exports = {
  baseWebUrl: baseWebUrl,
  baseUrl: baseUrl,
  requestGet: requestGet,
  requestPost: requestPost,
  requestPHPPost: requestPHPPost,
  baseWxUrl: baseWxUrl,
  requestWxPost: requestWxPost
}
