// pages/lightOn/lightOn.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isIphoneX: app.globalData.isIphoneX,
    isHUAWEI: app.globalData.isHUAWEI,
    deng_data: [
      {
        id:'1',
        imgurl: 'http://a.lttgd.top/gongdeng/deng1.png',
        title: '光明灯',
        content:{
          crosshead:'【供奉菩萨为不动尊菩萨】',
          explain:'光明灯代表心中有信仰，以及对光明的渴望。光明灯是一盏照亮前程的祈福灯！',
          apply:'【适用对象】：求学业光明，事业通达，财运亨通，婚姻美满者'
        },
        price:0
      },
      {
        id: '2',
        imgurl: 'http://a.lttgd.top/gongdeng/deng2.png',
        title: '招财灯',
        content: {
          crosshead: '【供奉菩萨为财宝天王】',
          explain: '招财灯用于祈求财神眷顾，生意兴隆昌盛，财源滚滚',
          apply: '【适用对象】：创业者，投资者，求财者'
        },
        price: 0
      },
      {
        id: '3',
        imgurl: 'http://a.lttgd.top/gongdeng/deng3.png',
        title: '健康灯',
        content: {
          crosshead: '【供奉菩萨为药师佛菩萨】',
          explain: '健康灯用于祈求身体安康，生活愉悦，延年益寿。病者可祈求早日康复，健康成长',
          apply: '【适用对象】：自已或者亲朋好友，年长，年幼者特别是身体欠安者'
        },
        price: 0
      },
      {
        id: '4',
        imgurl: 'http://a.lttgd.top/gongdeng/deng4.png',
        title: '事业灯',
        content: {
          crosshead: '【供奉菩萨为准提菩萨】',
          explain: '事业灯用于祈求事业腾飞，职场人际关系和谐，让事业步步高升',
          apply: '【适用对象】：求职者，想升职加薪者，开创事业者等。'
        },
        price: 0
      },
      {
        id: '5',
        imgurl: 'http://a.lttgd.top/gongdeng/deng5.png',
        title: '智慧灯',
        content: {
          crosshead: '【供奉菩萨为文殊菩萨】',
          explain: '智慧灯由象征聪明智慧的菩萨守护您，让您生智开悟。考生应试者在考前要点亮智慧灯，以祈求金榜题名。功成名就！',
          apply: '【适用对象】：学生，考生，求职者'
        },
        price: 0
      },
      {
        id: '6',
        imgurl: 'http://a.lttgd.top/gongdeng/deng6.png',
        title: '平安灯',
        content: {
          crosshead: '【供奉菩萨为地藏菩萨】',
          explain: '平安灯用来祈求平安顺利，可保佑自己或为他人祈福，是传播衷心祝愿和友好的表现。',
          apply: '【适用对象】：所有需要关怀和祝福的人，尤其是不在身边的亲友和身陷困境的世人。'
        },
        price: 0
      },
      {
        id: '7',
        imgurl: 'http://a.lttgd.top/gongdeng/deng7.png',
        title: '忏悔灯',
        content: {
          crosshead: '【供奉菩萨为普贤菩萨】',
          explain: '忏悔灯用来谨慎功过，诚心思悔，时时反省求进步！',
          apply: '【适用对象】：希望能诚心改善陋习，过错的自己'
        },
        price: 0
      },
      {
        id: '8',
        imgurl: 'http://a.lttgd.top/gongdeng/deng8.png',
        title: '求子灯',
        content: {
          crosshead: '【供奉菩萨为求子观音】',
          explain: '求子灯让希望求子的父母，可以向上天传达求子的心愿，让有缘的孩子早日来报道！',
          apply: '【适用对象】：渴望求子的家庭或者父母'
        },
        price: 0
      },
      {
        id: '9',
        imgurl: 'http://a.lttgd.top/gongdeng/deng9.png',
        title: '姻缘灯',
        content: {
          crosshead: '【供奉菩萨为爱染明王】',
          explain: '姻缘灯是月老给我们的恩赐。点亮姻缘灯可祈求恋爱甜蜜，有情人终成眷属；夫妻恩爱，婚姻幸福美满。',
          apply: '【适用对象】：单身者、有伴侣者'
        },
        price: 0
      },
      {
        id: '10',
        imgurl: 'http://a.lttgd.top/gongdeng/deng10.png',
        title: '生辰灯',
        content: {
          crosshead: '【供奉菩萨为观世音菩萨】',
          explain: '生日代表小运势转变。亲友或者自己过生日时点一盏生辰灯，祈愿生辰快乐，在新的一岁里好运多多',
          apply: '【适用对象】：即将过生日的亲朋好友，自己等'
        },
        price: 0
      }
    ],
    curindex:0,
    curDeng: {
      id: '1',
      imgurl: 'http://a.lttgd.top/gongdeng/deng1.png',
      title: '光明灯',
      content: {
        crosshead: '【供奉菩萨为不动尊菩萨】',
        explain: '光明灯代表心中有信仰，以及对光明的渴望。光明灯是一盏照亮前程的祈福灯！',
        apply: '【适用对象】：求学业光明，事业通达，财运亨通，婚姻美满者'
      },
      price: 0
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
  btnClick:function(e){
    //console.log(e.currentTarget.id);
    this.data.curindex = e.currentTarget.id;
    this.data.curDeng = this.data.deng_data[e.currentTarget.id];
    this.setData(this.data);
  },
  wantToDD:function(){
    var _this=this;
    if (app.globalData.userId){
      wx.request({
        url: app.globalData.Url + 'offerLamp',
        method: 'GET',
        data: {
          userId: app.globalData.userId,
          lampId: _this.data.curDeng.id,
          lampNum: app.globalData.lampNum+1
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          //console.log(res.data)
          app.globalData.lampNum += 1;
          if (res.data.result_code == 0) {
            //console.log(res.data.continueFreeDays);
            wx.redirectTo({
              url: '../Lnbound/Lnbound',
            })
          }
        }
      });
      
    }else{
      //提醒登录
    }

  }
})