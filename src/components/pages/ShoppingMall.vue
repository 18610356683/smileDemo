<template>
    <div>
        <div class="search-bar">
            <van-row>
                <van-col span="3">
                    <img :src="locationIcon" width="80%" class="location-icon"/>
                </van-col>
                <van-col span="16">
                    <input type="text" class="search-input">
                </van-col>
                <van-col span="5">
                    <van-button size="mini">查找</van-button>
                </van-col>
            </van-row>
        </div>
        <!-- swiper Area -->
        <div class="swiper-area">
            <van-swipe :autoplay='1000'>
                <van-swipe-item v-for="(banner, index) in bannerPicArray" :key="index">
                    <img v-lazy="banner.image" width="100%">
                </van-swipe-item>
            </van-swipe>
        </div>
        <!-- type bar -->
        <div class="type-bar">
            <div v-for="(cate, index) in category" :key="index">
                <img v-lazy="cate.image" width="90%">
                <span>{{ cate.mallCategoryName }}</span>
            </div>
        </div>
        <!-- adBanner area -->
        <div>
            <img v-lazy="adBanner" width="100%">
        </div>

    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                msg: 'Shopping Mall',
                locationIcon: require('../../assets/images/location.png'),
                bannerPicArray: [],
                category:[],
                adBanner:'',
            }
        },
        created(){
            axios({
                url: 'https://www.fastmock.site/mock/b9c8a504788477a8385115496624bea2/smileVue/index',
                method: 'get',
            })
            .then(response=>{
                console.log(response)
                if(response.status == 200){
                    this.category = response.data.data.category;
                    this.adBanner = response.data.data.advertesPicture.PICTURE_ADDRESS;
                    this.bannerPicArray = response.data.data.slides;
                }
            })
            .catch(error=>{
                console.log(error)
            })
        },
    }
</script>

<style scoped>
    .search-bar{
        height: 2.2rem;
        background-color: #e5017d;
        line-height: 2.2rem;
        overflow: hidden;
    }
    .search-input{
        width: 100%;
        height: 1.3rem;
        line-height: 1.3rem;
        border-top:0;
        border-left: 0;
        border-right: 0;
        border-bottom: 1px solid #fff;
        background-color: #e5017d;
        color: #fff;
    }
    .location-icon{
        padding-top: .2rem;
        padding-left: .3rem;
    }
    .swiper-area{
        clear: both;
        max-height: 12rem;
        overflow: hidden;
    }
    .type-bar{
        background-color: #fff;
        margin: 0 .3rem .3rem .3rem;
        border-radius: .3rem;
        font-size: 14px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
    .type-bar div{
        padding: .3rem;
        font-size: 12px;
        text-align: center;
    }
</style>