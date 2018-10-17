//index.js
//获取应用实例
const app = getApp();
const dengData = require('../../utils/dengData.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isIphoneX: app.globalData.isIphoneX,
    isHUAWEI: app.globalData.isHUAWEI,
    notLogin:{
      imgurl: {
        deFault: 'http://a.lttgd.top/gongdeng/ligth.png'
      },
    },
    loginOn: {
      dengData: dengData,
      fo_img: [
        'http://a.lttgd.top/gongdeng/fo1.png',
        'http://a.lttgd.top/gongdeng/fo2.png',
        'http://a.lttgd.top/gongdeng/fo3.png',
        'http://a.lttgd.top/gongdeng/fo4.png',
      ],
      hua_img: [
        'http://a.lttgd.top/gongdeng/eggHua.png'
      ],
      xianglu_img: [
        'http://a.lttgd.top/gongdeng/pingan.png'
      ],
    },
    music: {
      src: 'http://a.lttgd.top/gongdeng/dabeizhou.mp3',
      running: 'running'
    },
    yiDian:false,
    curDengData: {
      id: '1',
      foxiang: 'http://a.lttgd.top/gongdeng/fo2.png',
      imgurl: 'http://a.lttgd.top/gongdeng/deng1.png',
      title: '光明灯',
      content: {
        crosshead: '【供奉菩萨为不动尊菩萨】',
        explain: '光明灯代表心中有信仰，以及对光明的渴望。光明灯是一盏照亮前程的祈福灯！',
        apply: '【适用对象】：求学业光明，事业通达，财运亨通，婚姻美满者'
      },
      price: 0
    },
    ddNumber:0,
    userInfo: {},
    hasUserInfo: false,
    switchoverLoading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    var _this = this;
    
    App.zhuge.track('用户来源', {
      source: e.source,
      userId:app.globalData.userId
    });
  },
  off:function (detail){
    console.log(detail)
  },
  getPage:function(){
    var _this = this;
    if (app.globalData.indexData.yiDian) {
      _this.setData({
        switchoverLoading: true,
        yiDian: app.globalData.indexData.yiDian,
        curDengData: app.globalData.indexData.curDengData,
        ddNumber: app.globalData.indexData.ddNumber
      });
    }
    if (app.globalData.userId) {
      _this.setData({ switchoverLoading: true })
      this.getLogin();
    } else {
      app.getLoginUserId(function () {
        _this.getLogin();
      });
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
    this.getPage();
  },
  bingTrack: function (e) {
    var event = e.currentTarget.dataset.event;
    var page = e.currentTarget.dataset.page;
    App.zhuge.track(event, {
      event: page
    });
    App.zhuge.identify(app.globalData.userId, {
      event: page
    });
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.audioCtx = wx.createAudioContext('myAudio');
    this.audioCtx.play();
    this.getPage();
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
  audioPlay: function () {
    if (this.data.music.running == '') {
      this.audioCtx.play();
      this.data.music.running = 'running';
      this.setData(this.data);
    } else {
      this.audioCtx.pause();
      this.data.music.running = '';
      this.setData(this.data);
    }
  },
  startDiandeng:function(e){
    this.bingTrack(e);
    if (app.globalData.userId){
      wx.redirectTo({
        url: '../lightOn/lightOn',
      })
    }
  },
  getLogin:function(){
    var _this = this;
    wx.request({
      url: app.globalData.Url + 'userFreeLampInfo',
      method: 'GET',
      data: {
        userId: app.globalData.userId
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        //console.log(res.data);
        if (res.data.result_code == 0) {
          //console.log(res.data);
          _this.data.switchoverLoading = true;
          if (res.data.isOfferLampToday){
            _this.data.yiDian = true; 
            _this.data.curDengData=_this.data.loginOn.dengData[res.data.lastLampId-1];
            _this.data.ddNumber = res.data.offerToday;
            

            app.globalData.indexData.yiDian = _this.data.yiDian;
            app.globalData.indexData.curDengData = _this.data.curDengData;
            app.globalData.indexData.ddNumber=_this.data.ddNumber;
          }
          _this.setData(_this.data);

        }
      }
    }); 
  }
})