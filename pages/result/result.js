// pages/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: [
      { title: '红色', value: 0, show: false ,color:'#FFC0CB'},
      { title: '蓝色', value: 0, show: false ,color:'#87CEFA'},
      { title: '黄色', value: 0, show: false ,color:'#FFD700'},
      { title: '绿色', value: 0, show: false ,color:'#3CB371'}
    ],
    canvasInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var str = options.detail;
    var detail = str.split("-");
    this.setData({
      'result[0].value': Number(detail[0]),
      'result[1].value': Number(detail[1]),
      'result[2].value': Number(detail[2]),
      'result[3].value': Number(detail[3]),
    })
    var resValue = [this.data.result[0].value,this.data.result[1].value,this.data.result[2].value,this.data.result[3].value]
    var maxIndex = resValue.indexOf(Math.max.apply(Math,resValue))
    this.data.result[maxIndex].show = true
    var newRes = this.data.result
    this.setData({
      'result': newRes
    })
  },

  measureCanvas() {
    var that = this
    wx.createSelectorQuery().in(this).select('#columnarCanvas').fields({
      node: true,
      size: true
    }).exec((res) => {
      console.log(res)
      var canvasInfo = {}
      canvasInfo.width = res[0].width
      canvasInfo.height = res[0].height
      canvasInfo.node = res[0].node
      that.setData({
        canvasInfo: canvasInfo
      })
      that.drawColumnar()
    })
  },
  drawColumnar() {
    var dataList = this.data.result
    var canvasInfo = this.data.canvasInfo
    const columnarCanvas = canvasInfo.node
    const ctxColumnar = columnarCanvas.getContext('2d')
    var columnarNum = dataList.length
    var columnarWidth = (canvasInfo.width - 30) / (2 * columnarNum + 1)
    var maxColumnarHeight = canvasInfo.height - 60 - 20
    var maxColumnarValue = 0
    var totalValue = 0
    for (var i = 0; i < dataList.length; i++) {
      if (dataList[i].value > maxColumnarValue) {
        maxColumnarValue = dataList[i].value
      }
      totalValue = totalValue + dataList[i].value
    }
    for (var i = 0; i < dataList.length; i++) {
      ctxColumnar.font = 15
      var percent = parseInt(dataList[i].value * 100 / totalValue) + "%"
      var dx = columnarWidth * (2 * i + 1)
      var dy = canvasInfo.height - (maxColumnarHeight * (dataList[i].value / maxColumnarValue) + 60) + 10
      ctxColumnar.fillStyle=dataList[i].color
      var percentWidth = ctxColumnar.measureText(percent)
      ctxColumnar.fillText(percent, dx + columnarWidth / 2 - percentWidth.width / 2, dy)
      var valueWidth = ctxColumnar.measureText(dataList[i].value + "")
      ctxColumnar.fillText(dataList[i].value + "", dx + columnarWidth / 2 - valueWidth.width / 2, dy + 20)
      ctxColumnar.fillRect(dx, dy + 22, columnarWidth, maxColumnarHeight * (dataList[i].value / maxColumnarValue))
    }
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
    this.measureCanvas()

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