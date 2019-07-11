Page({
  data: {

  },
  verification: function (e) {
    var name = e.currentTarget.dataset.name;
    this.setData({
      [name]: e.detail.value.replace(/\s+/g, '')
    })
  },
  formSubmit: function (e) {
    var that = this;
    let datas = e.detail.value;
    if (e.detail.value.name == "" || e.detail.value.tel.length == "" || e.detail.value.qq == "" || e.detail.value.remark == "") {
      wx.showToast({
        title: '不能为空',
        icon: 'false',
        duration: 2000
      })
    } else {
      wx: wx.request({
        url: 'http://192.168.1.158:8080/maoPutEnter',
        data: datas,
        method: 'GET',
        success: function (res) {
          if (res.data === "1") {
            wx.showModal({
              title: '温馨提示',
              content: '提交成功'
            })
            that.setData({
              name: '',
              tel:'',
              remark:''
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
  }
})