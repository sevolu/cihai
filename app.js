//app.js

App({
  globalData: {
    Url: 'https://a.lttgd.top/free/lamp/',
    payUrl: 'https://a.lttgd.top/free/pay/pay',
    userInfo: null,
    res_login: null,
    count: 0,
    userId: '',
    lampNum:0,
    indexData:{},
    isIphoneX:'',
    isHUAWEI: ''
  },
  onLaunch: function () {
    // 展示本地存储能力
    var _this = this;
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    var _this=this;
    // 登录
    this.getLoginUserId();
    // 获取用户信息
    wx.getSetting({
      success: res => {
        console.log(res);
        //console.log(res);
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }else{
          wx.navigateTo({
            url: "/pages/setting/setting"
          });
        }
      }
    })
    wx.getSystemInfo({
      success: function (res) {
        if (res.model.indexOf('iPhone X') > -1) {
          _this.globalData.isIphoneX = true;
        } else if (res.model.indexOf('HUAWEI') > -1){
          _this.globalData.isHUAWEI = true;
        }
      }
    });
  },
  getLoginUserId:function(fn){
    var _this = this;
    wx.login({
      success: res_login => {
        //console.log(res_login);
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.getUserInfo({
          success: function (res) {
            _this.globalData.userInfo = res.userInfo;
            wx.request({
              url: _this.globalData.Url + 'userInfo',
              method: 'GET',
              data: {
                code: res_login.code
              },
              header: {
                'content-type': 'application/json' // 默认值
              },
              success: function (res) {
                if (res.data.result_code == 0) {
                  _this.globalData.userId = res.data.userId;
                  if(fn){fn();}
                }
              }
            });
          }
        });
      }
    })
  },
  onShow: function (options){
    console.log('场景' + options.scene);
  }
})