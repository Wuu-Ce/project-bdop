const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    containerH: app.globalData.systemInfo.windowHeight - app.globalData.CustomBar,
    menu: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const from = options.from
    const index = parseInt(options.index)
    const prePage = getCurrentPages()[getCurrentPages().length-2]
    if(from == 'course')
    {
        this.setData({
          menu: prePage.data.course[index]
        })
    }else if(from == 'test')
    {
      this.setData({
        menu: prePage.data.test[index]
      })
    } else if(from == 'guidance')
    {
      this.setData({
        menu: prePage.data.list[index]
      })
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
  toNextPage(e) {
    const index = e.currentTarget.dataset.index
    if(this.data.menu.projects[index].type == 'text'){
          wx.navigateTo({
      url: '/pages/text/coursepage?index=' + index,
    })
    }else if(this.data.menu.projects[index].type == 'video')
    wx.navigateTo({
      url: '/pages/player/player?index=' + index,
    })
  }
})