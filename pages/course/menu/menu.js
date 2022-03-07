// pages/course/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    course:{
      name: '妊娠旅程',
      introduction: '妊娠旅程的简介内容。',
      articles:[
        {
          title: "生命起源及胎儿生长发育",
          url: 'https://pregnancy.yuxue0824.com/1.1.1.md'
        },
        {
          title: "孕期常见症状及处理",
          url: 'https://pregnancy.yuxue0824.com/1.1.2.md'
        },
        {
          title: "孕期常见异常症状的识别及处理",
          url: 'https://pregnancy.yuxue0824.com/1.1.2.md'
        },
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    const index0 = parseInt(options.index0)
    const index1 = parseInt(options.index1)
    console.log(getCurrentPages()[getCurrentPages().length-2].data.list[index0].items[index1])
    this.setData({
      course: getCurrentPages()[getCurrentPages().length-2].data.list[index0].items[index1]
    })
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

  },
  toCoursePage(event) {
    const index = event.currentTarget.dataset.index
    wx.navigateTo({
      url: '/pages/course/coursepage/coursepage?selector='+index,
    })
  }
})