// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: '我是一条message',
    number: 1,
    condition: false,
    arr:[{id: 'one', text: '壹'}, {id: 'two', text: '贰'}, {id: 'three', text: '叁'}],
    str:'我是一条消息',
    array:[1, 2, 3, 4],
    object: {id :1 , message: '我是信息1'},
    xxx: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options)
  },

  // 翻转字符串函数
  reverseStr() {
    this.setData({
      str: this.data.str.split('').reverse().join('')
    })
  },
  //点击push  push不能用
  pushItem() {
    let last = this.data.array[this.data.array.length - 1] + 1;
    let newArr = [last];
    this.data.array = this.data.array.concat(newArr);
    this.setData({
      array: this.data.array,
    })
  },

  //改变对象
  changeObjText() {
    this.setData({
      'object.message': '我是信息2'
    })
  },
  //点击变色
  changeClass() {
    this.setData({
      xxx: !this.data.xxx,
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