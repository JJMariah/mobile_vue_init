<template>
  <div id="app">
    <router-view/>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="shop">标签</van-tabbar-item>
      <van-tabbar-item icon="chat" dot>标签</van-tabbar-item>
      <van-tabbar-item icon="records" info="5">标签</van-tabbar-item>
      <van-tabbar-item icon="gold-coin" info="20">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: 'App',
  data(){
    return{
      active: 0
    }
  }
}
</script>

<style>
</style>
