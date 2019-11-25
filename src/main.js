// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant)
import {Tabbar, TabbarItem, Button, Row, Col, Swipe, SwipeItem, Lazyload, List, Field, NavBar, Icon, Tab, Tabs, PullRefresh, Stepper} from 'vant'
Vue.use(Tabbar).use(TabbarItem).use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload).use(List).use(Field).use(NavBar).use(Icon).use(Tab).use(Tabs).use(PullRefresh).use(Stepper)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
