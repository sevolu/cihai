//获取应用实例
const app = getApp();


Page({

  /**
   * 页面的初始数据
   */
  data: {
    isIphoneX: app.globalData.isIphoneX,
    isHUAWEI: app.globalData.isHUAWEI,
    gd_date: '0',
    ifshangbang: '您尚未上榜',
    userName: '',
    listbox: [
      '  小樊 （亿嘉小百）',
      '凤清',
      'A晓彤',
      '郑晓平',
      '诺拉微客',
      '15013006247',
      '许鹏',
      '为我解高兴的暗码',
      '那时雨°╮',
      '❤-心交朋友钱交',
      '我爱你，爱到恨不得杀了你',
      '久而旧之',
      '巴黎铁塔',
      '_倾月轩萱_',
      '开心的笨小孩',
      '冷落了♂自己',
      '浓情甜言、无需言语√',
      'Paranoid',
      '偏执',
      'Ｇaмe Ｏveｒ',
      'しovё搁浅',
      '冰瞳',
      '离人梦v',
      '带著面具~',
      '孤奥',
      '互不打搅、各自安好',
      '别在我面前犯贱',
      '寂寞学会了撒谎',
    ],
    showTip: 'hidden',
    zTransform:0,
    interval:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    if (app.globalData.userInfo) {
      this.data.userName = app.globalData.userInfo.nickName;
      this.setData(this.data);
    }
    var _this = this;
    //console.log(app.globalData.userId);
    if (app.globalData.userId) {
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
          if (res.data.result_code == 0) {
            //console.log(res.data.continueFreeDays);
            if (res.data.continueFreeDays >= 7) {
              _this.data.ifshangbang = '您已经上榜';
            } else {
              _this.data.ifshangbang = '您尚未上榜';
            }
            _this.data.gd_date = res.data.continueFreeDays;
            _this.setData(_this.data);

          }
        }
      });
    } else {
      app.getLoginUserId();
    }

    this.runTxt();
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
  hiddenTip: function () {
    this.data.showTip = 'hidden';
    this.setData(this.data);
  },
  showTipfn: function () {
    this.data.showTip = 'showTable';
    this.setData(this.data);
  },
  runTxt: function () {
    var _this=this;
    var xh = (_this.data.listbox.length * 37);
    clearInterval(_this.data.interval);
    _this.setData(this.data);
    _this.data.interval = setInterval(function () {
      if (_this.data.zTransform>-xh) {
       _this.data.zTransform--
      _this.setData({ zTransform: _this.data.zTransform});
      } else {
        _this.setData({ zTransform: 0 });
       }
    }, 30);

  },
  gdjlpage:function(){
    wx.redirectTo({
      url: '../gdjl/gdjl',
    })
  }
})
