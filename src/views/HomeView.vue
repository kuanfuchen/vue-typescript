<template>
  <div>
    <div class="bannerBg">
      <div class="bannerGray">
        <Navbar />
        <div class="mx-auto indexTtileStyle  d-flex align-items-center">
          <div class="bannerTextGroup indextextFlex">
            <div class="bannerText1 title_textContent">
              <div class="bannerTextColor bannerTextStyle roomTextSize1">享樂酒店</div>
              <div class="bannerTextStyle c roomTextSize2 bannerTextColor">Enjoyment Luxury Hotel</div>
              <div class="banner-gradientLine"></div>
            </div>
            <div class="frosted_glass d-flex align-items-center">
              <div class="revseMarginLeft">
                <div class="bannerTextStyle roomTextSize1 indextitleTextColor">高雄<br/>
                豪華住宿之選</div>
                <p class="  roomTextSize2 indextitleTextColor">我們致力於為您提供無與倫比的奢華體驗與優質服務</p>
                <div class="">
                  <button class="btn-indexUse">
                    <div class="d-flex justify-content-end linearmark">立即訂房<span class="ms-2 linear"></span></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import Navbar from '../components/Navbar.vue';
</script>
<style lang="scss" scope>
  .bannerBg{
    background-image: url('../assets/room/pc/banner-pc.png');
    background-size: cover;
    background-position: center;
    height: 100vh;
  }
  .bannerTextGroup{
    // padding-top: 217px;
    width:90vw;
    display:flex;
    justify-content: space-between;
    // align-items: end;
  }
  .title_textContent{
    width: 33vw;
  }
  .bannerText1{
    position: relative;
  }
  .banner-gradientLine{
    position: absolute;
    width: 26vw;
    height: 2px;
    background-image: linear-gradient(to right, #BE9C7C, #ffffff);
  }
  .bannerGray{
    background-color: rgba(0, 0, 0, 0.6);
    height: 100vh;
  }
  .bannerTextStyle{
    font-family:'Noto Serif TC';
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 5%;
  }
  .indextitleTextColor{
    color: #ffffff;
  }
  .bannerTextColor{
    color: #BF9D7D;
  }
  .roomTextSize1{
    font-size: 40px;
  }
  .roomTextSize2{
    font-size: 24px;
  }
  .indexTtileStyle{
    width:88vw;
    height: calc(100vh - 120px);
  }
  .linearmark{
    padding-right: 120px;
    font-weight: 700;
  }
  .linear{
    position: absolute;
    width: 120px;
    height: 1px;
    background:#ffffff;
    top:49%;
    right: 0;
  }
  .frosted_glass{
    width: 48vw;
    height: 62vh;
    box-shadow: 1px 1px 1px 1px #ffffff;
    border-radius: 80px;
    backdrop-filter:blur(8px)
  }
  .btn-indexUse{
    position: relative;
    background-color: #BF9D7D;
    width: 40vw;
    height: 11vh;
    color: #ffffff;
    border: 1px solid #BF9D7D;
    border-radius: 8px;
  }
  .revseMarginLeft{
    margin-left: -25px;
  }
  .indextextFlex{
    display: flex;
    align-items: center;
  }
  @media(max-width:576px){
    .bannerTextGroup{
      width: 100vw;
      padding-top: 40px;
      // text-align: center;
      display: block;
    }
    .bannerBg{
      background-image: url('../assets/room/mobile/banner.png');
      background-position:top ;
      height: 100%;
    }
    .bannerGray{
      height: 100%;
    }
    .bannerText1{
      height: 183px;
    }
    .banner-gradientLine{
      position: absolute;
      width: 2px;
      height: 93px;
      left: 50%;
      background-image: linear-gradient(to bottom, #BE9C7C, #ffffff);
    }
    // .roomTextSize1{
    //   font-size: 28px;
    //   line-height: 34px;
    // }
    // .roomTextSize2{
    //   font-size: 16px;
    //   line-height: 24px;
    // }
    .btn-indexUse{
      background-color:#ffffff;
      border: #ffffff;
      color: #000;
    }
    .linear{
      color: #000;
    }
    .indextextFlex{
      display: block;
    }
    .title_textContent{
      text-align: center;
      width:100%
    }
    .frosted_glass{
      margin-top: 30px;
      margin-left: 8vw;
      width: 80vw;
      height: 420px;
    }
    .btn-indexUse{
      width: 80vw;
    }
  }
</style>