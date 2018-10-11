// pages/pay/pay.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl:'',
    money_list:[
      8,
      28,
      68,
      88,
      128,
      188
    ],
    popZhe: "hidden",
    focus: false,
    top: 32,
    other_Money:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo){
      this.setData({ avatarUrl: app.globalData.userInfo.avatarUrl });
    }
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
  payMoney:function(e){
    console.log(parseInt(e.currentTarget.id*100));
    this.payFn(parseInt(e.currentTarget.id * 100));
  },
  showTip:function(){
    this.setData({
      popZhe: "show",
      focus: true
    })
  },
  hiddenTop: function () {
    this.setData({
      popZhe: "hidden"
    })
  },
  inputFocus: function () {
    this.setData({
      focus: true,
      top: 32
    })
  },
  inputBlur: function () {
    this.setData({
      focus: false,
      top: 50
    })
  },
  otherMoney:function(e){
    this.setData({
      other_Money: e.detail.value
    })
  },
  otherPayMoney:function(){
    console.log(parseInt(this.data.other_Money*100));
    this.setData({
      popZhe: "hidden"
    });
    this.payFn(parseInt(this.data.other_Money * 100));
  },
  payFn:function(money){
    var _this = this;
    if (app.globalData.userId) {
      wx.request({
        url: app.globalData.payUrl,
        method: 'GET',
        data: {
          userId: app.globalData.userId,
          appType: 1,
          money: money
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          //console.log(res.data)
          if (res.data.result_code == 0) {
            wx.requestPayment({
              'timeStamp': res.data.timeStamp,
              'nonceStr': res.data.nonceStr,
              'package': res.data.package,
              'signType': 'MD5',
              'paySign': res.data.paySign,
              'success': function (res) {
                //console.log(res);
                wx.showModal({
                  title: '温馨提醒',
                  content: '赞赏成功',
                  showCancel: false,
                  success: function (res) {
                    if (res.confirm) {
                      //console.log('用户点击确定');
                      wx.redirectTo({
                        url: '../Lnbound/Lnbound',
                      })
                    }
                  }
                });
              },
              'fail': function (res) {
                console.log('====');
                console.log(res)
              }
            });
          }

        }
      });

    } else {
      //提醒登录
    }
  }
})