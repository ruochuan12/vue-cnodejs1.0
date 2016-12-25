// src/main.js
import Vue from 'vue';
import App from './App';
// import Hello from './components/Hello.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import TimeEntries from 'URL_components/TimeEntries.vue';
import Home from 'URL_components/Home.vue';
import LogTime from 'URL_components/LogTime.vue';

// 注册两个组件
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter();

// 路由map
router.map({
    '/Home': {
        component: Home
    },
    '/time-entries': {
        component: TimeEntries,
        subRoutes: {
            '/log-time': {
                component: LogTime
            }
        }
    }
});

router.redirect({
    '*': '/Home'
});

router.start(App, '#app');

/* eslint-disable no-new */
new Vue({
    el: 'body',
    components: {
        App
    }
});
