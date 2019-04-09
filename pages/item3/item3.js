// pages/item3/item3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (params) {
    console.log(params.id);
    const apiUrl = 'https://ticket-api-m.mtime.cn/movie/detail.api?locationId=489&movieId=' + params.id;
    // https://api-m.mtime.cn/' + params.id + '.api?locationId=489';
    const apiUrl1 = 'https://ticket-api-m.mtime.cn/movie/hotComment.api?movieId=' + params.id;
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
          list: res.data.data.basic
        })
        console.log(res.data.data.basic)
      }
    })
    wx.request({
      url: apiUrl1, // 仅为示例，并非真实的接口地址
      data: {

      },
      header: {
        'content-type': 'json' // 默认值
      },
      success(res) {
        //把数据存入Data
        _this.setData({
          pic: res.data.data.mini.list
        })
        console.log(res.data.data.mini)
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