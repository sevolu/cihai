// pages/gdjl/gdjl.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isIphoneX: app.globalData.isIphoneX,
    isHUAWEI: app.globalData.isHUAWEI,
    countdown_time: '10:9:41',
    count_date:'0',
    userName:'',
    time_record: [],
    daoTime:{
      leftHours:0,
      leftMinutes: 0,
      leftSeconds: 0,
    }
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
    this.countTime();

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
            _this.data.count_date = res.data.continueFreeDays;
            if (res.data.userFreeLampLogList) {
              for (var i = 0; i < res.data.userFreeLampLogList.length; i++) {
                var arr = [];
                var time = new Date(res.data.userFreeLampLogList[i].lampTime);
                var arr1 = addNumber(time.getFullYear()) + '-' + addNumber((time.getMonth() + 1)) + '-' + addNumber(time.getDate());
                arr.push(arr1);
                var arr2 = addNumber(time.getHours()) + ':' + addNumber(time.getMinutes()) + ':' + addNumber(time.getSeconds());
                arr.push(arr2);
                var arr3 = '供灯圆满';
                arr.push(arr3);
                _this.data.time_record.push(arr);
              }
              _this.setData(_this.data);
            }

          }
        }
      });
    } else {
      app.getLoginUserId();
    }
    function addNumber(num) {
      var num = (num > 9) ? num : ('0' + num);
      return num;
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
  countTime:function(){
    var _this = this;
    var endYear = new Date().getFullYear();
    var endMonth = new Date().getMonth() + 1;
    var endDay = new Date().getDate();
    var endTime2 = new Date(endYear, endMonth, endDay);
    var leftDiv = function () {
      var leftTime = endTime2 - (new Date().getTime());
      _this.data.daoTime.leftHours = addNumber(Math.floor(leftTime / 1000 / 60 / 60 % 24));
      _this.data.daoTime.leftMinutes = addNumber(Math.floor(leftTime / 1000 / 60 % 60));
      _this.data.daoTime.leftSeconds = addNumber(Math.floor(leftTime / 1000 % 60));
      _this.setData(_this.data);
      if (leftTime > 0) {
        setTimeout(function () {
          leftDiv();
        }, 1000);
      } else {
        clearTimeout(leftDiv())
      }

    }
    leftDiv();

    function addNumber(num) {
      var num = (num > 9) ? num : ('0' + num);
      return num;
    }  
  }
})