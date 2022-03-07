// pages/coursepage/coursepage.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    md: '',
    article: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const index = options.selector
    this.setData({
      article: getCurrentPages()[getCurrentPages().length-2].data.course.projects[index]
    })
    const that = this
    wx.request({
      url: this.data.article.url,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: (res) => {
        console.log(res)
        let result = app.towxml(res.data, 'markdown', {
          base: '', // 相对资源的base路径
          theme: 'light', // 主题，默认`light`
          events: { // 为元素绑定的事件方法
            // tap: (e) => {
            //   console.log('tap', e);
            // }
          }
        })
        that.setData({
          md: result
        })
      }
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

  }
})