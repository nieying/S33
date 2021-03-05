// pages/消息/components/navbar/navbar.js
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
    items: ['来电', '去电','消息通知'],
    currentIndex: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(event){
      this.setData({
        currentIndex: event.currentTarget.dataset.index,
      });
      this.triggerEvent('click', {index: event.currentTarget.dataset.index}, {});
    },
  }
})
