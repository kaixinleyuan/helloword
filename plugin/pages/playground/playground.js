const bridge = require('../../api/bridge.js')
// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowComponents:0,
    name:['积分乐园','试玩攻略','我的任务']
  },

  /**
   * 生命周期函数--监听页面加载
   * 
   * 0首页
   * 1积分
   * 2乐园
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title:'积分乐园'
    })
    this.isShowComponents()
  },
  /**
   * 显示组件
   */
  isShowComponents() {
      global.isShowComponents = res=> {
        this.setData({
          isShowComponents:res
        })
      }
  },
  goGame(e) {
    this.setData({
      isShowComponents:e.currentTarget.dataset.index
    })
    wx.setNavigationBarTitle({
      title: this.data.name[e.currentTarget.dataset.index]
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

  }
})