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

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        name: '呼吸技巧重建',
        introduction: '呼吸技巧重建的简介。',
        imgUrl: '/resource/img/sample.png',
        hits: 1,
        projects:[
          {
            title: '拉玛泽呼吸减痛法',
            url: ''
          },
          {
            title: '拉玛泽呼吸',
            url: ''
          }
        ]
      },
      {
        name: '音乐放松疗法',
        introduction: '音乐放松疗法的简介。',
        imgUrl: '/resource/img/sample.png',
        hits: 1,
        projects:[
          {
            title: '中国古典音乐',
            url: ''
          },
          {
            title: '世界经典名曲',
            url: ''
          }
        ]
      }
    ]
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