// Component({
//   pageLifetimes: {
//     show() {
//       this.getTabBar().setData({
//         active: 1
//       });
//     }
//   },
//   data: {
//   },
// })
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    wx.request({
      url: app.globalData.http + '/article/',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        list: 3
      },
      success(res) {
        if (res.data == Array) {
          that.setData({
            list: res.data
          })
        }
      },
      fail(e) {
        console.log('get list1 fail')
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
    this.getTabBar().setData({
      active: 1
    })
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
  toMenu(e) {
    wx.navigateTo({
      url: '/pages/guidance/menu/menu?selector=' + e.currentTarget.dataset.index,
    })
  }
})