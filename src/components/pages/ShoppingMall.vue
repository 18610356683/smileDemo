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
                    <img :src="banner.imageUrl" width="100%">
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'Shopping Mall',
                locationIcon: require('../../assets/images/location.png'),
                bannerPicArray: [
                    {imageUrl:'https://img.alicdn.com/simba/img/TB1CmclmCf2gK0jSZFPSutsopXa.jpg'},
                    {imageUrl:'https://img.alicdn.com/simba/img/TB1C04Xmbr1gK0jSZR0SuvP8XXa.jpg'},
                    {imageUrl:'https://img.alicdn.com/simba/img/TB1i1SClXY7gK0jSZKzSuuikpXa.jpg'},
                ]
            }
        },
    }
</script>

<style scoped>
    .search-bar{
        height: 2.2rem;
        background-color: #e5017d;
        line-height: 2.2rem;
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
    }
</style>