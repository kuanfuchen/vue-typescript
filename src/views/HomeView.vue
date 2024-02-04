<template>
  <div>
    <div class="bannerBg-i">
      <div class="bannerGray-i">
        <Navbar />
        <div class="mx-auto indexTtileStyle-i  d-flex align-items-center">
          <div class="bannerTextGroup-i indextextFlex-i">
            <div class="bannerText1-i title_textContent-i">
              <div class="bannerTextColor-i bannerTextStyle-i roomTextSize1-i">享樂酒店</div>
              <div class="bannerTextStyle-i c roomTextSize2-i bannerTextColor-i" >Enjoyment Luxury Hotel</div>
              <div class="banner-gradientLine-i"></div>
            </div>
            <div class="frosted_glass-i d-flex align-items-center">
              <div class="revseMarginLeft-i">
                <div class="bannerTextStyle-i roomTextSize1-i indextitleTextColor-i">高雄<br/>
                豪華住宿之選</div>
                <p class="  roomTextSize2-i indextitleTextColor-i">我們致力於為您提供無與倫比的奢華體驗與優質服務</p>
                <div class="">
                  <button class="btn-indexUse-i">
                    <div class="d-flex justify-content-end linear-imark-i">立即訂房<span class="ms-2 linear-i"></span></div>
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
  .bannerBg-i{
    background-image: url('../assets/room/pc/banner-pc.png');
    background-size: cover;
    background-position: center;
    height: 100vh;
  }
  .bannerTextGroup-i{
    // padding-top: 217px;
    width:90vw;
    display:flex;
    justify-content: space-between;
    // align-items: end;
  }
  .title_textContent-i{
    width: 33vw;
  }
  .bannerText1-i{
    position: relative;
  }
  .banner-gradientLine-i{
    position: absolute;
    width: 26vw;
    height: 2px;
    background-image: linear-i-gradient(to right, #BE9C7C, #ffffff);
  }
  .bannerGray-i{
    background-color: rgba(0, 0, 0, 0.6);
    height: 100vh;
  }
  .bannerTextStyle-i{
    font-family:'Noto Serif TC';
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 5%;
  }
  .indextitleTextColor-i{
    color: #ffffff;
  }
  .bannerTextColor-i{
    color: #BF9D7D;
  }
  .roomTextSize1-i{
    font-size: 40px;
  }
  .roomTextSize2-i{
    font-size: 24px;
  }
  .indexTtileStyle-i{
    width:88vw;
    height: calc(100vh - 120px);
  }
  .linear-imark-i{
    padding-right: 120px;
    font-weight: 700;
  }
  .linear-i{
    position: absolute;
    width: 120px;
    height: 1px;
    background:#ffffff;
    top:49%;
    right: 0;
  }
  .frosted_glass-i{
    width: 48vw;
    height: 62vh;
    box-shadow: 1px 1px 1px 1px #ffffff;
    border-radius: 80px;
    backdrop-filter:blur(8px)
  }
  .btn-indexUse-i{
    position: relative;
    background-color: #BF9D7D;
    width: 40vw;
    height: 11vh;
    color: #ffffff;
    border: 1px solid #BF9D7D;
    border-radius: 8px;
  }
  .revseMarginLeft-i{
    margin-left: -25px;
  }
  .indextextFlex-i{
    display: flex;
    align-items: center;
  }
  @media(max-width:576px){
    .bannerTextGroup-i{
      width: 100vw;
      padding-top: 40px;
      // text-align: center;
      display: block;
    }
    .bannerBg-i{
      background-image: url('../assets/room/mobile/banner.png');
      background-position:top ;
      height: 100%;
    }
    .bannerGray-i{
      height: 100%;
    }
    .bannerText1-i{
      height: 183px;
    }
    .banner-gradientLine-i{
      position: absolute;
      width: 2px;
      height: 93px;
      left: 50%;
      background-image: linear-i-gradient(to bottom, #BE9C7C, #ffffff);
    }
    // .roomTextSize1-i{
    //   font-size: 28px;
    //   line-height: 34px;
    // }
    // .roomTextSize2-i{
    //   font-size: 16px;
    //   line-height: 24px;
    // }
    .btn-indexUse-i{
      background-color:#ffffff;
      border: #ffffff;
      color: #000;
    }
    .linear-i{
      color: #000;
    }
    .indextextFlex-i{
      display: block;
    }
    .title_textContent-i{
      text-align: center;
      width:100%
    }
    .frosted_glass-i{
      margin-top: 30px;
      margin-left: 8vw;
      width: 80vw;
      height: 420px;
    }
    .btn-indexUse-i{
      width: 80vw;
    }
  }
</style>