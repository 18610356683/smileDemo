const BASEURL = "https://www.fastmock.site/mock/b9c8a504788477a8385115496624bea2/smileVue/"
const LOCALURL = "http://localhost:3000/"

const URL = {
    getShoppingMallInfo: BASEURL + "index",  // 商城首页所有信息
    getGoodsInfo: BASEURL + "getFoodsInfo",

    registerUser: LOCALURL + 'user/register', //用户注册接口
    login: LOCALURL + 'user/login', //用户登录接口
    getDetailGoodsInfo: LOCALURL + 'goods/getDetailGoodsInfo', //获取商品详情
    getCategoryList: LOCALURL + 'goods/getCategoryList', //获取大类信息
    getCategorySubList: LOCALURL + 'goods/getCategorySubList', //获取小类信息
    getGoodsListByCategorySubID: LOCALURL + 'goods/getGoodsListByCategorySubID', //得到小类商品信息
}

module.exports = URL;