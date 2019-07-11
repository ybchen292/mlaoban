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
    var changed = {}
    for (var i = 0; i < this.data.radioItems.length; i++) {
      if (checked.indexOf(this.data.radioItems[i].name) !== -1) {
        changed['radioItems[' + i + '].checked'] = true
      } else {
        changed['radioItems[' + i + '].checked'] = false
      }
    }
    this.setData(changed)
  }
})