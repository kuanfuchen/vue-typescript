<template>
  <nav class="navbar navbar-expand-lg backgroundtrans" :class="{'mobileNavBar':toggleMenu?true:false}" >
    <div class="container-fluid mb-auto">
      <RouterLink class="navbar-brand" to="/"><img :src="Imglogo" alt="" /></RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
      @click="toggleMenu = !toggleMenu">
        <img :src="Imgmenu" />
      </button>
      <div class="collapse navbar-collapse ms-auto justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0 d-flex align-items-center ">
          <li class="nav-item me-3" >
            <RouterLink class='nav-link navLinkTextStyle' to="/roomstyle" style="color:#fff" >客房旅宿</RouterLink>
          </li>
          <li class="nav-item  dropdown me-3" >
            <RouterLink class='nav-link navLinkTextStyle' v-if="!loginPersonInfo.status" to="/login" style="color:#fff">會員登入</RouterLink>
            <!-- <div v-else style="color:#fff" class="navLinkTextStyle">{{ loginPersonInfo.name }}</div> -->
            <a v-else style="color:#fff;text-decoration: none;"  class="dropdown toggleSignout_W" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">
              {{ loginPersonInfo.name }}
            </a>
            <ul class="dropdown-menu dropdown-menu-lg-end" v-if="loginPersonInfo.status">
              <div  class="dropdown-item navLinkTextStyle signoutStyle" @click="removeUserInfo">登出</div>
            </ul>
          </li>
          <li class="nav-item me-3 dorpdownSignout_M" v-if="loginPersonInfo.status">
            <div style="color:#fff" class="navLinkTextStyle signoutStyle" @click="removeUserInfo">登出</div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
  import { RouterLink } from 'vue-router';
  import Imglogo from '../assets/footer/LOGO.png';
  import Imgmenu from '../assets/ic_menu.png';
  import { Subject, takeUntil } from 'rxjs';
  const comSubject$ = new Subject();
  import { reactive,ref } from 'vue'; 
  import {data} from '../utils/utils';
  const toggleMenu = ref(false);
  type Person = {
    name:string,
    status:boolean,
    token:string
  } 
  const loginPersonInfo:Person =reactive({
    name:'',
    status:false,
    token:''
  }); 
  
  data.transferMeg$.pipe(takeUntil(comSubject$)).subscribe((info:any)=>{
    console.log(info,'info')
    if(info.status){
      // loginPersonInfo.name = info.result.name;
      loginPersonInfo.name = info.name;
      loginPersonInfo.status = info.status;
      loginPersonInfo.token = info.token;
    }
  })
  const removeUserInfo = () => {
    loginPersonInfo.name = '';
    loginPersonInfo.status=false;
    loginPersonInfo.token = '';
    data.transferMegFinishMeg$(loginPersonInfo)
  }
</script>
<style scope>
  .navbar{
    height:120px;
}

.nav-item .navLinkTextStyle{
  font-size: 16px;
  font-family: 'Noto Serif TC';
  font-weight: 700;
}
.navButtonStyle{
  background:#BF9D7D;
  width:129px;
  height: 56px;
  border-radius: 8px;
  padding:16px 30px 16px 30px;
  color: #fff;
  border:0.5px solid rgb(0, 0, 0, 0.5) ;
}
.navButtonStyle:hover{
  background:#7B6651
}
.navbar .navBarContainer{
  padding-left: 80px;
  padding-right: 80px;
}
.backgroundtrans{
  background-color: transparent !important;
}
.navbar-collapse .collapse .show{
  background-color: #000 !important;
}
.signoutStyle{
  cursor: pointer;
}
.toggleSignout_W{
  display: block;
}
.dorpdownSignout_M{
  display: none;
}
@media(max-width:576px){
  .navbar .navBarContainer{
    padding-left: 12px;
    padding-right: 12px;
  }
  .mobileNavBar{
    height:100vh;
    background: #000 !important;
    z-index: 100;
  }
  .toggleSignout_W{
   display: none;
  }
  .dorpdownSignout_M{
   display:block;
  }
}

</style>