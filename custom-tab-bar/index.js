// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  /**
   * 组件的初始数据
   */
  data: {
    active: null,
    list: [{
        text: '首页',
        icon: 'wap-home',
        path: "/pages/course/courselist/courselist"
      },
      {
        text: '行为指导',
        icon: 'umbrella-circle',
        path: '/pages/guidance/guidancelist/guidancelist'
      },
      {
        text: '个人计划',
        icon: 'todo-list',
        path: '/pages/plan/index/index'
      }
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTabbarChange: function (event) {
      const index = event.detail
      wx.switchTab({
        url: this.data.list[index].path,
      })
      this.setData({
        active: index
      })
    }
  }
})