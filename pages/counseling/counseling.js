Page({
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '17377787801',
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  }
})