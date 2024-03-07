import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import vue3GoogleLogin from 'vue3-google-login';
// import {Client_ID} from 'process.env';
const app = createApp(App);
// const { Client_ID } = process.env;
app.use(vue3GoogleLogin,{
  clientId:''
});
app.use(router);
app.mount('#app');
