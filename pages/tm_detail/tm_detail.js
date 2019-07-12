// pages/particulars/particulars.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isshade: false,
        shadeimg: '',
        list: [],
        issell: [],
        bookmark: []
    },
    bannertap: function(e) {
        let src = e.target.dataset.src;
        this.setData({
            shadeimg: src,
            isshade: true
        })
    },
    shadetap: function() {
        this.setData({
            shadeimg: "",
            isshade: false
        })
    },
    shadeimgtap: function() {},
    skiptap: function(e) {
        let item = e.target.dataset.id;
        const query = wx.createSelectorQuery()
        query.select('.' + item).boundingClientRect()
        query.selectViewport().scrollOffset()
        query.exec(function(res) {
            let scrollTop = res[0].top + res[1].scrollTop;
            wx.pageScrollTo({
                scrollTop: scrollTop,
                duration: 200
            })
        })
    },
    // 主内容的点击事件
    shoptap: function(e) {
        let val = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: `../tm_detail/tm_detail?id=${val}`,
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var that = this;
        wx.request({
            url: `http://192.168.1.158:8080/getMiniTMallInfo?id=${options.id}`,
            headers: {
                'content-type': 'application/json' // 默认值
            },
            method: "GET",
            success: function(res) { //将获取到的json数据，存在名字叫list的这个数组中        
                that.setData({
                    detail: JSON.parse(res.data),
                    list: JSON.parse(res.data).l_similar,
                    issell: JSON.parse(res.data).l_maoworker,
                    bookmark: JSON.parse(res.data).l_BookMark //res代表success函数的事件对，data是固定的，list是数组           
                })
                console.log(that.data.detail);
            }
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    },

})