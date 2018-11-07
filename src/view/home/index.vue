<template>
    <div>
        <van-notice-bar
  text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。"
  left-icon="https://img.yzcdn.cn/1.png"  :scrollable="true"/>
        <van-swipe :autoplay="3000" :height='300'>
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image" :src='image' />
            </van-swipe-item>
        </van-swipe>
    </div>    
</template>
<script>
  export default{
      data(){
          return{
            images: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541568527888&di=7800139598ee2da4a67dce4d6d1949c7&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F018c985837fb53a801219c77022553.jpg%402o.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541568553430&di=b8061bf7816f8a827d65a5cc637291e9&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01511c57f9fc0ea84a0d304f5dc0c0.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541568553429&di=b681866d239e8aea7cdf71cbf22adad4&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0154a0577d032c0000012e7e866e9f.jpg%401280w_1l_2o_100sh.jpg']
          }
      }
  }   
</script>
<style>
img{
    width:100%;
    height:100%;
}
</style>