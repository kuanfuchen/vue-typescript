<template>
  <div class="bg-black">
    <Navbar /> 
    <div class="d-flex loginStyle" >
      <div class="plotStyle"></div>
        <div class="d-flex justify-content-center align-items-center loginFormBlock">
          <div class="loginBgImg"></div>
          <div class='loginFormSzie'>
            <div class='loginTextStyle loginSmallTitle mb-2 ' style="color:#BF9D7D">
              <span>享樂酒店，誠摯歡迎</span> 
            </div>
            <div class='loginTextStyle loginTitle mb-5'>立即開始旅程</div>
            <div class="mb-3">
              <label for="email" class="form-label">電子信箱</label>
              <input type="text" class="form-control loginTextStyle loginFormInput" id="email" v-model="loginUseInfo.email" />
            </div>
            <div class="mb-3">
              <label for="inputPassward" class="form-label">密碼</label>
              <input type="password" class="form-control loginTextStyle loginFormInput" id="inputPassward" v-model="loginUseInfo.password" />
            </div>
            <div class="d-flex justify-content-between mb-4">
              <!-- <div class=" form-check">
                <input type="checkbox" class="form-check-input" id="checkedbox" v-model="saveAccount" />
                <label class="form-check-label" for="checkedbox">紀錄帳號</label>
              </div>
              <div class="loginForgetPW loginTextStyle">
                忘記密碼?
              </div> -->
            </div>
            <button type="submit" class="mb-1 form-control btn loginTextStyle loginFormInput loginFormButton"
            @click="loginedInfo()">會員登入</button>
            <p class="text-danger">{{ signupwarning }}</p>
            <div class="mt-1">
              <span>沒有會員嗎?</span>
                <RouterLink to="/signup" class='ms-3 loginForgetPW loginTextStyle'>前往註冊</RouterLink>
            </div>
            <button type="submit" class="mb-1 form-control btn loginTextStyle loginFormInput loginFormButton"
            @click="google_Login()">Google登入</button>
          </div>
        </div>
      </div>
    </div>
</template>
<script lang="ts" setup>
import axios from 'axios'
import { RouterLink } from 'vue-router';
import { ref,reactive } from 'vue';
import Navbar from '../components/Navbar.vue';
import {data} from '../utils/utils';
import { googleTokenLogin } from 'vue3-google-login';
const clientID = import.meta.env.Client_ID;
let clientIDdata:object = {}; 
interface UserLoginInfo {
  email:string,
  password:string,
}
const loginUseInfo:UserLoginInfo = reactive({
  email:'',
  password:''
});
const signupwarning = ref('');
const google_Login = async():void => {
  try{
    // console.log(clientID)
    
    googleTokenLogin({
      clientId:''
    }).then(async(response)=>{
      clientIDdata = response;
      console.log(clientIDdata, 'clientIDdata')
      await axios.post('http://localhost:3005/api/v1/user/login',{
        email:'123@gmail.com',
        password:'a1234567',
        token:response.access_token
      }).then((res)=>{
        console.log(res)
      })
    })
    
  }catch(err){
    console.log(err)
  }
}
const loginedInfo = async() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const checkedEmail = loginUseInfo.email.toLowerCase().match(emailRegex);
  if(checkedEmail === null){
    signupwarning.value = 'Email有缺失';
    return 
  }
  if(loginUseInfo.password=== ''){
    signupwarning.value = '密碼有缺失'
    return
  }
  signupwarning.value = '';
  
    // 
  await axios.post('https://practice-ts-mongdb.onrender.com/api/v1/user/login',{
    email: loginUseInfo.email,
    password: loginUseInfo.password,
  }).then((res)=>{
    if(res.data.status){
      console.log(res)
      window.confirm('登入成功')
      const userData = {
        name:res.data.result.name,
        status:res.data.status,
        token:res.data.token
      }
      data.transferMegFinishMeg$(userData);
    }
    console.log(res,'res')
  }).catch((err)=>{
    signupwarning.value ='帳號或密碼有誤,20秒後此行消失'
    console.error(err,'err')
  })
  setTimeout(()=>{signupwarning.value = ''},20000)
}
</script>
<style scope>
  .loginStyle{
  background-color: #000;
  height: calc(100vh - 120px);
}
.loginFormBlock{
  width:50vw;
  color: #FFFFFF;
  /* position: relative; */
  /* z-index: 10; */
}
.plotStyle{
  position: relative;
  width:50vw;
  height:calc(100vh - 120px);
  background-image: url('../assets/login/register.png');
  background-size: cover;
  background-position: center;
  z-index: 10;
}
.loginFormSzie{
  width:22vw
}
.loginTextStyle{
  font-family: 'Noto Serif TC';
  font-weight: 700;
}
.loginSmallTitle{
  position: relative;
  font-size: 16px;
  letter-spacing: 0.02em;
}
.loginTitle{
  font-size: 48px;
  line-height: 58px;
  letter-spacing: 0.05em;
}
.loginFormInput{
  background:#ECECEC !important;
  color: #909090 !important;
  height: 56px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.02em;
  padding:16px, 32px, 16px, 32px;
  border-radius: 8px;
}
.loginFormButton{
  background:#BF9D7D !important;
  color:#FFFFFF !important;
}
.loginForgetPW{
  color: #BF9D7D;
  text-decoration: underline;
  cursor: pointer;
}
@media(max-width:576px){
  .plotStyle{
    display: none;
  }
  .loginFormBlock{
    width:100vw
  }
  .loginFormSzie{
    width:calc(100vw - 20px);

  }
}
</style>