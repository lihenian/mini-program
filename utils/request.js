const request = function (url, options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${url}`,
      method: options.method,
      data: options.method === 'GET' ? options.data : JSON.stringify(options.data),
      header: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      success (response) {
        if (response.statusCode === 200) {
          if (response.data.code === 0) {
            resolve(response.data)
          } else {
            let errmsg = response.data.msg
            if (errmsg == undefined || errmsg == 'undefined') {
              errmsg = '返回错误数据'
            }
            wx.showToast({
              title: errmsg,
              icon: 'none',
              duration: 3000
            })
          }
        } else {
          wx.showToast({
            title: '接口请求失败',
            icon: 'none',
            duration: 2000
          })
        }
      },
      fail (error) {
        reject(error.data)
      }
    })
  })
}

const requestFormData = function (url, options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${url}`,
      method: options.method,
      data: options.method === 'GET' ? options.data : options.data,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      success (response) {
        if (response.statusCode === 200) {
          if (response.data.code === 0) {
            resolve(response.data)
          } else {
            let errmsg = response.data.msg
            if (errmsg == undefined || errmsg == 'undefined') {
              errmsg = '返回错误数据'
            }
            wx.showToast({
              title: errmsg,
              icon: 'none',
              duration: 3000
            })
          }
        } else {
          wx.showToast({
            title: '接口请求失败',
            icon: 'none',
            duration: 2000
          })
        }
      },
      fail (error) {
        reject(error.data)
      }
    })
  })
}

function get (url, options) {
  return request(url, {
    method: 'GET',
    data: options
  })
}

function post (url, options) {
  return request(url, {
    method: 'POST',
    data: options
  })
}

function put (url, options) {
  return request(url, {
    method: 'PUT',
    data: options
  })
}

function getFormData (url, options) {
  return requestFormData(url, {
    method: 'GET',
    data: options
  })
}

function postFormData (url, options) {
  return requestFormData(url, {
    method: 'POST',
    data: options
  })
}

function putFormData (url, options) {
  return requestFormData(url, {
    method: 'PUT',
    data: options
  })
}

export default {
  get,
  post,
  put,
  getFormData,
  postFormData,
  putFormData
}