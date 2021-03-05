// pages/通讯录/搜索框/searchbar.js
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
    contents: [],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleInput(e){
      this.triggerEvent('search', {value: e.detail.value},{});
    }
  }
})
