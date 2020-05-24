<!--  -->
<template>
  <div class='jd-container'>
    <div class="login-container">
      <header class="header">
        <div class="logo-con">
          <div class="left">
            <a href="#" class="jdLogo"></a>
            <p class="welcome-reg">欢迎登录</p>
          </div>
          <div class="have-occount">
            <a href="#">登录页面，调查问卷</a>
          </div>
        </div>
      </header>
      <div class="tips-wrapper">
        <p>依据《网络安全法》，为保障您的账户安全和正常使用，请尽快完成手机号验证！ 新版
          <span style="color: #000">《京东隐私政策》</span>
          已上线，将更有利于保护您的个人隐私。</p>
      </div>
      <main class="login-wrap">
        <div class="login-container w">
          <div class="login-form right">
          <div class="tips-wrapper">
            <div class="tips-inner">
              京东不会以任何理由要求您转账汇款，谨防诈骗。
            </div>
          </div>
          <form class="login-box">
            <h2 class="login-text">账号登录</h2>
            <div class="item-fore">
              <label>用户名</label>
              <input type="text" class="userName">
            </div>
            <div class="item-fore">
              <label>密码</label>
              <input type="text" class="password">
            </div>
            <p style="text-align: right;margin-bottom: 20px">忘记密码</p>
            <div class="login-btn">
              登&nbsp;录
            </div>
          </form>
        </div>
        </div>
        <div class="login-banner">
          <div class="banner-bg w"></div>
        </div>
      </main>
      <footer class="footer">
        <div>
          <div class="links">
              <a rel="nofollow" target="_blank" href="//about.jd.com/">
                  关于我们
              </a>
              |
              <a rel="nofollow" target="_blank" href="//www.jd.com/contact/">
                  联系我们
              </a>
              |
              <a rel="nofollow" target="_blank" href="//zhaopin.jd.com/">
                  人才招聘
              </a>
              |
              <a rel="nofollow" target="_blank" href="//lai.jd.com/">
                  商家入驻
              </a>
              |
              <a rel="nofollow" target="_blank" href="//jzt.jd.com/">
                  广告服务
              </a>
              |
              <a rel="nofollow" target="_blank" href="//app.jd.com/">
                  手机京东
              </a>
              |
              <a target="_blank" href="//club.jd.com/links.aspx">
                  友情链接
              </a>
              |
              <a target="_blank" href="//media.jd.com/">
                  销售联盟
              </a>
              |
              <a href="//pro.jd.com/mall/active/3WA2zN8wkwc9fL9TxAJXHh5Nj79u/index.html" target="_blank">
                  京东社区
              </a>
              |
              <a href="//gongyi.jd.com" target="_blank">
                  京东公益
              </a>
              |
              <a target="_blank" href="//www.joybuy.com/" clstag="pageclick|keycount|20150112ABD|9">English Site</a>
          </div>
          <div class="copyright">
              Copyright&nbsp;&copy;&nbsp;2004-2020&nbsp;&nbsp;京东JD.com&nbsp;版权所有
          </div>
      </div>
      </footer>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      getCodeText: "获取验证码"
    }
  },
  components: {
  },

  methods: {}
}

</script>
<style scoped lang='scss'>
@import '@/common/styles/mixins.scss';
@import '@/common/styles/var.scss';
.login-container {
  width: 100%;
  height: 100%;
  .header {
    height: 90px;
    .logo-con {
      width: 1000px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      .left {
        display: flex;
        .jdLogo {
          width: 160px;
          height: 80px;
          display: inline-block;
          background: url('../../../assets/jdLogo.jpg') no-repeat;
          background-size: 100% 100%;
        }
        .welcome-reg {
          font-size: 24px;
          color: #333;
          margin-top: 28px;
        }
      }

      .have-occount {
        font-size: $--font-size-medium;
        float: right;
        margin-top: 55px;
        color: #999;

      }
    }
  }
  .tips-wrapper {
    background: #fff8f0;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    color: #999;
  }
  .login-wrap {
    width: 100%;
    height: 475px;
    position: relative;
    .login-container {
      width: 1000px;
      .login-form {
        position: relative;
        right: 0;
        top: 10px;
        width: 346px;
        z-index: 99;
        .login-box {
          padding: 20px;
          background-color: #fff;
          .login-text {
            font-weight: 700;
            color: #e4393c;
            font-size: 24px;
            margin-bottom: 20px;
            text-align: center;
          }
          .item-fore {
            position: relative;
            margin-bottom: 20px;
            border: 1px solid #bdbdbd;
            height: 38px;
            width: 304px;
            label {
              position: absolute;
              left: 0;
              top: 0;
              display: inline-block;
              text-align: center;
              height: 38px;
              line-height: 38px;
              width: 65px;
              padding: 0px 10px;
              border-right: 1px solid #ccc;
            }
            input {
              line-height: 18px;
              height: 36px;
              padding-left: 80px;
              border: 0;
              width: 254px;
              float: none;
              overflow: hidden;
              font-size: 14px;
              font-family: '\5b8b\4f53';
            }
          }
          .login-btn {
            border: 1px solid #cb2a2d;
            margin: 0 auto;
            height: 32px;
            width: 99%;
            position: relative;
            background-color: #cb2a2d;
            border-radius: 5px;
            text-align: center;
            line-height: 32px;
            color: #fff;
            font-weight: 400;
            font-size: 18px;
          }
        }

      }
    }

    .login-banner {
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background-color: #ffdddc;
      height: 475px;
      .banner-bg {
        height: 475px;
        width: 1000px;
        background: url(//img20.360buyimg.com/da/jfs/t1/126383/10/2147/38630/5ec3443aE9b440418/09bee17757d755cd.jpg) 0px 0px no-repeat;
      }
    }
  }
  .footer {
    text-align: center;
    margin-top: 20px;
    .copyright {
      margin-top: 10px;
    }
    a {
      margin: 0 5px;
    }
  }

}
</style>
