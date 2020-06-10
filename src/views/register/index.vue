<!--  -->
<template>
  <div class='jd-container'>

    <div class="reg-container">
      <header class="header">
        <div class="log0-con">
          <div class="left">
            <a href="#" class="jdLogo"></a>
            <p class="welcome-reg">欢迎注册</p>
          </div>
          <div class="have-occount">
            <span>已有账号?</span>
            <span class="goLogin">请登陆></span>
          </div>
        </div>
      </header>
      <main class="container w">
        <div class="steps">
          <steps :step-list="stepList" :active="active"/>
        </div>
        <step1 v-if="active == 1" @handleClick="handleClick"/>
        <step2 v-if="active == 2" @handleClick="handleClick"/>
        <step3 v-if="active == 3" @handleClick="handleClick"/>
      </main>
    </div>
  </div>
</template>

<script>
import steps from '@/components/steps';
import step1 from './components/step1';
import step2 from './components/step2';
import step3 from './components/step3';
export default {
  data () {
    return {
      stepList: [
        { icon: '', text: '', title: '验证手机号', description: '' },
        { icon: '', text: '', title: '填写账号信息', description: '' },
        { icon: '', text: '', title: '注册成功', description: '' },
      ],
      active: 1
    }
  },
  components: {
    steps, step1, step2, step3
  },

  methods: {
    handleClick (status) {
      this.active ++
      if (status ==3) {
        this.$router.push('/new/login')
      }
    }
  }
}

</script>
<style scoped lang='scss'>
@import '@/common/styles/mixins.scss';
@import '@/common/styles/var.scss';
.reg-container {
  width: 100%;
  height: 100%;
  .header {
    height: 110px;
    border-bottom: 1px solid #ccc;
    box-shadow: 1px 1px 5px 1px rgba(0,0,0,.3);
    .log0-con {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      .left {
        display: flex;
        .jdLogo {
          width: 160px;
          height: 100px;
          display: inline-block;
          background: url('../../assets/jdLogo.jpg') no-repeat;
          background-size: 100% 100%;
        }
        .welcome-reg {
          font-size: 24px;
          color: #333;
          margin-top: 42px;
        }
      }

      .have-occount {
        font-size: $--font-size-medium;
        float: right;
        margin-top: 55px;
        color: #999;
        .goLogin {
          margin-left: 10px;
          color: $--color-primary;
        }
      }
    }
  }
  .container {
    width: 1200px;
    margin-top: 80px;
    .steps {
      width: 400px;
      margin: 0 auto;
    }
  }

}
</style>
