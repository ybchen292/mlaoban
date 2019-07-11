// pages/sellStore/sellStore.js
Page({
  data: {
    radioItems: [
      { name: '天猫', value: 'tm', checked: 'true' },
      { name: '淘宝', value: 'tb' },
      { name: '京东', value: 'jd' },
    ],
    hidden: false
  },
  radioChange: function (e) {
    var checked = e.detail.value
    console.log(checked);
    var changed = {}
    for (var i = 0; i < this.data.radioItems.length; i++) {
      if (checked.indexOf(this.data.radioItems[i].name) !== -1) {
        changed['radioItems[' + i + '].checked'] = true
      } else {
        changed['radioItems[' + i + '].checked'] = false
      }
    }
    this.setData(changed)
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
    if (e.detail.value.name == "" || e.detail.value.mobile.length == "" || e.detail.value.remark == "") {
      wx.showToast({
        title: '不能为空',
        icon: 'false',
        duration: 2000
      })
    } else {
      wx: wx.request({
        url: 'http://192.168.1.158:8080/purChaseShop',
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
              mobile: '',
              remark: ''
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