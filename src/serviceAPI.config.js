const BASEURL = "https://www.fastmock.site/mock/b9c8a504788477a8385115496624bea2/smileVue/"
const LOCALURL = "http://localhost:3000/"

const URL = {
    getShoppingMallInfo: BASEURL + "index",  // 商城首页所有信息
    getGoodsInfo: BASEURL + "getFoodsInfo",

    registerUser: LOCALURL + 'user/register', //用户注册接口
    login: LOCALURL + 'user/login', //用户登录接口
}

module.exports = URL;