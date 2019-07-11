// pages/listsel/lisgsel.js
Page({

    /**
     * 页面的初始数据
     */

    data: {
        queryval: '',//关键字
        issearch: false,//是否点击了查询
        urldatas: '',//条件的参数  
        pagenum: '1',//当前的页数
        shopitems: [],//主内容的数据
        priceitems: [
            { color: true, item: '全部', sign: '' },
            { color: false, item: '5万以内', sign: 'p1' },
            { color: false, item: '5 — 10万', sign: 'p2' },
            { color: false, item: '10 — 20万', sign: 'p3' },
            { color: false, item: '20 — 50万', sign: 'p4' }
        ],
        classifyblk1: true,
        classifyblk2: true,
        classifyblk3: true,
        listval: [
            {
                title: '商城类型', wrap: [
                    [
                        { color: true, item: '不限', sign: '' },
                        { color: false, item: '旗舰店', sign: 'm1' },
                        { color: false, item: '专营店', sign: 'm2' },
                        { color: false, item: '专卖店', sign: 'm3' }
                    ]
                ]
            },
            {
                title: '商城类型', wrap: [
                    [
                        { color: true, item: '不限', sign: '' },
                        { color: false, item: 'R标', sign: 'b1' },
                        { color: false, item: 'TM标', sign: 'b2' }
                    ]
                ]
            },
            {
                title: '所属行业', wrap: [
                    [
                        { color: true, item: '不限', sign: '' },
                        { color: false, item: '服饰鞋包', sign: 'k101' },
                        { color: false, item: '美容护理', sign: 'k102' },
                        { color: false, item: '3C数码', sign: 'k103' }
                    ],
                    [
                        { color: false, item: '游戏话费', sign: 'k104' },
                        { color: false, item: '食品保健', sign: 'k105' },
                        { color: false, item: '母婴用品', sign: 'k106' },
                        { color: false, item: '户外运动', sign: 'k107' }
                    ],
                    [
                        { color: false, item: '家装家饰', sign: 'k108' },
                        { color: false, item: '珠宝首饰', sign: 'k110' },
                        { color: false, item: '生活服务', sign: 'k111' },
                        { color: false, item: '汽车配件', sign: 'k112' }
                    ],
                    [
                        { color: false, item: '书籍音像', sign: 'k113' },
                        { color: false, item: '玩乐收藏', sign: 'k114' },
                        { color: false, item: '其他行业', sign: 'k115' }
                    ]

                ]
            },
            {
                title: '商城类型', wrap: [
                    [
                        { color: true, item: '不限', sign: '' },
                        { color: false, item: '01类', sign: 'c1' },
                        { color: false, item: '02类', sign: 'c2' },
                        { color: false, item: '03类', sign: 'c3' }
                    ],
                    [
                        { color: false, item: '04类', sign: 'c4' },
                        { color: false, item: '05类', sign: 'c5' },
                        { color: false, item: '06类', sign: 'c6' },
                        { color: false, item: '07类', sign: 'c7' }
                    ],
                    [
                        { color: false, item: '08类', sign: 'c8' },
                        { color: false, item: '09类', sign: 'c9' },
                        { color: false, item: '10类', sign: 'c10' },
                        { color: false, item: '11类', sign: 'c11' }
                    ],
                    [
                        { color: false, item: '12类', sign: 'c12' },
                        { color: false, item: '13类', sign: 'c13' },
                        { color: false, item: '14类', sign: 'c14' },
                        { color: false, item: '15类', sign: 'c15' }
                    ],
                    [
                        { color: false, item: '16类', sign: 'c16' },
                        { color: false, item: '17类', sign: 'c17' },
                        { color: false, item: '18类', sign: 'c18' },
                        { color: false, item: '19类', sign: 'c19' }
                    ],
                    [
                        { color: false, item: '20类', sign: 'c20' },
                        { color: false, item: '21类', sign: 'c21' },
                        { color: false, item: '22类', sign: 'c22' },
                        { color: false, item: '23类', sign: 'c23' }
                    ],
                    [
                        { color: false, item: '24类', sign: 'c24' },
                        { color: false, item: '25类', sign: 'c25' },
                        { color: false, item: '26类', sign: 'c26' },
                        { color: false, item: '27类', sign: 'c27' }
                    ],
                    [
                        { color: false, item: '28类', sign: 'c28' },
                        { color: false, item: '29类', sign: 'c29' },
                        { color: false, item: '30类', sign: 'c30' },
                        { color: false, item: '31类', sign: 'c31' }
                    ],
                    [
                        { color: false, item: '32类', sign: 'c32' },
                        { color: false, item: '33类', sign: 'c33' },
                        { color: false, item: '34类', sign: 'c34' },
                        { color: false, item: '35类', sign: 'c35' }
                    ],
                    [
                        { color: false, item: '36类', sign: 'c36' },
                        { color: false, item: '37类', sign: 'c37' },
                        { color: false, item: '38类', sign: 'c38' },
                        { color: false, item: '39类', sign: 'c39' }
                    ],
                    [
                        { color: false, item: '40类', sign: 'c40' },
                        { color: false, item: '41类', sign: 'c41' },
                        { color: false, item: '42类', sign: 'c42' },
                        { color: false, item: '43类', sign: 'c43' }
                    ],
                    [
                        { color: false, item: '44类', sign: 'c44' },
                        { color: false, item: '45类', sign: 'c45' },
                    ]
                ]
            },
            // {
            //     title: '动态评分', wrap: [
            //         [
            //             { color: true, item: '不限' },
            //             { color: false, item: '5.0以上' },
            //             { color: false, item: '4.9分以上' },
            //             { color: false, item: '4.8分以上' }
            //         ],
            //         [
            //             { color: false, item: '4.7分以上' },
            //             { color: false, item: '4.6分以上' },
            //             { color: false, item: '4.5分以上' }
            //         ]
            //     ],
            // },
            {
                title: '扣分情况', wrap: [
                    [
                        { color: true, item: '不限', sign: '' },
                        { color: false, item: '全无扣分', sign: 's1' },
                        { color: false, item: '一般扣分', sign: 's2' },
                        { color: false, item: '严重扣分', sign: 's3' }
                    ],
                    [
                        { color: false, item: '售假扣分', sign: 's4' }
                    ]
                ],
            },
            {
                title: '纳税资质', wrap: [
                    [
                        { color: true, item: '不限', sign: '' },
                        { color: false, item: '一般纳税人', sign: 'd1' },
                        { color: false, item: '小规模纳税人', sign: 'd2' }

                    ]
                ],
            },
            {
                title: '是否带货', wrap: [
                    [
                        { color: true, item: '不限', sign: '' },
                        { color: false, item: '是否带货', sign: 'g1' },
                        { color: false, item: '是否带货', sign: 'g2' }

                    ]
                ]
            },
            {
                title: '提供货源', wrap: [
                    [
                        { color: true, item: '不限', sign: '' },
                        { color: false, item: '不提供货', sign: 'f1' },
                        { color: false, item: '提供货源', sign: 'f2' }

                    ]
                ]
            },
            {
                title: '商标过户', wrap: [
                    [
                        { color: true, item: '不限', sign: '' },
                        { color: false, item: '可过户', sign: 'e2' },
                        { color: false, item: '只能授权', sign: 'e1' }
                    ]
                ]
            },
            // {
            //     title: '能否贴牌', wrap: [
            //         [
            //             { color: true, item: '不限' },
            //             { color: false, item: '可贴牌' },
            //             { color: false, item: '不能贴牌' }
            //         ]
            //     ]
            // },
            {
                title: '所在地区', wrap: [
                    [
                        { color: true, item: '不限', sign: '' },
                        { color: false, item: '华东地区', sign: 'a3' },
                        { color: false, item: '华南地区', sign: 'a4' },
                        { color: false, item: '华中地区', sign: 'a5' }
                    ],
                    [
                        { color: false, item: '华北地区', sign: 'a2' },
                        { color: false, item: '西北地区', sign: 'a6' },
                        { color: false, item: '西南地区', sign: 'a7' },
                        { color: false, item: '东北地区', sign: 'a1' }
                    ]
                ]
            }
        ]
    },
    // 更多
    more: function (e) {
        let id = e.target.dataset.id;
        let list = this.data.listval;
        let item1;
        let item2;
        let item3 = id.substr(-1);
        if (id.length < 5) {
            item1 = id.substr(0, 1);
            item2 = id.substring(1, id.length - 1);
        } else {
            item1 = id.substr(0, 2);
            item2 = id.substring(2, id.length - 1);
        }
        let length = list[item1].wrap.length;
        let len;
        for (let i = 0; i < length; i++) {
            len = list[item1].wrap[i].length;
            for (let j = 0; j < len; j++) {
                if (i == item2 && j == item3) {
                    list[item1].wrap[i][j].color = true;
                } else {
                    list[item1].wrap[i][j].color = false;
                }
            };
        };
        this.setData({
            listval: list
        })
    },
    // 更多的确定
    confirm: function () {
        let list = this.data.listval;
        let str = "";
        let items = this.data.priceitems;
        items.forEach(function (val, index) {
            if (val.color && val.sign != "") {
                str = val.sign + "-";
            }
        });
        list.forEach(function (val1, index1) {
            val1.wrap.forEach(function (val2, index2) {
                val2.forEach(function (val3, index3) {
                    if (val3.color == true && !(index2 == 0 && index3 == 0)) {
                        str += val3.sign + "-";
                    }
                })
            })
        });
        this.setData({
            urldatas: str,
            classifyblk3: true,
            issearch: false
        })
        if (this.data.queryval == "") {
            this.shopitem(false);
        } else {
            this.maoSearch();
        }
    },
    // 更多的重置
    reset: function () {
        let list = this.data.listval;
        let items = this.data.priceitems;
        let str = "";
        items.forEach(function (val, index) {
            if (val.color && val.sign != "") {
                str = val.sign + "-";
            }
        });
        list.forEach(function (val1, index1) {
            val1.wrap.forEach(function (val2, index2) {
                val2.forEach(function (val3, index3) {
                    if (index2 == 0 && index3 == 0) {
                        val3.color = true;
                    } else {
                        val3.color = false;
                    }
                })
            })
        });
        this.setData({
            urldatas: str,
            listval: list,
            classifyblk3: true,
            issearch: false
        })
        this.shopitem(false);
    },
    // 价格  排序  更多
    classifytap: function (e) {
        let num = e.currentTarget.dataset.item;
        if (num == 1) {
            this.setData({
                classifyblk1: !this.data.classifyblk1,
                classifyblk2: true,
                classifyblk3: true
            })
        } else if (num == 2) {
            this.setData({
                classifyblk1: true,
                classifyblk2: !this.data.classifyblk2,
                classifyblk3: true
            })
        } else {
            this.setData({
                classifyblk1: true,
                classifyblk2: true,
                classifyblk3: !this.data.classifyblk3
            })
        }
    },
    // 价格
    priceitemstap: function (e) {
        let sign = e.target.dataset.sign;
        let items = this.data.priceitems;
        let len = this.data.urldatas.length;
        items.forEach(function (val, index) {
            if (val.sign == sign || index == 0) {
                val.color = true;
            } else {
                val.color = false;
            }
        });
        if (sign == "") {
            sign = "";
        } else if (len == 0) {
            sign = `${sign}-`;
        } else {
            let str = "";
            let list = this.data.listval;
            list.forEach(function (val1, index1) {
                val1.wrap.forEach(function (val2, index2) {
                    val2.forEach(function (val3, index3) {
                        if (val3.color == true && !(index2 == 0 && index3 == 0)) {
                            str += val3.sign + "-";
                        }
                    })
                })
            });
            sign = `${sign}-${str}`;
        }
        this.setData({
            urldatas: sign,
            classifyblk1: true,
            priceitems: items,
            issearch: false
        })
        if (this.data.queryval == "") {
            this.shopitem(false);
        } else {
            this.maoSearch();
        }

    },
    // 主内容
    shopitem: function (flag) {
        // 选择条件时展示前10条
        if (!flag) {
            this.data.pagenum = 1;
        }
        let _this = this;
        wx.request({
            url: `http://192.168.1.158:8080/tmShopList`,
            data: {
                tmallparam: this.data.urldatas,
                pageNum: this.data.pagenum,
                keyword: this.data.queryval
            },
            header: {
                'Content-Type': 'application/json'
            },
            success: function (res) {
                let datas;
                // 是否关键字查询  区分后台返回数据的格式
                if (_this.data.queryval.length > 0) {
                    datas = JSON.parse(res.data);
                } else {
                    datas = JSON.parse(res.data).tmlist;
                }
                _this.setData({
                    shopitems: flag == true ? _this.data.shopitems.concat(datas) : datas
                });
            },
            error: function (err) {
                console.log(err);
            }
        })
    },
    // 关键字查询
    maoSearch: function () {
        if (!this.data.issearch) {
            this.data.pagenum = 1;
        } else {
            ++this.data.pagenum;
        }
        let val = this.data.queryval;
        if (val == "") {
            wx.showModal({
                title: '温馨提示',
                content: '请输入条件在点击查询',
            })
            return;
        }
        let _this = this;
        wx.request({
            url: `http://192.168.1.158:8080/tmShopList`,
            data: {
                tmallparam: this.data.urldatas,
                pageNum: this.data.pagenum,
                keyword: this.data.queryval
            },
            header: {
                'Content-Type': 'application/json'
            },
            success: function (res) {
                let datas;
                // 是否关键字查询  区分后台返回数据的格式
                if (_this.data.queryval.length > 0) {
                    datas = JSON.parse(res.data);
                } else {
                    datas = JSON.parse(res.data).tmlist;
                }
                _this.setData({
                    shopitems: _this.data.issearch == true ? _this.data.shopitems.concat(datas) : datas,
                    classifyblk1: true,
                    classifyblk2: true,
                    classifyblk3: true,
                    issearch: true
                })
            },
            fail: function (err) {
                console.log(err);
            }
        })
    },
    // 关键字查询的重置
    maorReset: function () {
        this.setData({
            queryval: "",
            issearch: false
        })
        this.shopitem(false);
    },
    // 查询的值
    searchval: function (e) {
        let val = e.detail.value;
        this.setData({
            queryval: val,
            issearch: false
        })
        if (val == "") {
            this.shopitem(false);
        }
    },
    // 主内容的点击事件
    shoptap: function (e) {
        let val = e.currentTarget.dataset.id;
        console.log(val);
       wx.navigateTo({
         url: `../tm_detail/tm_detail?id=${val}`,
       })
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
        this.shopitem(false);
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
        if (this.data.issearch) {
            this.maoSearch();
        } else {
            ++this.data.pagenum;
            this.shopitem(true);
        }

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
})