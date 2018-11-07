<template>
  <div class="hello">
    <div class="bshare-custom">
      <a title="更多平台" class="bshare-more bshare-more-icon more-style-addthis"></a>
      <span class="BSHARE_COUNT bshare-share-count">0</span>
    </div>
    
    <a class="bshareDiv" onclick="javascript:return false;"></a>
    
  </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
