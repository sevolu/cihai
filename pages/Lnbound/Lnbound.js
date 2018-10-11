// pages/Lnbound/Lnbound.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isIphoneX: app.globalData.isIphoneX,
    name_input:'',
    tbhx_input:'',
    yt_input:'',
    showHx:true,
    fengX:false,
    userName:''
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
    if (app.globalData.userInfo) {
      //console.log(app.globalData.userInfo)
      this.setData({ userName: app.globalData.userInfo.nickName });
    }
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
    return {
      title: '自定义转发标题',
      path: 'pages/index/index',
      success: function (res) {
        // 转发成功
        wx.redirectTo({
          url: '../index/index',
        })
      },
      fail: function (res) {
        // 转发失败
        wx.redirectTo({
          url: '../index/index',
        })
      }
    }
  },
  nameInput:function(e){
    this.setData({
      name_input: e.detail.value
    })
  },
  tbhxInput: function (e) {
    this.setData({
      tbhx_input: e.detail.value
    })
  },
  ytInput: function (e) {
    this.setData({
      yt_input: e.detail.value
    })
  },
  submitLY:function(){
    //console.log(this.data.name_input);
    //console.log(this.data.tbhx_input);
    //console.log(this.data.yt_input);
    this.setData({
      showHx: false
    });
    
  },
  shareZx:function(){
    
    // this.setData({
    //   fengX: true
    // })
  },
  payment:function(){
    wx.navigateTo({
      url: '../pay/pay',
    })
  }
})