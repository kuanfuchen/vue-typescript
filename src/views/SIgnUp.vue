<template>
  <div class="bg-black">
    <Navbar />
    <div class="d-flex signupStyle" >
      <div class="plotStyle"></div>
        <div class="d-flex justify-content-center align-items-center loginFormBlock">
          <!--  -->
          <div class="loginBgImg"></div>
            <div class='loginFormSize'>
              <div class='loginTextStyle loginSmallTitle mb-2 ' style="color:#BF9D7D">
                <span>享樂酒店，誠摯歡迎</span> 
              </div>
              <div class='loginTextStyle loginTitle mb-4'>立即註冊</div>
              <div class="d-flex justify-content-center mb-4">
                <div >
                  <div class="stepBall mx-auto"  :style="{background:stepper=== 'stepperTwo'? '#BF9D7D':'#909090',cursor:stepper=== 'stepperTwo'? 'pointer':'default'}" @click="stepper='stepperOne'">
                    <span class="loginSmallTitle loginTextStyle" v-if="stepper=== 'stepperOne'">1</span>
                    <img src="../assets/signup/ic_check.svg" v-else >
                  </div>
                  <p class="mt-1">輸入信箱及密碼</p>
                </div>
                <div class="line-container" ></div>
                <div>
                  <div class="stepBall mx-auto" style="background: #909090;" >
                    <span class="loginSmallTitle loginTextStyle">2</span>
                  </div>
                  <p class="mt-1">填寫基本資料</p>
                </div>
                
              </div>
              
              <div class="" v-if="stepper === 'stepperOne'">
                <div class="mb-3">
                  <label for="email" class="form-label">電子信箱</label>
                  <input type="text" class="form-control loginTextStyle loginFormInput" id="email" v-model="signupEmail" />
                </div>
                <div class="mb-3">
                  <label for="inputPassward" class="form-label">密碼</label>
                  <input type="password" class="form-control loginTextStyle loginFormInput" id="inputPassward"
                    placeholder="需要8碼以上，並需要字母與數字混合" v-model="signupPW" />
                </div>
                <div class="mb-3 mt-2">
                  <label for="inputPassward2" class="form-label">再次確認密碼</label>
                  <input type="password" class="form-control loginTextStyle loginFormInput" id="inputPassward2" v-model="reCheckedPW" />
                </div>
                <button type="submit" class="mt-3 mb-1 form-control btn loginTextStyle loginFormInput loginFormButton"
                @click="checkedSignUp()">下一步</button>
                <!-- <span class="text-danger" v-if="signupwarning !==''">{{ signupwarning }}</span> -->
              </div>
              <div class="" v-else-if="stepper=== 'stepperTwo'">
                <div class="mb-2">
                  <label for="name" class="form-label">姓名</label>
                      <input type="text" v-model="userInfo.name" class="form-control loginTextStyle loginFormInput" id="name" placeholder='請輸入姓名' />
                </div>
                <div class="mb-2 " >
                  <label for="inputTEL" class="form-label">手機</label>
                  <input type="text" v-model="userInfo.tel" class="form-control loginTextStyle loginFormInput" id="inputTEL" placeholder="請輸入手機號碼"/>
                </div>
                <div class="mb-1">
                  <label>生日</label>
                </div>
                <div class="row row-cols-3 mx-0 mb-2">
                  <div class="col ps-0">
                    <select class="form-select loginTextStyle loginFormSelect" aria-label="select year" v-model="userInfo.birthyear">
                      <option :value="item" v-for="(item, key) in years" :key="key">{{ item }}</option>
                    </select>
                  </div>
                  <div class="col px-0">
                    <select class="form-select loginTextStyle loginFormSelect" aria-label="select month" v-model="userInfo.birthMon">
                      <option :value="item" v-for="(item, key) in months" :key="key">{{ item }}</option>
                    </select>
                  </div>
                  <div class="col pe-0">
                    <select class="form-select loginTextStyle loginFormSelect" aria-label="select day" v-model="userInfo.birthDay">
                      <option :value="item" v-for="(item, key) in days" :key="key">{{ item }}</option>
                    </select>
                  </div>
                </div>
                <label for="inputaddress" class="mb-1">地址</label>
                <div class="row gap-0 mx-0">
                  <div class="col-6 ps-0">
                    <select class="form-select loginTextStyle loginFormSelect" aria-label="select month" v-model="userInfo.addressCity">
                      <option :value="item.city" v-for="(item, key) in citys" :key="key">{{ item.city }}</option>
                    </select>
                  </div>
                  <div class="col-6 pe-0">
                    <select class="form-select loginTextStyle loginFormSelect" aria-label="select month" v-model="userInfo.addressLocal">
                      <option :value="item" v-for="(item,key) in citys[0].local" :key="key">{{ item }}</option>
                    </select>
                  </div>
                  <div class="col-12 mt-3 px-0">
                    <input type="text" class="form-control loginTextStyle loginFormInput" id="inputaddress" placeholder="請輸入詳細地址"
                    v-model="userInfo.addressDes"/>
                  </div>
                </div>
                <div class="mt-2 d-flex">
                  <input type="checkbox" class="form-check-input" id="checkedbox" v-model="userInfo.checkConsent" />
                  <label class="ms-2 form-check-label" for="checkedbox">我已閱讀並同意本網站個資使用規範</label>
                </div>
                <button type="submit" class=" mt-3 mb-1 form-control btn loginTextStyle loginFormInput loginFormButton"
                  @click="finishSignup()">
                  完成註冊
                </button>
              </div>
              <p class="text-danger">{{ signupwarning }}</p>
              <div class="">
                <span>已經有會員了嗎?</span>
                <RouterLink to="/login" class='ms-3 loginForgetPW loginTextStyle'>立即登入</RouterLink>
              </div>
            </div>
        </div>
      </div>

    </div>

</template>
<script setup lang="ts">
  import { RouterLink } from 'vue-router';
  import {ref, onMounted, reactive} from 'vue';
  import Navbar from '../components/Navbar.vue';
  import axios from 'axios';
  import router from '@/router';
  const stepper = ref('stepperTwo');
  const years:number[] = reactive([]);
  const months:number[] = reactive([]);
  const days:number[] = reactive([]);
  const citys = reactive([{
    city:'台北市',
    local:['松山區','信義區','大安區','中山區','中正區','大同區','萬華區','文山區','南港區','內湖區','士林區','北投區']
    }]);
  const signupEmail = ref('');
  const signupPW = ref('');
  const reCheckedPW = ref('');
  const signupwarning = ref('');
  type PersonInfo = {
    name:string,
    tel:string,
    birthyear:number,
    birthMon:number,
    birthDay:number,
    addressCity:string,
    addressLocal:string,
    addressDes:string,
    checkConsent:boolean
  }
  const userInfo:PersonInfo = reactive({
    name:'',
    tel:'',
    birthyear:2024,
    birthMon:1,
    birthDay:1,
    addressCity:'台北市',
    addressLocal:'松山區',
    addressDes:'',
    checkConsent:false
  })
  const checkedSignUp = ()=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const checkedEmail = signupEmail.value.toLowerCase().match(emailRegex);
    const trim_signupPW:string = signupPW.value.trim();
    const trim_reCheckedPW:string = reCheckedPW.value.trim();
    if(checkedEmail === null){
      signupwarning.value = 'Email輸入格式有問題';
      return 
    }
    if(trim_signupPW === ''){
      signupwarning.value = '請輸入密碼';
      return
    }else{
      const signupPWLen = trim_signupPW.split('');
      if(signupPWLen.length <8){
        signupwarning.value= '密碼必須含8碼以上';
        console.log(signupPWLen)
        return
      }
    }
    if(trim_signupPW !== trim_reCheckedPW){
      signupwarning.value = '密碼輸入不相符'
      return
    }
    signupwarning.value = '';
    stepper.value='stepperTwo'
  }
  const finishSignup = async()=>{
    if(userInfo.name === ''){
      signupwarning.value = '未正確輸入姓名';
      return 
    }else if(userInfo.tel === ''){
      signupwarning.value = '未輸入電話'
      return
    }else if(userInfo.addressDes === ''){
      signupwarning.value='地址有缺'
      return 
    }else if(!userInfo.checkConsent){
      signupwarning.value = '未同意個資規範'
      return 
    }
    signupwarning.value = '';
    console.log(signupEmail.value, signupPW.value)
    await axios.post('https://practice-ts-mongdb.onrender.com/api/v1/user/signup', {
      "name": userInfo.name,
      "email":signupEmail.value,
      "password": signupPW.value,
      "phone": userInfo.tel,
      "birthday": `${userInfo.birthyear}/${userInfo.birthMon}/${userInfo.birthDay}`,
      "address": {
        "zipcode": 802,
        "detail": userInfo.addressDes}
    }).then((res)=>{
      console.log(res,'res')
      if(res.data?.status){
        window.confirm('註冊完成,轉入登入頁面');
        setTimeout(()=>{router.push({path:'/login'}), 5000})
      }
    }).catch((err)=>{
      window.confirm('註冊失敗');
      console.error(err,'err')
    })
    

  }
  onMounted(() => {
    for(let i = 2024 ; 1990 < i ; i--){ years.push(i)};
    for(let i = 1 ; 12 >= i ;i++){months.push(i)};
    for(let i = 1 ; 31 >= i ; i++){days.push(i)}
  })

</script>
<style scope>
  .line-container{
    position: relative;
    width: 8vw;
    margin-left: 20px;
    margin-right: 20px;
  }
  .line-container::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px; 
    background-color: #909090;
    transform: translateY(-50%);
  }
  .stepBall{
    width: 32px;
    height: 32px;
    border-radius: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

  }
  .signupStyle{
  background-color: #000;
  height: calc(100vh - 120px);
}
.loginFormBlock{
  width:50vw;
  color: #FFFFFF;
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
.loginFormSize{
  width:23vw
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
.loginFormSelect{
  height: 56px;
  font-size: 16px;
  line-height: 24px;
  padding:16px, 32px, 16px, 32px;
  border-radius: 8px;
  letter-spacing: 0.02em;
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
@media (max-width:1400px) {
  .loginFormSize{
    width: 35vw;
  }
  .line-container{
    width:12vw
  }
}
@media(max-width:576px){
  .plotStyle{
    display: none;
  }
  .signupStyle{
    height:100vh
  }
  .loginFormBlock{
    width:100vw;
  }
  .loginFormSize{
    width:calc(100vw - 20px);
  }
  .line-container{
    width:8vw
  }
}
</style>