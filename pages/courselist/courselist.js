// const {
//   SuchThat
// } = require("../../../towxml/parse/parse2/entities/maps/entities");

import Notify from '../../miniprogram_npm/@vant/weapp/notify/notify';

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    course: {},
    test: {},
    list: [{
        title: "课程",
        items: [],
      },
      {
        title: '练习',
        items: {},
      }
    ],
    tabActive: 0,
    tabContainer: null,
    tabContainerHeight: null,
    tabOffsetTop: null,
    touchS: [0, 0],
    touchE: [0, 0]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    this.setData({
      tabOffsetTop: app.globalData.CustomBar,
      tabContainerHeight: app.globalData.screenHeight - app.globalData.CustomBar - 100,
      tabContainer: () => wx.createSelectorQuery().select('#container'),
    });
    // List1 模块一列表
    wx.request({
      url: app.globalData.http + '/article/',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        list: 1
      },
      success(res) {
        if ( typeof res.data == 'object') {
          that.setData({
            course: res.data
          })
          that.setData({
            list: [{
                title: "课程",
                items: that.data.course,
              },
              {
                title: '练习',
                items: that.data.test,
              }
            ],
          })
        }
      },
      fail(e) {
        Notify({
          type: 'danger',
          message: '无法链接到服务器'
        })
      }
    })

    // List2 模块二列表
    wx.request({
      url: app.globalData.http + '/article/',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        list: 2
      },
      success(res) {
        if (typeof res.data == 'object') {
          that.setData({
            test: res.data
          })
          that.setData({
            list: [{
                title: "课程",
                items: that.data.course,
              },
              {
                title: '练习',
                items: that.data.test,
              }
            ],
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
  toMenu(e) {
    const active = this.data.tabActive 
    let from = active?'test':'course'
    const index = e.currentTarget.dataset.index
    wx.navigateTo({
      url: '/pages/menu/menu?from=' + from + '&index=' + index
    })
  },
  onTabSroll(e) {

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

  },
  touchStart: function (e) {
    // console.log(e.touches[0].pageX)
    let sx = e.touches[0].pageX
    let sy = e.touches[0].pageY
    this.data.touchS = [sx, sy]
  },
  touchMove: function (e) {
    let sx = e.touches[0].pageX;
    let sy = e.touches[0].pageY;
    this.data.touchE = [sx, sy]
  },
  touchEnd: function (e) {
    const X = this.data.touchE[0] - this.data.touchS[0]
    let deltaY = this.data.touchE[1] - this.data.touchS[1]
    deltaY = deltaY < 0 ? -deltaY : deltaY
    if (X > 50 && deltaY < 100 && this.data.tabActive > 0) {
      // 右滑
      this.setData({
        tabActive: this.data.tabActive - 1
      })
    } else if (X < -50 && deltaY < 100 && this.data.tabActive < this.data.list.length) {
      // 左滑
      this.setData({
        tabActive: this.data.tabActive + 1
      })
    }
  }
})