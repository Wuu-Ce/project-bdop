// pages/plan/questionMenu/questionMenu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    qList: [ ],
    
    questionnaire1: { // 一个问卷
      name: 'EPDS', // 问卷名
      qid: '1001',   // 问卷id
      questions: [
        {
          type: 'select', // 问题类型
          name: '1.我开心，也能看到事物有趣的一面',   // 问题标题
          options: [  // 选型
            {value: 'A',name: '和以前一样'},
            {value: 'B',name: '没有以前那么多'},
            {value: 'C',name: '肯定比以前少'},
            {value: 'D',name: '完全不能'},
          ],
          answer: '', // 表示选择第几项
          fined:false // 是否完成
        },
        {
          type: 'select', // 问题类型
          name: '2.我对未来保持乐观的态度。',   // 问题标题
          options: [  // 选型
            {value: 'A',name: '和以前一样'},
            {value: 'B',name: '没有以前那么多'},
            {value: 'C',name: '肯定比以前少'},
            {value: 'D',name: '完全不能'},
          ],
          answer: '', // 表示选择第几项
          fined:false // 是否可选
        },
        {
          type: 'select', // 问题类型
          name: '3.当事情出错时，我毫无必要地责备自己。',   // 问题标题
          options: [  // 选型
            {value: 'A',name: '没有这样'},
            {value: 'B',name: '不经常这样'},
            {value: 'C',name: '有时会这样'},
            { value: 'D',name: '大部分时候会这样'},
          ],
          answer: '', // 表示选择第几项
          fined:false // 是否可选
        },
        {
          type: 'select', // 问题类型
          name: '4.我无缘无故地焦虑或担心。',   // 问题标题
          options: [  // 选型
            {value: 'A',name: '一点也没有'},
            {value: 'B',name: '极少这样 '},
            {value: 'C',name: '有时会这样'},
            { value: 'D',name: '经常这样'},
          ],
          answer: '', // 表示选择第几项
          fined:false // 是否可选
        },
        {
          type: 'select', // 问题类型
          name: '5.我无缘无故地感到害怕或惊慌。',   // 问题标题
          options: [  // 选型
            {value: 'A',name: '一点也没有'},
            {value: 'B',name: '不经常这样 '},
            {value: 'C',name: '有时会这样'},
            { value: 'D',name: '相当多时候这样'},
          ],
          answer: '', // 表示选择第几项
          fined:false // 是否可选
        },
        {
          type: 'select', // 问题类型
          name: '6.事情发展到我无法应付的地步。',   // 问题标题
          options: [  // 选型
            {value: 'A',name: '我一直像平时那样应付得好 '},
            {value: 'B',name: '大部分时候我都能像平时那样应付得好'},
            {value: 'C',name: '有时候我不能像平时那样应付得好'},
            {value: 'D',name: '大多数时候我都不能应付'},
          ],
          answer: '', // 表示选择第几项
          fined:false // 是否可选
        },
        {
          type: 'select', // 问题类型
          name: '7.我因心情不好而影响睡觉。',   // 问题标题
          options: [  // 选型
            {value: 'A',name: '一点也没有'},
            {value: 'B',name: '不经常这样 '},
            {value: 'C',name: '有时候这样'},
            { value: 'D',name: '大部分时间这样'},
          ],
          answer: '', // 表示选择第几项
          fined:false // 是否可选
        },
        {
          type: 'select', // 问题类型
          name: '8.我感到难过和悲伤。',   // 问题标题
          options: [  // 选型
            {value: 'A',name: '一点也没有'},
            {value: 'B',name: '不经常这样 '},
            {value: 'C',name: '相当时候这样'},
            { value: 'D',name: '大部分时间这样'},
          ],
          answer: '', // 表示选择第几项
          fined:false // 是否可选
        },
        {
          type: 'select', // 问题类型
          name: '9.我因心情不好而哭泣。',   // 问题标题
          options: [  // 选型
            {value: 'A',name: '一点也没有'},
            {value: 'B',name: '不经常这样 '},
            {value: 'C',name: '有时候这样'},
            { value: 'D',name: '大部分时间这样'},
          ],
          answer: '', // 表示选择第几项
          fined:false // 是否可选
        },
        {
          type: 'select', // 问题类型
          name: '10.我有伤害自己的想法。',   // 问题标题
          options: [  // 选型
            {value: 'A',name: '没有这样'},
            {value: 'B',name: '很少这样'},
            {value: 'C',name: '有时候这样'},
            { value: 'D',name: '大部分时间这样'},
          ],
          answer: '', // 表示选择第几项
          fined:false // 是否可选
        },

      ]
    },
    
    // 问卷二
    questionnaire2: { // 一个问卷
      name: 'FOC—VAS', // 问卷名
      qid: '1002',   // 问卷id
      questions: [
        {
          type: 'extent',   // 程度选择 如平静——担忧
          name: '1.您对即将来临的分娩感到担忧的程度？',
          max: 10, min: 0,value: 0,// 程度控制
          options: [ '平静','担忧' ],
          answer: 0, //表示程度
          fined:false // 是否可选
        },
        {
          type: 'extent',   // 程度选择 如平静——担忧
          name: '2.您对即将来临的分娩感到恐惧的程度？',
          max: 10, min: 0,value: 0,// 程度控制
          options: [ '没有恐惧','强烈恐惧' ],
          answer: 0, //表示程度
          fined:false // 是否可选
        }
      ]
    },
    // 问卷三
    questionnaire3: { // 一个问卷
      name: 'RS-14', // 问卷名
      qid: '1003',   // 问卷id
      questions: [
        {
          type: 'extent',   // 程度选择 如平静——担忧
          name: '1.我经常能找到某种方式将问题解决。',
          max: 7, min: 0,value: 0,// 程度控制
          options: [ '完全不正确','完全正确' ],
          answer: 0, //表示程度
          fined:false // 是否可选
        },
        {
          type: 'extent',   // 程度选择 如平静——担忧
          name: '2.在我的生活中我为我所完成的事情感到骄傲。',
          max: 7, min: 0,value: 0,// 程度控制
          options: [ '完全不正确','完全正确' ],
          answer: 0, //表示程度
          fined:false // 是否可选
        },
        {
          type: 'extent',   // 程度选择 如平静——担忧
          name: '3.我通常能接受发生的事情而不受影响。',
          max: 7, min: 0,value: 0,// 程度控制
          options: [ '完全不正确','完全正确' ],
          answer: 0, //表示程度
          fined:false // 是否可选
        },
        {
          type: 'extent',   // 程度选择 如平静——担忧
          name: '4.我是自己的朋友(独处时也可以过得快乐)。',
          max: 7, min: 0,value: 0,// 程度控制
          options: [ '完全不正确','完全正确' ],
          answer: 0, //表示程度
          fined:false // 是否可选
        },
        {
          type: 'extent',   // 程度选择 如平静——担忧
          name: '5.我觉得我可以同時处理很多事情。',
          max: 7, min: 0,value: 0,// 程度控制
          options: [ '完全不正确','完全正确' ],
          answer: 0, //表示程度
          fined:false // 是否可选
        },
        {
          type: 'extent',   // 程度选择 如平静——担忧
          name: '6.我是个果决的人。',
          max: 7, min: 0,value: 0,// 程度控制
          options: [ '完全不正确','完全正确' ],
          answer: 0, //表示程度
          fined:false // 是否可选
        },
        {
          type: 'extent',   // 程度选择 如平静——担忧
          name: '7.因为我以前遭遇过困难，所以我能渡过后來的难关。',
          max: 7, min: 0,value: 0,// 程度控制
          options: [ '完全不正确','完全正确' ],
          answer: 0, //表示程度
          fined:false // 是否可选
        },
        {
          type: 'extent',   // 程度选择 如平静——担忧
          name: '8.我有自制力。',
          max: 7, min: 0,value: 0,// 程度控制
          options: [ '完全不正确','完全正确' ],
          answer: 0, //表示程度
          fined:false // 是否可选
        },
        {
          type: 'extent',   // 程度选择 如平静——担忧
          name: '9.我对事物保持兴趣。',
          max: 7, min: 0,value: 0,// 程度控制
          options: [ '完全不正确','完全正确' ],
          answer: 0, //表示程度
          fined:false // 是否可选
        },
        {
          type: 'extent',   // 程度选择 如平静——担忧
          name: '10.我经常可以发现好笑的事。',
          max: 7, min: 0,value: 0,// 程度控制
          options: [ '完全不正确','完全正确' ],
          answer: 0, //表示程度
          fined:false // 是否可选
        },
        {
          type: 'extent',   // 程度选择 如平静——担忧
          name: '11.我的自我信念〈相信自己的能力〉使我渡过难关。',
          max: 7, min: 0,value: 0,// 程度控制
          options: [ '完全不正确','完全正确' ],
          answer: 0, //表示程度
          fined:false // 是否可选
        },
        {
          type: 'extent',   // 程度选择 如平静——担忧
          name: '12.在危急时刻，我通常是别人可以依赖的对象。',
          max: 7, min: 0,value: 0,// 程度控制
          options: [ '完全不正确','完全正确' ],
          answer: 0, //表示程度
          fined:false // 是否可选
        },
        {
          type: 'extent',   // 程度选择 如平静——担忧
          name: '13.我的生活有意义。',
          max: 7, min: 0,value: 0,// 程度控制
          options: [ '完全不正确','完全正确' ],
          answer: 0, //表示程度
          fined:false // 是否可选
        },
        {
          type: 'extent',   // 程度选择 如平静——担忧
          name: '14.当我处于困境时，我通常自己可以找到出路。',
          max: 7, min: 0,value: 0,// 程度控制
          options: [ '完全不正确','完全正确' ],
          answer: 0, //表示程度
          fined:false // 是否可选
        },
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const q1 = this.data.questionnaire1
    const q2 = this.data.questionnaire2
    const q3 = this.data.questionnaire3
    this.setData({
      qList:[q1, q2, q3]
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

  /**
   * 跳转到问卷页面
   */
  toQuestionnairePage(res) {
    wx.navigateTo({
      url: '/pages/plan/questionnaire/questionnaire?qid='+ res.currentTarget.dataset.qid,
    })
  }
})