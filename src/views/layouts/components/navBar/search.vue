<!--  -->
<template>
  <div class='searchBox'>
    <div class="search-bg">洗衣液</div>
    <input type="text" class="search-text" />
    <button class="search-btn">
      <i class="icon-search"></i>
    </button>
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
@import '@/common/styles/base.scss';
.searchBox {
  position: relative;
  width: 486px;
  height: 32px;
  border: 2px solid $--color-primary;
  margin-top: 25px;
  margin-right: 20px;
  .search-bg {
    position: absolute;
    left: 20px;
    top: 5px;
    color: #ccc;
  }
  .search-text {
    width: 425px;
    height: 26px;
    padding: 2px 44px 2px 17px;
    border: none;
  }
  .search-btn {
    position: absolute;
    right: 0;
    height: 30px;
    line-height: 30px;
    width: 80px;
    background-color: #e2231a;
    border: none;
    padding: 0;
    margin: 0;
    color: #fff;
    cursor: pointer;
  }
}
</style>
