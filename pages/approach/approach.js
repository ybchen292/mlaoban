// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  verification: function (e) {
    var name = e.currentTarget.dataset.name;
    this.setData({
      [name]: e.detail.value.replace(/\s+/g, '')
    })
  },
  formSubmit: function (e) {
    var username = e.detail.value.name;
    var userconnect = e.detail.value.phone;
    var that = this;
    let datas = e.detail.value;
    if (e.detail.value.username == "" || e.detail.value.userconnect.length == "" || e.detail.value.suggest == "") {
      wx.showToast({
        title: '不能为空',
        icon: 'false',
        duration: 2000
      }) 
    } else {
      wx: wx.request({
        url: 'http://192.168.1.158:8080/saveSuggest',
        data: datas,
        method: 'GET',
        success: function (res) {
          if (res.data === "1") {
            wx.showModal({
              title: '温馨提示',
              content: '提交成功'
            })
            that.setData({
              username: '',
              userconnect:'',
              suggest:''
            })
          }
        },

        fail: function (res) {
          wx.showModal({
            title: '温馨提示',
            content: '提交失败'
          })
        },
      })
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

  }
})