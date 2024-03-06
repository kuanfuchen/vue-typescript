import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import vue3GoogleLogin from 'vue3-google-login';
const app = createApp(App);
app.use(vue3GoogleLogin,{
  clientId:''
});
app.use(router);
app.mount('#app');
