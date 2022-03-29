const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    srcollHeight: 0

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const pages = getCurrentPages();
    const Page = pages[pages.length - 1];//当前页

    this.setData({
      srcollHeight: app.globalData.systemInfo.windowHeight - app.globalData.CustomBar,
      currentPage: Page
    })

    this.ricedit = this.selectComponent('#richedit')
    this.ricedit.update()
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
})