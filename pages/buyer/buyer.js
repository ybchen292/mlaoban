Page({
    /**
     * 页面的初始数据
     */
    data: {
        buyer: [{
                center: "网店购买流程",
                text: "第一步：在网站首页“全部网店”处，选择您所需购买的网店类型，点击进入。第二部：例如淘宝店铺，点击进入后在筛选功能区中设定筛选条件。第三步：根据您的筛选条件，符合您要求的店铺就会出现在店铺列表里，在列表中选择您中意的淘宝店铺，进入网店详情页面.第四步：了解详细店铺信息后，可以直接点击“立即购买”或“立即预定”；也可以先登录您的QQ点击“客服顾问”，协助您操作等等。第五步：点击“立即预定”或“立即购买”后；进入订单支付页面，首先选择付款方式“全额付款”或“支付定金”，接下来输入您的“支付密码”和“验证码”，最后点击“确认付款”。第六步：付款成功后，在“订单管理”可以查询订单信息，如果您还没有客服顾问为您服务，您可以主动通过QQ联系我们客服，也可以确保会员帐号绑定QQ在线、电话畅通，我们客服会主动和您取得联系，联系店主，协助您提供照片，交接店铺等下一步操作。第七步：在三方完成合同签署盖章且各持一份合同，店铺交接完成后，交易即完成。"
            },
            {
                center: "服务说明",
                text: "为了向我们的用户提供安全优质的服务，在交易完成后，猫老板将收取买卖双方各交易额的10%作为服务费。我们所收的费用将用于向用户提供最安全的虚拟交易环境，保证7×24小时的专业客户服务，让用户在这里享受到更愉快的交易体验，安全、高效、专业、贴心的服务质量。同时，如果部分收费标准有变动，我们将在首页公告，请您关注！"
            },
            {
                center: "店铺买来被盗怎么办",
                text: "猫老板出售的店铺都有经过严格审核，当用户看好某一个店铺，猫老板会对该店铺进行再次审核，交易方在确定交易时须签订一份合同，合同对交易方权利和义务有着明文规定，如有用户担心的安全问题，可以提出来，交易双方协商一致则可以加入合同，合同签订完成则产生法律效力，交易完成后若发生纠纷，则按合同处理，在得到店铺之后请对电脑做好杀毒与防护并对店铺帐号进行手机绑定与数据证书绑定。帐号只要做到这几点就不会被盗，就算被盗，也是可以很简单的找回来！有必要我们会联系卖家协助！"
            },
            {
                center: "店铺不满意可以退款吗",
                text: "亲，如果您在我们网站购买网店并付款后，如果给您的网店的实际信息与我们客服给您的描述不相符，您可以向客服申请退款，我们将全额退还。如果您在我们网站购买网店并支付定金后，如果给您的网店的实际信息与我们客服给您的描述相符，由于您自己不想购买了，我们将扣除您的定金做为违约金；如果您在我们网站购买网店并支付全款后，如果给您的网店的实际信息与我们客服给您的描述相符，由于您自己不想购买了，我们将扣除您店铺售价的30%作为违约金。如果您付款后由于卖家原因导致店铺不能正常交易，我们将全额退款给您。"
            },
            {
                center: "店铺出售流程",
                text: "第一步：点击首页上的“我要出售网店”按钮，进入网店类型选择页面。第二步：选择您要出售的网店类型，点击“发布并注册”。第三步：完成店铺信息、帐号注册信息填写点击“确定发布并注册”。第四步：店铺信息发布成功后可在会员中心-网店管理 - 审核中的网店里看到，店铺目前处于“审核中”状态。第五步：店铺发布后我们审核客服会尽快通过您会员绑定帐号QQ、电话等方式联系您核实店铺信息，确认店铺信息符合挂售标准，上架后在我是卖家-我出售的店铺中店铺状态显示为“在售”，这时店铺已经对外销售了。第六步：如果有买家预定了您的网店，在我是卖家-我出售的店铺中店铺信息状态显示为“已付款”，这时客服会主动联系您协助完成交易。第七步：当服务顾问联系您与买家交接网店（提供有效证件扫描件，签订合同）后，交易即可完成。"
            },
            {
                center: "卖家非法操作店铺会牵连到我吗",
                text: "尊敬的用户：您好，您在出售网店的过程中，我们就签署了一份转让合同，合同证实了您的网店转让给了买家，也详细的说明了如果买家违约的相关处理办法，合同是我们猫老板委托常年法律顾问拟定的！您的网店在签订合同并正式转让之后就已经说明这个网店已经不再属于您本人，所以网店就算做违法的事情也不会在跟您有任何牵连。"
            },
            {
                center: "售后怎么才能收到出售款",
                text: "当有买家购买您的网店后，先得完成三方签订合同和网店资料交接（签订和快递合同大概时间在6-10天），且在买家确认网店资料无误后，你就可以在猫老板平台上绑定您的银行卡号，然后申请提现即可。"
            },
            {
                center: "合同的法律效力",
                text: "尊敬的用户您好！首先您要知道，网店是您的网络虚拟财产，是您辛苦做起来的，淘宝是无权收回，也无权禁止卖家转让！淘宝只是一个第三方平台，国家不会因为一个企业而制定不允许网店转让的法规，淘宝没权干涉这种网店转让行为，而且在猫老板转让每一个网店都是需要签署合同的！合同由我们猫老板第三方公司委托公司的法律顾问制作，合同中会把三方的责任义务都声明的非常清楚，不会有任何漏洞出现，只要条款不违反法律法规都是有效的.我们举例说明：我们把淘宝比如是现实的房屋开发商，您是房屋拥有者，我们猫老板就好比现实的房屋中介，那么您非常清楚，您是可以通过房屋中介卖掉您的房屋的，卖掉过后肯定会签署一份合同的，那么这份合同就100% 有法律效应的！"
            },
            {
                center: "合同流程",
                text: "1、猫老板平台所属公司发合同电子文档给卖方2、卖方收到后，打印签字，然后用数码相机或高像素手机拍摄上身照、手持合同照、手持身份证照，图片形式QQ或邮件传给合同客服，然后提供一份卖家身份证扫描件正反面QQ或邮件传给给本公司合同客服！然后将合同以快递的方式传给买家3、买家收到合同后，买家签字确认之后再使用数码相机或高像素手机拍摄上身照、手持合同照、手持身份证照。图片形式QQ或邮件传给合同客服 然后提供一份买家身份证扫描件正反面QQ或邮箱方式给本公司合同客服！然后将合同以快递的方式给本公司4、当本公司审核后，通过快递给甲 和 乙各自一份合同。"
            },
            {
                center: "担保交易",
                text: "担保交易是指卖家只需在猫老板网站上发布担保出售信息，无须填写淘宝帐号密码等资料，交易时由猫老板客服通知卖家登录淘宝，与买家交易的一种全新安全模式。买家付款之后，费用暂时由本平台保管而并没有直接打给卖家，当买家确认店铺无误后，卖家才会收到相关款项，如果拿到的店铺因卖家原因导致店铺不能正常使用或者与猫老板网站展示严重不符时，可以退款。就像支付宝一样，买家买卖家的货物，钱是在支付宝的，然后买家收到卖家的货物，支付宝再把钱给卖家！"
            },
            {
                center: "证件照片隐私保护",
                text: "凡在猫老板出售网店必须提供以下证件照片：（1）注册人本人出售：店铺注册人身份证正面，身份证反面，半身，手持身份证，手持合同照片，有必要时还需要提供户口页照片；（2）非注册人本人出售：店铺注册人身份证正面，身份证反面，半身，手持身份证和卖家身份证正面，身份证反面，半身，手持身份证，手持合同照片凡在猫老板购买网店必须提供以下证件照片：店铺注册人身份证正面、身份证反面、本人半身、本人持身份证、本人持合同、手持人民币等照片提供证件照片的用意是：其一、预防后期的纠纷发生，如果发生纠纷我们会把双方的证件照片提供给相关部门。其二、当买家忘记密码找回的时候，如果淘宝需要证件照片验证，那么我们会把卖家的证件照片提供给买家！当双方提供了这些证件照片后，我们猫老板有义务帮其妥善保管，并不得将其随意泄露！如果买家购买了网店后，我们是不会立即提供卖家的证件照片给买家，因为我们必须对双方负责，如果我们把证件照片马上提供给买家，那么买家拿去做其他的事，那么肯定是有我们的责任的，相同的道理如果我们把买家的证件照片也随意的提供给别人，那么对于双方的隐私权益得不到保障的！所以如果买家需要卖家的证件照片，那么必须提供淘宝需要身份验证的证据截图！我们才会提供！请理解公司的规定，这样也是为了预防不必要的纠纷发生！"
            },
            {
                center: "账号注册",
                text: "第一步：打开猫老板首页，点击免费注册。第二步：进入注册页面后，填写注册信息，正确填写登录密码、密码提示问题及答案、常用邮箱地址后点击点击同意注册即可成功注册。"
            },
            {
                center: "怎么绑定银行卡",
                text: "第一步：登陆后打开猫老板首页，点击会员中心。第二步：进入会员中心后点击菜单栏中的银行卡绑定。第三步：按照对应信息输入开户银行、开户地区、银行卡号、开户名，最后输入绑定手机号码点击免费获取验证码。第四步：当手机收到猫老板发来的验证码短信后，输入验证码点击保存设置即可完成。"
            },
            {
                center: "怎么认证手机",
                text: "第一步：点击首页上“我的猫老板“，进入会员中心。第二步：进入会员中心，首先点击菜单栏下方安全设置。第三步：进入页面，点击重新绑定“查看”按钮，输入您需要绑定的手机号码，输入手机验证码，即可完成手机重新认证。提交完成后会出现提示操作成功，手机认证完成。"
            },
            {
                center: "入驻需要多久",
                text: "提交入驻资料成功后15-20个工作日内下店，提交的类目不同时间上会有些许差异。成功提交后服务顾问会持续跟进将入驻情况每日转达给您。"
            }
        ],
        showbuyer: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let val = options.id;
        this.setData({
            showbuyer: this.data.buyer[val]
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

    }
})