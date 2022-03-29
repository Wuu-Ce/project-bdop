// pages/plan/questionnaire/questionnaire.js
import {clone} from '../../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    DialogModal: false, //显示提交弹窗
    DialogModalT: '请确认提交问卷。', // 提交窗口内容
    DialogModal1: false, //显示再填弹窗
    formBtn: true, // 提交按钮是否可用

    Fined: false, //填写是否完成
    disable: false, // 问卷是否可填

    prevPage: {}, //上页面
    BtnH: 80, // 按钮容器高度
    unFinedList: '', // 未完成列表

    questionnaire: {} // 问卷

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this

    // 获取上级页面信息
    const pages = getCurrentPages();
    //   const Page = pages[pages.length - 1];//当前页
    const prevPage = pages[pages.length - 2]; //上一个页面
    that.setData({
      prevPage: prevPage
    })

    // 读取问卷内容
    const ques = this.data.questionnaire
    const storage = wx.getStorageSync(options.qid)

    if (typeof storage == 'object') {
      storage.name += '(已完成)'
      this.setData({
        questionnaire: storage,
        Fined: true,
        disable: true
      })
    } else {
      const qList = prevPage.data.qList //取上页data里的数据也可以修改
      qList.forEach(function (questionnaireT) {
        if (questionnaireT.qid === options.qid) {
          that.setData({
            questionnaire: clone(questionnaireT)
          })
        }
      })
    }

    // 修改按钮容器高度
    const query = wx.createSelectorQuery()
    query.select('#container').boundingClientRect()
    query.exec(function (res) {
      const conH = res[0].height
      const winH = wx.getSystemInfoSync().windowHeight
      if (conH < winH) {
        that.setData({
          BtnH: winH - conH
        })
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
   * 选择选项处理函数
   */
  radioChange(e) {
    const index = e.currentTarget.dataset.qindex
    const question = this.data.questionnaire.questions[index]
    question.fined = true
    for (let i = 0; i < question.options.length; ++i) {
      question.options[i].value === e.detail.value ? question.answer = e.detail.value : ''
    }


    this.setData({
      questionnaire: this.data.questionnaire
    })
  },
  // slider拖动过程中触发的事件
  sliderchanging(e) {
    const ind = e.currentTarget.dataset.qindex
    this.data.questionnaire.questions[ind].value = e.detail.value
    this.setData({
      questionnaire: this.data.questionnaire
    })
  },
  // slider完成一次拖动后触发的事件
  sliderchange(e) {
    const ind = e.currentTarget.dataset.qindex
    const question = this.data.questionnaire.questions[ind]
    question.value = e.detail.value
    question.answer = e.detail.value
    question.fined = true
    this.setData({
      questionnaire: this.data.questionnaire
    })
  },

  //展示模态框
  showModal(e) {
    if (e.currentTarget.dataset.id == 'btn1') {
      this.setData({
        DialogModal1: true
      })
    } else {
      // 检查题目是否完成
      const ques = this.data.questionnaire
      let ulist = ''
      ques.questions.forEach((que, ind) => {
        if (!que.fined) {
          ulist += (ind + 1).toString() + ' '
        }
      })
      if (ulist == '') {
        this.setData({
          unFinedList: ulist,
          DialogModalT: '请确认提交问卷。',
          DialogModal: true,
        })
      } else {
        this.setData({
          unFinedList: ulist,
          DialogModalT: '请先完成以下问题再尝试提交：' + ulist,
          DialogModal: true,
        })
      }
      this.setData({
        DialogModal: true
      })
    }

  },
  //取消提交
  ModalCancel(e) {
    console.log(e)
    if (e.currentTarget.dataset.id == 'modal1') {
      this.setData({
        DialogModal: false
      })
    } else {
      this.setData({
        DialogModal1: false
      })
    }
  },

  //确认提交
  ModalOK(e) {
    const that = this
    const ques = this.data.questionnaire
    if (e.currentTarget.dataset.id == 'modal1') {
      //全部完成则提交
      if (this.data.unFinedList == '') {
        this.setData({
          DialogModal: false,
          disable: true
        })
        wx.setStorageSync(ques.qid.toString(), ques)
      } else {
        // 否则无作为
        this.setData({
          DialogModal: false
        })
      }
    } else {
      // 再填还原问卷内容
      this.setData({
        DialogModal1: false,
        disable: false
      })
      wx.removeStorageSync(ques.qid.toString())
      const qList = this.data.prevPage.data.qList //取上页data里的数据也可以修改
      qList.forEach(function (questionnaireT) {
        if (questionnaireT.qid === ques.qid) {
          console.log(wx.getStorageSync(ques.qid.toString()))
          that.setData({
            questionnaire: clone(questionnaireT)
          })
        }
      })
    }

  },
})