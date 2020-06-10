<!--  -->
<template>
  <div class="step2-wrap">
    <div class="reg-form">
      <form>
        <div class="form-item">
          <div>
            <label>用户名</label>
            <input type="text" name="mobileCode" maxlength="6" autocomplete="off" id="phoneCode" class="field" placeholder="您的账户名和登录名">
          </div>
        </div>
        <div class="form-item">
          <div>
            <label>设置密码</label>
            <input type="text" name="mobileCode" maxlength="6" autocomplete="off" id="phoneCode" class="field" placeholder="请输入密码">
          </div>
        </div>
        <div class="form-item">
          <div>
            <label>确认密码</label>
            <input type="text" name="mobileCode" maxlength="6" autocomplete="off" id="phoneCode" class="field" placeholder="请再次输入密码">
          </div>
        </div>
      </form>
      <div class="btn-register" @click="handleClick(2)">立即注册</div>
    </div>
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
.step2-wrap {
  margin: 50px auto 186px;
  width: 400px;
  .form-item {
    position: relative;
    border: solid 1px #ddd;
    width: 398px;
    height: 52px;
    margin-bottom: 30px;
    label {
      float: left;
      width: 87px;
      height: 50px;
      line-height: 50px;
      padding-left: 20px;
    }
    .field {
      border: 0 none;
      font-size: 14px;
      width: 190px;
      height: 50px;
      line-height: 50px;
      padding-left: 20px;
    }
  }

  .btn-register {
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
