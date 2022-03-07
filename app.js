// app.js
App({
  // 引入`towxml3.0`解析方法 
  towxml : require('./towxml/index'),
  onLaunch() {

    wx.getSystemInfo({
      success: e => {
        this.globalData.systemInfo = e
        this.globalData.screenHeight = e.screenHeight
        this.globalData.StatusBar = e.statusBarHeight
        let capsule = wx.getMenuButtonBoundingClientRect()
        if (capsule) {
          this.globalData.Custom = capsule
          this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight
        } else {
          this.globalData.CustomBar = e.statusBarHeight + 50
        }
      }
    })
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
//  wx.login({
//       success (res) {
//         if (res.code) {
//           //发起登录网络请求
//           wx.request({
//             url:  that.globalData.http + '/login/',
//             data: {
//               code: res.code
//             },
//             success(res1) {
//               console.log(res1)
//               wx.setStorageSync('userID', res1.data.userID)
//               that.globalData.userInfo.userID = res1.data.userID
//             },
//             fail(e) {
//               wx.removeStorage({
//                 key: 'userID',
//               })
//               console.log('login fail')
//             }
//           })
//         } else {
//           console.log('登录失败！' + res.errMsg)
//         }
//       }
//     })
  },
  globalData: {
    http: 'https://pregnancy.yuxue0824.com',
    tabbarIndex: 0,
    userInfo: null
  }
})
