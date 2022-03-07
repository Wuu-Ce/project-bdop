const { Idot } = require("../../../towxml/parse/parse2/entities/maps/entities")

// pages/guidance/player/player.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    media: {
      projects:[]
    },
    mediaUrl: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const index = options.selector
     let media1 = getCurrentPages()[getCurrentPages().length - 2].data.guidance.projects[index]
    if(media1.url == undefined)
    {
      this.setData({
        media: media1,
        mediaUrl: media1.musics[0].url
      })      
    }
    else{
      this.setData({
        media: media1,
        mediaUrl: media1.url
      }) 
    }
    console.log(this.data.media)
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
  Play(e) {
    const index = e.currentTarget.dataset.index
    const url = this.data.media.musics[index].url
    this.setData({
      mediaUrl: url
    })
  }
})