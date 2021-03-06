/**
 * Created by xiayumo on 16/5/26.
 */
import {Dimensions, Platform} from 'react-native';

/**
 *  公共配置
 */
let window = {
    width: Platform.OS === 'ios' ? Dimensions.get('window').width : Dimensions.get('screen').width,
    height: Platform.OS === 'ios' ? Dimensions.get('window').height : Dimensions.get('screen').height,
    tabBarHeight: 50,
    indicatorBarHeight: Platform.OS === 'ios' ? 45 : 50,
    navigatorBarHeight: Platform.OS === 'ios' ? 60 : 45,
    statusBarHeight: Platform.OS === 'ios' ? 20 : 0,
    tabBarWidth: 90,
}

/**
 * 颜色
 */
let colors = {
    /**
     * 所有背景灰底
     */
    lightGreyColor: 'rgb(240, 242, 245)',
    lightGreyColor1: 'rgb(238, 238, 238)',
    darkGreyColor: 'rgb(82, 82, 82)',
    darkGreyColor1: 'rgb(160, 160, 160)',
    lightColor: 'rgb(206, 206, 211)',
    redColor: 'rgb(255,0,0)',
    lightRedColor: 'rgb(241,83,83)',
    lightBlackColor: 'rgb(92, 92, 92)',
}

/**
 * 常量字符串
 */
let strings = {
    homeString: '首页',
    categoryString: '分类',
    cartString: '购物车',
    mineString: '我的',
    menuStringArray: ['收藏', '订单', '财产', '精品'],
    searchTabStringArray: ['默认', '销量', '评论数', '价格'],
    orderByStringArray: ['buys', 'comments', 'comments', 'cash'],
    detailTabStringArray: ['商品', '详情', '评价'],
    judgeTabStringArray: ['全部评价', '好评', '中评', '差评'],
    mineOrderStringArray: ['待付款', '待发货', '待收货', '已完成'],
    mineMoneyStringArray: ['我的余额', '我的金券', '我的红包', '我的积分'],
    mineItemStringArray: ['退款退货', '我的评价', '常见问题', '意见反馈'],
}


/**
 * 存储
 */
let storeKeys = {
    /**
     * 存储跟登录相关的所有配置信息，包括token，账号，密码等
     */
    LOGIN_INFO_KEY: 'login_info_key',
    /**
     * 存储搜索纪录，以数组方式存储
     */
    SEARCH_RECODER_KEY: 'search_recoder_key',

}

/**
 * http
 */
let httpKeys = {
    /**
     * 域名
     */
    HOST: 'http://app.legendshop.cn',
    /**
     * 图文后缀
     */
    IMAGE_API_HOST: 'http://app.legendshop.cn/photoserver/photo/',
    /**
     * 首页
     */
    HOME_API_KEY: '/index?',
    /**
     * 短信验证码
     */
    REGISTER_SMS_API_KEY: '/sendRegSMSCode?',
    /**
     * 忘记密码发送短信验证码
     */
    FORGET_SMS_API_KEY: '/sendSMSCode?',
    /**
     * 登录
     */
    LOGIN_API_KEY: '/login?',
    /**
     * 注册
     */
    REGISTER_API_KEY: '/userReg?',
    /**
     * 找回密码
     */
    FORGET_PWD_API_KEY: '/forgetPwd?',
    /**
     * 商品分类
     */
    CATEGOTY_API_KEY: '/category?',
    /**
     * 搜索
     */
    SEARCH_API_KEY: '/appSearch/prodList?',
    /**
     * 详情
     */
    PRODUCT_DETAIL_API_KEY1: '/productDetail?',
    PRODUCT_DETAIL_API_KEY2: '/productContent/',
    PRODUCT_DETAIL_API_KEY3: '/productDetail',
}

export default {
    window: window,
    colors: colors,
    strings: strings,
    storeKeys: storeKeys,
    httpKeys: httpKeys,

}
