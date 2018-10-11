//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isIphoneX: app.globalData.isIphoneX,
    isHUAWEI: app.globalData.isHUAWEI,
    deng_data: [
      {
        id:1,
        imgurl: 'http://a.lttgd.top/gongdeng/deng1.png',
        title: '光明灯',
        count_day: 0
      },
      {
        id: 2,
        imgurl: 'http://a.lttgd.top/gongdeng/deng2.png',
        title: '招财灯',
        count_day: 0
      },
      {
        id: 3,
        imgurl: 'http://a.lttgd.top/gongdeng/deng3.png',
        title: '健康灯',
        count_day: 0
      },
      {
        id:4,
        imgurl: 'http://a.lttgd.top/gongdeng/deng4.png',
        title: '事业灯',
        count_day: 0
      },
      {
        id:5,
        imgurl: 'http://a.lttgd.top/gongdeng/deng5.png',
        title: '智慧灯',
        count_day: 0
      },
      {
        id: 6,
        imgurl: 'http://a.lttgd.top/gongdeng/deng6.png',
        title: '平安灯',
        count_day: 0
      },
      {
        id: 7,
        imgurl: 'http://a.lttgd.top/gongdeng/deng7.png',
        title: '忏悔灯',
        count_day: 0
      },
      {
        id: 8,
        imgurl: 'http://a.lttgd.top/gongdeng/deng8.png',
        title: '求子灯',
        count_day:0
      },
      {
        id: 9,
        imgurl: 'http://a.lttgd.top/gongdeng/deng9.png',
        title: '姻缘灯',
        count_day: 0
      },
      {
        id: 10,
        imgurl: 'http://a.lttgd.top/gongdeng/deng10.png',
        title: '生辰灯',
        count_day: 0
      }
    ],
    tip_data: {
      imgurl: '',
      title: '',
      count_day: 0
    },
    showTip: 'hidden'
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
    var _this = this;
    //console.log(app.globalData.userId);
    if (app.globalData.userId) {
      wx.request({
        url: app.globalData.Url + 'statOfferLamp',
        method: 'GET',
        data: {
          userId: app.globalData.userId
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          if (res.data.result_code == 0) {
            //console.log(res.data);
            if (_this.data.deng_data) {
              for (var i = 0; i < _this.data.deng_data.length; i++) {
                if (res.data.statListList) {
                  for (var j = 0; j < res.data.statListList.length; j++) {
                    if (_this.data.deng_data[i].id == res.data.statListList[j].lampId) {
                      _this.data.deng_data[i].count_day = res.data.statListList[j].daySum
                    }
                  }
                }
              }
            }
            _this.setData(_this.data);

          }
        }
      });
    } else {
      app.getLoginUserId();
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

  },
  clickList: function (e) {
    this.data.tip_data = this.data.deng_data[e.currentTarget.id];
    this.data.showTip = 'showTable';
    this.setData(this.data);
  },
  hiddenTip: function () {
    this.data.showTip = 'hidden';
    this.setData(this.data);
  }
})