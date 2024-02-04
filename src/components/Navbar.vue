<template>
  <nav class="navbar navbar-expand-lg backgroundtrans" >
    <div class="container-fluid navBarContainer">
      <a class="navbar-brand" href="/">
        <img :src="Imglogo" alt="" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <img :src="Imgmenu" />
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center" >
          <li class="nav-item me-3" >
            <RouterLink class='nav-link navLinkTextStyle' to="/roomstyle" style="color:#fff" >客房旅宿</RouterLink>
          </li>
          <li class="nav-item me-3" >
            <RouterLink class='nav-link navLinkTextStyle' to="/login" style="color:#fff">會員登入</RouterLink>
          </li>
          <li class="nav-item">
            <button type="button" class="navButtonStyle navLinkTextStyle">立即訂房</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
  import { RouterLink } from 'vue-router';
  import Imglogo from '../assets/footer/LOGO.png';
  import Imgmenu from '../assets/ic_menu.png'

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
@media(max-width:576px){
  .navbar .navBarContainer{
    padding-left: 12px;
    padding-right: 12px;
  }
}

</style>