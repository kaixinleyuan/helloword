// plugin/components/pages/strategy/strategy.js
const bridge = require('../../../api/bridge.js')
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
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
    ],
    trues:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goIntegral(e) {
      if (global.isShowComponents) {
        global.isShowComponents(1)
      }
    },
    goMytask(e) {
      if (global.isShowComponents) {
        console.log(123123)
        global.isShowComponents(2)
      }
    }
  }
})
