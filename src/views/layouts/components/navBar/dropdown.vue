<!--  -->
<template>
  <div class="dropdown">
    <span class="shoppingBox">
      <i class="icon-shoppingcard" style="margin-right: 15px"></i>
      <span class="count">0</span>
    </span>
    购物车
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
.dropdown {

  width: 130px;
  height: 34px;
  cursor: pointer;
  background-color: #fff;
  text-align: center;
  line-height: 34px;
  border-color: #eee;
  border: 1px solid #ccc;
  color: #e2231a;
  margin-top: 25px;
  .shoppingBox {
    position: relative;
  }
  .count {
    position: absolute;
    left: 12px;
    right: auto;
    display: inline-block;
    padding: 1px 3px;
    font-size: 12px;
    line-height: 12px;
    color: #fff;
    background-color: #e1251b;
    border-radius: 7px;
    min-width: 12px;
    text-align: center;
  }
}
</style>
