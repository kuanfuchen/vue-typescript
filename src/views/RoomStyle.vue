<template>
  <div style="background-color: #F7F2EE;">
    <div class="bannerBg">
      <div class="bannerGray">
        <Navbar />
        <div class="d-flex justify-content-center" >
          <div class="bannerTextGroup">
            <div class="bannerText1">
              <div class="bannerTextColor bannerTextStyle roomTextSize1">享樂酒店</div>
              <div class="bannerTextStyle bannerTextColor roomTextSize2">Enjoyment Luxury Hotel</div>
              <div class="banner-gradientLine"></div>
            </div>
            <div class="bannerTextStyle roomTextSize1" style="color:#ffffff;">
              客房旅宿
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="roomdisplayInfo mx-auto" >
      <div class="titleDistance">
        <div class="bannerTextStyle roomTextSize2">房型選擇</div>
        <div class="bannerTextStyle roomTitle roomTextSize1" >各種房型，任您挑選</div>
      </div>
      <div class="card roomdisplayCardInfo mx-auto mb-2" v-for="(items, key) in roomData" :key="key" >
        <div class="g-0 roomFlexReg">
          <!-- <div class=" "> -->
            <!--  justify-content-center -->
            <div  :id="items.title" class="carousel slide d-flex justify-content-center" >
              <div class="carousel-inner">
                <div class="displayRoomImg">
                  <div class="carousel-item" v-for="(img, index) in items.img" :key="index" :class="{active:index===0?true:false}" >
                    <img :src="getImg(img)" class="d-block img-style" >
                  </div>
                </div>
              </div>
              <div>
                <button class="carousel-control-prev btn btn-primary ms-3" type="button" :data-bs-target="'#' + items.title" data-bs-slide="prev">
                  <img src="../assets/room/icon/ic_arrow left.svg" alt="" srcset="">
                </button>
                <button class="carousel-control-next me-3" type="button" :data-bs-target="'#' + items.title" data-bs-slide="next">
                  <img src="../assets/room/icon/ic_arrow Right.svg" alt="">
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          <!-- </div> -->
          <div style="min-width:27vw">
          <div class="card-body my-auto">
            <div class="mx-auto" style="height: 100%;">
              <h5 class="bannerTextStyle roomTextSize1" >{{ items.title }}</h5>
              <div class="roomTextSize3">{{ items.contentTitle }}</div>
            </div>
            <div class="roomInfoBtnStyle">
              <button class="roomBtn roomTextSize3 mt-5 ">
                <img class="ms-0" src="../assets/room/icon/ic_Size.png" alt="" srcset="">
                <p class="mt-2">{{ items.size }}</p>
              </button>
              <button class="roomBtn roomTextSize3 ms-3 mt-5">
                <img  src="../assets/room/icon/ic_Bed.png"  alt="" >
                <p class="mt-2">{{ items.bed }}</p>
              </button>
              <button class="roomBtn roomTextSize3 ms-3 mt-5">
                <img src="../assets/room/icon/ic_Person.png" alt="" >
                <p class="mt-2">{{ items.person }}</p>
              </button>
            </div>
            <div class="card_btn_underline pt-5">
              <div class="card_btn_gradientLine"></div>
            </div>
            <div class="d-flex justify-content-between pt-5">
              <div class="bannerTextStyle roomTitleSmall roomTitle">{{ items.price }}</div>
              <button class="btn btn-arrow">
                <img src="../assets/room/icon/ic_ArrowRight.png" alt="" srcset="">
              </button>
            </div>
          </div>
            
          </div>
          
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script setup lang="ts">
  import Navbar from '../components/Navbar.vue';
  import Footer from '../components/Footer.vue';
  import {reactive} from 'vue';
  type Room = {
    img:string[],
    title:string,
    contentTitle:string,
    size:string,
    bed:string,
    person:string,
    price:string
  }
  const getImg = (name:string)=>{
    // return new URL(name, import.meta.url).href;
    return new URL(`../assets/room/pc/${name}.png`, import.meta.url).href;
  }
  const roomData:Room[]=reactive([{
    img:[ 'room2-1', 'room2-2', 'room2-3', 'room2-4','room2-5'],
    title:'尊爵雙人房',
    contentTitle:'享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。',
    size:'24坪',
    bed:'1張大床',
    person:'2-4人',
    price:'NT$ 10,000'
  },{
    img:['room3-1', 'room3-2', 'room3-3', 'room3-4','room3-5'],
    title:'景觀雙人房',
    contentTitle:'景觀雙人房擁有絕美的高雄市景觀，讓您在舒適的環境中欣賞城市之美。',
    size:'28坪',
    bed:'1張大床',
    person:'2-4人',
    price:'NT$ 10,000'
  },{
    img:['room4-1', 'room4-2', 'room4-3', 'room4-4','room4-5'],
    title:'豪華雅緻房',
    contentTitle:'享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。',
    size:'36坪',
    bed:'1張大床',
    person:'2-4人',
    price:'NT$ 20,000'
  },{
    img:['room5-1', 'room5-2', 'room5-3', 'room5-4','room5-5'],
    title:'景觀尊榮家庭房',
    contentTitle:'景觀尊榮家庭房不僅有寬敞的空間，還有絕美的市景視野，是帶給家庭最尊榮的待遇。',
    size:'48坪',
    bed:'2張大床',
    person:'2-4人',
    price:'NT$ 20,000'
  }]);
</script>
<style scope>
  .bannerBg{
    background-image: url('../assets/room/pc/banner-pc.png');
    background-size: cover;
    background-position: center;
    height: 800px;
  }
  .bannerTextGroup{
    width: 40.625vw;
    padding-top: 217px;
    display:flex;
    justify-content: space-between;
    align-items: end;

  }
  .bannerTextStyle{
    font-family:'Noto Serif TC';
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 5%;
  }
  .bannerTextColor{
    color: #BF9D7D;
  }
  .bannerText1, .card_btn_underline{
    position: relative;
  }
  .banner-gradientLine, .card_btn_gradientLine{
    position: absolute;
    width: 26vw;
    height: 2px;
    background-image: linear-gradient(to right, #BE9C7C, #ffffff);
  }
  .bannerGray{
    background-color: rgba(0, 0, 0, 0.6);
    height: 800px;
  }
  .roomTitle{
    color: #BF9D7D;
  }
  
  .titleDistance{
    margin-top: 100px;
    margin-bottom: 80px;
  }
  .carousel{
    position: relative;
  }
  .carousel-control-prev, .carousel-control-next{
    position: absolute;
    width:56px;
    height: 56px;
    border-radius: 50%;
    background-color: #ffffff;
    top: calc(50% - 28px);
  }
  
  .roomdisplayInfo{
    max-width:70vw;
  }
  .roomdisplayCardInfo{
    width:70vw;
    border-radius: 20px;
    border: 1px solid #fff;
  }
  
  .roomTextSize1{
    font-size: 40px;
  }
  .roomTextSize2{
    font-size: 24px;
  }
  .roomTextSize3{
    font-size: 16px;
    font-family:'Noto Serif TC';
    font-weight: 500;
    line-height: 24px;
    color: #909090;
  }
  .roomBtn{
    background:transparent;
    border-radius: 8px;
    border: 1px solid #F1EAE4;
    padding:16px;
    width: 97px;
    height: 97px;
  }
  .btn-arrow{
    border: 0;
  }
  .roomFlexReg{
    display: flex;
  }
  .img-style{
    border-radius: 20px 0  0 20px;
    max-width:41vw;
    /* height: 480px; */
  }
  .roomInfoBtnStyle{
    display: flex;
    justify-content: start;
  }
  @media(max-width:1200px){
    .roomTextSize3{
      font-size: 12px;
    }
    .roomdisplayInfo{
      max-width:85vw;
    }
    .roomdisplayCardInfo{
      width: 80vw;
    }
  }
  @media(max-width:576px){
    .bannerBg{
      background-image: url('../assets/room/mobile/banner.png');
      background-position:top ;
      height: 470px;
    }
    .bannerGray{
      height: 470px;
    }
    .bannerTextGroup{
      width: 100vw;
      padding-top: 40px;
      text-align: center;
      display: block;
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
    .roomTextSize1{
      font-size: 28px;
      line-height: 34px;
    }
    .roomTextSize2{
      font-size: 16px;
      line-height: 24px;
    }
    .titleDistance{
    margin-top: 40px;
    margin-bottom: 40px;
  }
  .roomFlexReg{
    display:block;
    /* width: 80vw; */
  }
  .img-style{
    border-radius: 0;
    min-width:99vw;
    height: 100%;
    object-fit: contain;
  }
  .roomInfoBtnStyle{
    justify-content: center;
  }
  .card_btn_gradientLine{
    width:90vw
  }
  .roomdisplayInfo{
    max-width:100vw;
  }
  .roomdisplayCardInfo{
    min-width: calc(100vw - 20px);
  }
}
</style>
