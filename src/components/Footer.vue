<template>
  <div class="footer">
      <div class='insideFooter' >
        <div class=" changeStyle">
          <div >
            <img  src='../assets/footer/LOGO.png' alt="" />
            <div class="d-flex" style='margin-top:40px'>
            <img src='../assets/footer/FB.png' alt="" />
            <img src='../assets/footer/IG.png' alt="" style='margin-left:16px' />
            </div>
          </div>
          <div class="changeStyle aboutMobileInfoMt">
            <div>
              <div class="aboutInfoStyle">
                <div class="copyrightText" >TEL</div>
                <div  class=" copyrightText copyrightContent">+886-7-1234567</div>
              </div>
              <div style="margin-top:40px"  class="aboutInfoStyle ">
                <div  class="copyrightText">FAX</div>
                <div  class="copyrightText copyrightContent">+886-7-1234567</div>
              </div>
              
            </div>
            <div class="twoAboutInfoStyle"  >
              <div class="aboutInfoStyle ">
                <div  class="copyrightText">MAIL</div>
                <div  class="copyrightText copyrightContent">elh@hexschool.com</div>
              </div>
              <div style="margin-top:40px" class="aboutInfoStyle ">
                <div  class="copyrightText">WEB</div>
                <div  class="copyrightText copyrightContent">www.elhhexschool.com.tw</div>
              </div>
            </div>
          </div>
        </div>
        <div class="changeStyle align-items-end footerCopy" style="height:104px" >
          <p class="copyrightText copyrightContent">806023 台灣高雄市新興區六角路123號</p>
          <p class="copyrightText copyrightContent">© 享樂酒店 2023 All Rights Reserved.</p>
        </div>
      </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style scope>
  .footer  {
  height:456px;
  background-color:#140F0a;
  width:100%;
}

.copyrightText {
  color:#fff;
  font-family:Noto Serif TC;
  line-height:24px;
  font-weight:500;
  letter-spacing:2px;
}
.copyrightContent{
  font-size:16px;
}
.insideFooter {
  height:256px;
  padding:100px 17vw 100px 17vw
}
.changeStyle{
  display:flex;
  justify-content: space-between;
  
}
.twoAboutInfoStyle{
  margin-left: 80px;
}
@media(max-width:576px) {
  .aboutMobileInfoMt{
    margin-top: 40px;
  }
  .changeStyle{
    display:block;
  }
  .copyrightContent{
    font-size:14px;
  }
  .footer{
    height:750px
  }
  .insideFooter{
    padding:80px 16px 80px 16px;
    height:590px;
  }
  .footerCopy{
    padding-top:80px;
  }
  .aboutInfoStyle{
    padding-top: 8px;
    margin-top: 0px !important;
  }
  .twoAboutInfoStyle{
    margin-left: 0px;
  }
}
</style>