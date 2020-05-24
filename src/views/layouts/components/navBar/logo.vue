<!--  -->
<template>
  <div class="log">
    <h1 style="display: none">京东</h1>
    <a href="/" class="logo-image"></a>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {},

  methods: {}
}

</script>
<style scoped lang='scss'>
.log {
  display: flex;
  align-items: center;
  width: 190px;
  height: 100%;
  margin-right: 50px;
  .logo-image {
    display: flex;
    background: url("//misc.360buyimg.com/mtd/pc/index_2019/1.0.0/assets/sprite/header/sprite.png");
    background-position: 0 0;
    background-repeat: no-repeat;
    display: block;
    width: 190px;
    height: 120px;
    font-size: 0;
  }
}
</style>
