// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width: 0,
    height: 0,
    name: '王玮玮',
    spell: 'Wang Weiwei',
    job: '前端工程师',
    exp: '2年工作经验',
    tel: '18918019597',
    sex: '男',
    age: '25',
    email: 'wang950907@gmail.com',
    address: '',
    skills: [
      { name: 'JavaScript', percent: 75 },
      { name: 'HTML/CSS', percent: 60 },
      { name: 'Vue', percent: 70 },
      { name: 'Webpack', percent: 30 },
      { name: 'Git', percent: 80 }
    ],
    edu: [
      {
        school: '常州信息职业技术学院(专科)',
        major: '数控技术',
        year: '2014-2017',
        desc: '本专业是为培养学生从事数控加工、机械产品设计与制造、生产技术管理等方面的高等工程技术应用型人才，是具有实用技能特点的特色专业。要求学生能在生产现场从事产品制造、开发工作，或在技术部门从事工艺、管理工作。'
      }
    ],
    work: [
      {
        company: '北京思特奇信息技术股份有限公司',
        job: '前端工程师',
        year: '2019/05-至今',
        desc: '本专业是为培养学生从事数控加工、机械产品设计与制造、生产技术管理等方面的高等工程技术应用型人才，是具有实用技能特点的特色专业。要求学生能在生产现场从事产品制造、开发工作，或在技术部门从事工艺、管理工作。'
      },
      {
        company: '上海客主商务服务有限公司',
        job: '前端工程师',
        year: '2018/03-2019/05',
        desc: '本专业是为培养学生从事数控加工、机械产品设计与制造、生产技术管理等方面的高等工程技术应用型人才，是具有实用技能特点的特色专业。要求学生能在生产现场从事产品制造、开发工作，或在技术部门从事工艺、管理工作。'
      }
    ],
    project: [
      {
        name: '上海电信统一门户',
        desc: '本专业是为培养学生从事数控加工、机械产品设计与制造、生产技术管理等方面的高等工程技术应用型人才，是具有实用技能特点的特色专业。要求学生能在生产现场从事产品制造、开发工作，或在技术部门从事工艺、管理工作。'
      },
      {
        name: '上海电信统一门户',
        desc: '本专业是为培养学生从事数控加工、机械产品设计与制造、生产技术管理等方面的高等工程技术应用型人才，是具有实用技能特点的特色专业。要求学生能在生产现场从事产品制造、开发工作，或在技术部门从事工艺、管理工作。'
      },
      {
        name: '上海电信统一门户',
        desc: '本专业是为培养学生从事数控加工、机械产品设计与制造、生产技术管理等方面的高等工程技术应用型人才，是具有实用技能特点的特色专业。要求学生能在生产现场从事产品制造、开发工作，或在技术部门从事工艺、管理工作。'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    let width = wx.getSystemInfoSync().windowWidth;
    let height = wx.getSystemInfoSync().windowHeight;
    
    this.setData({
      width: width,
      height: height
    })
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