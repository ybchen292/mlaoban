//index.js
var WxAutoImage = require('../../js/wxAutoImageCal.js');
var app = getApp();
Page({
  data: {
    iconArray: [
      {
        "iconUrl": '../../image/icon-0_02.png',
        "iconurl": '../tianmao/tianmao',
        "iconText": '天猫网店'
      },
      {
        "iconUrl": '../../image/icon-0_08.png',
        "iconurl": '../settled/settled',
        "iconText": '天猫入驻'
      },
      {
        "iconUrl": '../../image/icon-0_04.png',
        "iconText": '添加类目'
      },
      {
        "iconUrl": '../../image/icon-0_17.png',
        "iconText": '商标注册'
      },
      {
        "iconUrl": '../../image/icon-0_15.png',
        "iconurl": '../sellstores/sellstores',
        "iconText": '出售网店'
      },
      {
        "iconUrl": '../../image/icon-0_16.png',
        "iconurl": '../purchase/purchase',
        "iconText": '求购网店'
      }
     ,
      {
        "iconUrl": '../../image/icon-0_14.png',
        "iconurl": '../putenter/putenter',
        "iconText": '网店估价'
      },
      {
        "iconUrl": '../../image/icon-0_06.png',
        "iconurl": '../approach/approach',
        "iconText": '关于我们'
      }
    ],
     imgUrls: [
      '../../image/banner_2.png',
      '../../image/banner_3.png',
      '../../image/banner_4.png'
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200,
    list: [],
    bottom: [
      {
        "botturl":'../approach/approach',
        "bottText":'关于我们'
      },
      {
        "botturl": '../helpcenter/helpcenter',
        "bottText": '帮助中心'
      },
    ],
    bottomImg: [
      {
        "boturl":'',
        "imgurl":'../../image/icon_18.png'
      },
      {
        "boturl": '',
        "imgurl": '../../image/icon_20.png'
      },
      {
        "boturl": '',
        "imgurl": '../../image/icon_22.png'
      },
      {
        "boturl": '',
        "imgurl": '../../image/icon_24.png'
      },
      {
        "boturl": '',
        "imgurl": '../../image/icon_26.png'
      },
    ]
  },
  cusImageLoad: function (e) {
    var that = this;
    that.setData(WxAutoImage.wxAutoImageCal(e));
  },
  // 主内容的点击事件
  shoptap: function (e) {
    let val = e.currentTarget.dataset.id;
    console.log(val);
    wx.navigateTo({
      url: `../tm_detail/tm_detail?id=${val}`,
    })
  },
  //跳转到列表页
  navigateDetail: function () {
    wx.navigateTo({
      url: '../tianmao/tianmao',
      success: function () {

        wx.setNavigationBarTitle({
          title: '天猫网店',
        })
        wx.showNavigationBarLoading();
        setTimeout(function () {

          wx.hideNavigationBarLoading();
        }, 2000)
      }

    })

  }, 
  onLoad: function (options) {
    var that = this 
    wx.request({
      url: 'http://192.168.1.158:8080/miniIndex',
      data: {},
      headers: {
        'content-type': 'application/json' // 默认值
      },
      method: "GET",
      success: function (res) {         //将获取到的json数据，存在名字叫list的这个数组中        
        that.setData({
          list: JSON.parse(res.data)//res代表success函数的事件对，data是固定的，list是数组           
        })  
        console.log(JSON.parse(res.data)) 
      }
    })
  }
})
