// pages/courselist/courselist.js
// Component({
//   pageLifetimes: {
//     show() {
//       this.getTabBar().setData({
//         active: 0
//       });
//     }
//   },
//   data: {
//     cuList: [
//       {
//         title: '课程1',
//         imgUrl:  '/resource/img/sample.png',
//         hits: 112,
//       },
//       {
//         title: '课程2',
//         imgUrl:  '/resource/img/sample.png',
//         hits: 14,
//       },
//       {
//         title: '课程3',
//         imgUrl:  '/resource/img/sample.png',
//         hits: 1,
//       }
//     ],
//     tsList: [
//       {
//         title: '练习1',
//         imgUrl:  '/resource/img/sample.png',
//         hits: 0,
//       },
//       {
//         title: '练习2',
//         imgUrl:  '/resource/img/sample.png',
//         hits: 0,
//       }
//     ]
//   },
// })

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cuList: [{
        title: '妊娠旅程',
        imgUrl: '/resource/img/sample.png',
        hits: 112,
      },
      {
        title: '课程2',
        imgUrl: '/resource/img/sample.png',
        hits: 14,
      },
      {
        title: '课程3',
        imgUrl: '/resource/img/sample.png',
        hits: 1,
      }
    ],
    tsList: [{
        title: '练习1',
        imgUrl: '/resource/img/sample.png',
        hits: 0,
      },
      {
        title: '练习2',
        imgUrl: '/resource/img/sample.png',
        hits: 0,
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
  toMenu() {
    wx.navigateTo({
      url: '/pages/course/menu/menu',
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getTabBar().setData({
      active: 0
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

  }
})