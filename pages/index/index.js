Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: [
      "1、关于人生观，我的内心其实是：",
      "2、如果爬山旅游，在下山回来的路线选择上，我更在乎：",
      "3、通常在表达一件事情上，我更看重：",
      "4、在生命的大多数时候，我的内心其实更加欣喜于和希望多些：",
      "5、我认为自己在情感上的基本特点是：",
      "6、我认为自己在整个人生中，除了工作以外，在控制欲上面，我：",
      "7、当与情人交往时，我倾向于着重：",
      "8、在人际交往时，我：",
      "9、我认为自己大多数时候更是：",
      "10、通常我完成任务的方式是：",
      "11、如果有人深深惹恼我时，我：",
      "12、在人际关系中，我最在意的是：",
      "13、在工作上，我表现出来更多的是：",
      "14、我过往的老师最有可能对我的评价是：",
      "15、朋友对我的评价最有可能的是："
    ],
    item: {
      A1: [
        "A 希望能够有尽量多的人生体验，所以会有非常多样化的想法。",
        "A 好玩有趣，所以宁愿新路线回巢。",
        "A 说话给对方感受到的强烈印象。",
        "A 刺激。",
        "A 情绪多变，经常情绪波动。",
        "A 没有控制欲，只有感染带动他人的欲望，但自控能力不算强。",
        "A 兴趣上的相容性，一起做喜欢的事情，对他的爱意溢于言表。",
        "A 心态开放，可以快速建立起友谊和人际关系。",
        "A 感情丰富的人。",
        "A 经常会赶在最后期限前完成。",
        "A 内心感到受伤，认为没有原谅的可能，可最终很多时候还是会原谅对方。",
        "A 得到他人的赞美和欢迎。",
        "A 充满热忱，有很多想法且很有灵性。",
        "A 情绪起伏大，善于表达和抒发情感。",
        "A 喜欢对朋友述说事情，也有能量说服别人去做事。"
      ],
      B1: [
        "B 在小心合理的基础上，谨慎地确定自己的目标，一旦确定会坚定不移地去做。",
        "B 安全稳妥，所以宁愿原路线返回。",
        "B 说话表述的准确程度。",
        "B 安全。",
        "B 外表上自我抑制能力强，但内心感情起伏极大，一旦挫伤难以平复。",
        "B 用规则来保持我对自己的控制和对他人的要求。",
        "B 思想上的相容性，体贴入微，对他的需求很敏感。",
        "B 非常审慎缓慢地进入，一旦认为是朋友，便长久地维持。",
        "B 思路清晰的人。",
        "B 自己做，精确地做，不要麻烦别人。",
        "B 深深感到愤怒，如此之深怎可忘记？我会牢记，同时未来完全避开那个家伙。",
        "B 得到他人的理解和欣赏。",
        "B 心思细腻，完美精确，而且为人可靠。",
        "B 严格保护自己的私密，有时会显得孤独或是不合群。",
        "B 能够提出很多周全的问题，而且需要许多精细的解说。"
      ],
      C1: [
        "C 更加注重的是取得一切有可能的成就。",
        "C 挑战困难，所以宁愿新路线回巢。",
        "C 说话所能达到的最终目标。",
        "C 挑战。",
        "C 感情不拖泥带水，较为直接，只是一旦不稳定，容易激动和发怒。",
        "C 内心是有控制欲和希望别人服从我的。",
        "C 智慧上的相容性，沟通重要的想法，客观地讨论辩论事情。",
        "C 希望在人际关系中占据主导地位。",
        "C 办事麻利的人。",
        "C 先做，快速做。",
        "C 会火冒三丈，并且内心期望有机会狠狠地回应打击。",
        "C 得到他人的感激和尊敬。",
        "C 坚强而直截了当，而且有推动力。",
        "C 动作敏捷又独立，并且喜欢自己做事情。",
        "C 愿意直言表达想法，有时会直率而犀利地谈论不喜欢的人、事、物。"
      ],
      D1: [
        "D 宁愿剔除风险而享受平静或现状。",
        "D 方便省心，所以宁愿原路线返一回。",
        "D 说话后周围的人际感受是否舒服。",
        "D 稳定。",
        "D 天性情绪四平八稳。",
        "D 不会有任何兴趣去影响别人，也不愿意别人来管控我。",
        "D 和谐上的相容性，包容理解另一半的不同观点。",
        "D 顺其自然，不温不火，相对被动。",
        "D 心态平静的人。",
        "D 使用传统的方法，需要时从他人处得到帮忙。",
        "D 我会避免摊牌，因为那还不到那个地步，那个人多行不义必自毙，或者自己再去找新朋友。",
        "D 得到他人的尊重和接纳。",
        "D 有耐心，适应性强而且善于协调。",
        "D 看起来安稳轻松，反应度偏低，比较温和。",
        "D 通常与他人一起是多听少说。"
      ]
    },
    num: 0,
    showChoices: true,
    value: "",
    Anum: 0,
    Bnum: 0,
    Cnum: 0,
    Dnum: 0
  },
  next() {

    if (this.data.value == "") {
      console.log(this.data.item.A1[0]);
      wx.showToast({
        title: '请选择一项', //弹框内容
        icon: 'error',  //弹框模式
        duration: 1000    //弹框显示时间
      })
      return;
    } else {
      switch (this.data.value) {
        case "A":
          this.data.Anum++;
          break;
        case "B":
          this.data.Bnum++;
          break;
        case "C":
          this.data.Cnum++;
          break;
        case "D":
          this.data.Dnum++;
          break;
        default:
      }
      this.changeNum()
      this.changeValue()
      if(this.data.num===15){
        this.data.showChoices=false
        this.toResult()
      }
    }
  },
  changeValue(){
    this.setData({
      value:''
    })
  },
  changeNum(){
    let n=this.data.num
    this.setData({num:n+1})
  },

  radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    this.data.value = e.detail.value
  },
  toResult() {
    var a=this.data.Anum
    var b=this.data.Bnum
    var c=this.data.Cnum
    var d=this.data.Dnum
    wx.navigateTo({
      url: '/pages/result/result?detail='+a+'-'+b+'-'+c+'-'+d,
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