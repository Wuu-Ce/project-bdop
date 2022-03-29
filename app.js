// app.js
App({
  // 引入`towxml3.0`解析方法 
  towxml: require('./towxml/index'),
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

    if(typeof wx.getStorageSync('userInfo') == 'object')
    {
      this.globalData.userInfo = wx.getStorageSync('userInfo') 
    }
    else if(wx.getUserProfile)
    {
      this.getUserProfile()
    }
    

  },
  getUserProfile(e) {
    const that = this
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.showModal({
      title: '温馨提示',
      content: '授权微信登录后才能正常使用小程序功能',
      success(res) {
        //如果用户点击了确定按钮
        if (res.confirm) {
          wx.getUserProfile({
            desc: '获取你的昵称、头像、地区及性别',
            success: res => {
              that.globalData.userInfo = res.userInfo
              wx.setStorageSync('userInfo', res.userInfo)
            },
            fail: res => {
              //拒绝授权
              wx.showToast({
                title: '您拒绝了请求,不能正常使用小程序',
                icon: 'error',
                duration: 2000
              })
              return
            }
          })
        } else if (res.cancel) {
          //如果用户点击了取消按钮
          wx.showToast({
            title: '您拒绝了请求,不能正常使用小程序',
            icon: 'error',
            duration: 2000
          })
          return
        }
      }
    })
  },



  globalData: {
    http: 'https://pregnancy.yuxue0824.com',
    tabbarIndex: 0,
    userInfo: null
  }
})