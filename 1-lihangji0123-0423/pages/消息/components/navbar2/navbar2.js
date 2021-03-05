// pages/消息/components/navbar2/navbar2.js
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
    titles: ['全部', '二次预约','申诉中','待入账','已完成'],
    currentIndex: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTap(event){
      this.setData({
        currentIndex: event.currentTarget.dataset.index
      });
      this.triggerEvent('click2', {index: event.currentTarget.dataset.index},{});
    }
  }
})
