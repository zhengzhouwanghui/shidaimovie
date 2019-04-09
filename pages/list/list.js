// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // list:[],
    name:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (params) {
    console.log(params.type);
    const apiUrl = 'https://api-m.mtime.cn/' + params.type +'.api?locationId=489';
    const _this = this;
    wx.request({
      url: apiUrl, // 仅为示例，并非真实的接口地址
      data: {
         
      },
      header: {
        'content-type': 'json' // 默认值
      },
      success(res) {  
        //把数据存入Data
        _this.setData({
          list: res.data.movies
        })
        console.log(res.data)
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

  }
})