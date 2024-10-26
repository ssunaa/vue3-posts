import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import globalDirectives from './plugins/global-directive.js'
import 'bootstrap/dist/js/bootstrap.js';
import funcPlugins from '@/plugins/func.js'
import objPlugins from '@/plugins/obj.js'
import personPlugins from '@/plugins/person.js'
import dayjs from './plugins/dayjs.js'
// import globalComponents from '@/plugins/global-components';

const app = createApp(App);
// app.use(globalComponents);
app.use(funcPlugins)
app.use(objPlugins)
app.use(personPlugins)
app.use(globalDirectives)
app.use(dayjs)
app.use(router);
app.mount('#app');


// console.log('MODE: ', import.meta.env.MODE);
// console.log('BASE_URL: ', import.meta.env.BASE_URL);
// console.log('PROD: ', import.meta.env.PROD);
// console.log('DEV: ', import.meta.env.DEV);
// console.log('VITE_APP_API_URL: ', import.meta.env.VITE_APP_API_URL);