<!--  -->
<template>
  <div class="step3-wrap">
    <div style="text-align: center">注册成功</div>
    <div class="btn-login" @click="handleClick(3)">去登陆?</div>
  </div>
</template>

<script>
// import ValidCode from '@/components/ValidCode'

export default {
  data () {
    return {
    }
  },
  components: {
    // ValidCode
  },

  methods: {
    handleClick (data) {
      this.$emit('handleClick', data)
    }
  }
}

</script>
<style scoped lang='scss'>
.step3-wrap {
  margin: 50px auto 186px;
  width: 400px;

  .btn-login {
    width: 100%;
    height: 54px;
    line-height: 54px;
    text-align: center;
    color: #fff;
    background: #e2231a;
    border: 0;
    font-size: 16px;
    font-family: "Microsoft YaHei","Hiragino Sans GB";
    cursor: pointer;
    margin-top: 20px;
    border-radius: 5px;
  }
}
</style>
