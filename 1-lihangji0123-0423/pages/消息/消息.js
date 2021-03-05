// pages/消息/消息.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex:0,
    currentIndex2:0,
    people0: [
      {
        picture: '/assets/编组 2.png',
        name: '张正刚',
        status: '待入账',
        star: '4.3分',
        money: 300,
        date: '2020.11.18',
        time: '18:00-18:02'
      },
      {
        picture: '/assets/编组 2.png',
        name: '张正刚',
        status: '已完成',
        star: '4.3分',
        money: 300,
        date: '2020.11.18',
        time: '18:00-18:02'
      },
      {
        picture: '/assets/编组 2.png',
        name: '张正刚',
        status: '二次预约中',
        star: '暂无评分',
        money: 300,
        date: '2020.11.18',
        time: '18:00-18:02'
      },
      {
        picture: '/assets/编组 2.png',
        name: '张正刚',
        status: '对方申诉中',
        star: undefined,
        money: 300,
        date: '2020.11.18',
        time: '18:00-18:02'
      }
    ],
    people1: [
      {
        picture: '/assets/编组 2.png',
        name: '张正刚',
        status: '待评价',
        money: 300,
        star: '暂无评分',
        date: '2020.11.18',
        time: '18:00-18:02'
      },
      {
        picture: '/assets/编组 2.png',
        name: '张正刚',
        status: '已完成',
        star: '4.3分',
        money: 300,
        date: '2020.11.18',
        time: '18:00-18:02'
      },
      {
        picture: '/assets/编组 2.png',
        name: '张正刚',
        status: '二次预约中',
        star: '暂无评分',
        money: 300,
        date: '2020.11.18',
        time: '18:00-18:02'
      },
      {
        picture: '/assets/编组 2.png',
        name: '张正刚',
        status: '申诉中',
        star: undefined,
        date: '2020.11.18',
        time: '18:00-18:02'
      },
      {
        picture: '/assets/编组 2.png',
        name: '张正刚',
        status: '申诉成功',
        star: undefined,
        date: '2020.11.18',
        time: '18:00-18:02'
      }
    ],
    people2: [
      {
        picture: '/assets/编组 2.png',
        name: '张正刚',
        date: '预约时间2020.11.18',
        time: '18:00-18:02'
      },
      {
        picture: '/assets/编组 2.png',
        name: '张正刚',
        date: '预约时间2020.11.18',
        time: '18:00-18:02'
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

  handleTap(event){
    this.setData({
      currentIndex: event.detail.index
    });
  },

  handleTap2(event){
    this.setData({
      currentIndex2: event.detail.index
    })
  }
})