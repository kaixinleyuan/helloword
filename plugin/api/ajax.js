

const baseUrl = 'https://api.pantaoapp.com/AIdList.aspx'
/**
 * 在config 统计目录引用 config 是域名配置文件
 * 使用promise 统一封装了 request 
 * 接收三个参数 第一个接口名  第二个请求体 第三个请求头的content-type默认为application/json
 * 两个两发 postReq getReq
 */
let getReq = (url, data, content_type = 'application/json') => new Promise((resolve, reject) => {
  wx.showLoading({
    title: '加载中',
  })
  const app = getApp();
  let header = {
    'Accept': 'application/json',
    'content-type': content_type,
    'refresh-token': app.globalData.refreshtoken
  }

  const requestTask = wx.request({
    url: baseUrl + url,
    header,
    data,
    success: res => {
      let response = res.data;
      response.code == 10001 ? resolve(res) : reject(res);
    },
    fail: err => {
      reject(err);
    },
    complete: () => {
    }
  })
})

let postReq = (url, data, content_type = 'application/json') => new Promise((resolve, reject) => {

  wx.showLoading({ title: '加载中'})
  const app = getApp();

  let header = {
    'Accept': 'application/json',
    'content-type': content_type,
    'refresh-token': app.globalData.refreshtoken
  }

  const requestTask = wx.request({
    url: baseUrl + url,
    header,
    method: "POST",
    data,
    success: res => {
      let response = res.data;
      response.code == 10001 ? resolve(res) : reject(res);
    },
    fail: err => {
      reject(err);
    },
    complete: () => {
      wx.hideLoading()
    }
  })
})
module.exports = {
  getReq,
  postReq,
}    