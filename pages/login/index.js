import { login } from '../../api/login'
import { hexMD5 } from '../../utils/md5'
Page({
  data: {
    username: '',
    password: ''
  },
  onLoad () {
  },
  onShow () {
  },
  // 登录按钮
  login () {
    if (this.data.username === '') {
      wx.showToast({
        title: '请输入用户名',
        duration: 1000,
        icon: 'none'
      })
      return false
    } else if (this.data.password === '') {
      wx.showToast({
        title: '请输入密码',
        duration: 1000,
        icon: 'none'
      })
      return false
    }
    let loginDto = {
      username: this.data.username,
      password: hexMD5(this.data.password)
      // password: this.data.password
    }
    console.log('loginDto', loginDto)
    login(loginDto).then(res => {
      console.log(res)
       if(res.code === 0) {
         if(res.data.result === 1) {
          wx.setStorageSync('hasLogin', true)
          wx.switchTab({
            url: '/pages/user/index'
          })
         }else {
          wx.showToast({
            title: '用户名或密码错误',
            duration: 1000,
            icon: 'none'
          })
         }
       }else {
        wx.showToast({
          title: '用户名或密码错误',
          duration: 1000,
          icon: 'none'
        })
       }
    }).catch(err => {
      console.log(err)
    })
  },
  // 绑定用户名输入框
  binduserinput (e) {
    this.setData({
      username: e.detail.value
    })
  },
  // 绑定密码输入框
  bindpasswordinput (e) {
    this.setData({
      password: e.detail.value
    })
  }
})