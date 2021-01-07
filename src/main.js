import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import store from './store';
import AuthHandler from './components/AuthHandler';
import ImageList from './components/ImageList';
import UploadForm from './components/UploadForm';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history', // use 'Browser Router' rather than the default 'Hash Router'
  routes: [
    { path: '/', component: ImageList },
    { path: '/upload', component: UploadForm },
    { path: '/oauth2/callback', component: AuthHandler }
  ]
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
