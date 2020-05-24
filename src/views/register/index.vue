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
        <ul class="jd-timeline">
          <li class="jd-timeline-item pro">
            <div class="jd-timeline-item__node">
              <span class="step-index">{{itemIndex}}</span>
              <p class="step-desc">{{itemLabel}}</p>
            </div>
            <div class="jd-timeline-item__tail"></div>

          </li>
          <li class="jd-timeline-item pro">
            <div class="jd-timeline-item__node">
              <span class="step-index">2</span>
              <p class="step-desc">填写账号信息</p>
            </div>
            <div class="jd-timeline-item__tail"></div>

          </li>
          <li class="jd-timeline-item">
            <div class="jd-timeline-item__node">
              <span class="step-index">3</span>
              <p class="step-desc">注册成功</p>
            </div>

          </li>
        </ul>
        <main class="main">
          <div class="reg-form">
            <form>
              <div class="step-wrap">
                <div class="item-phone-wrap">
                  <div class="form-item form-item-phone">
                    <label class="select-country left" id="select-country" country_id="0086">中国 0086<a href="javascript:void(0) " class="arrow"></a></label>
                    <div class="item-input-wrap left">
                      <input type="text" id="form-phone" maxlength="11" name="phone" class="field" placeholder="建议使用常用手机号" autocomplete="off" default="<i class='i-def'></i>验证完成后，你可以使用该手机登录或找回密码">
                        <i class="i-status"></i>
                        <i class="i-cancel"></i>
                    </div>
                    <div class="input-tip">
                        <span></span>
                    </div>
                  </div>
                </div>
                <div class="item-phonecode-wrap">
                  <div class="form-item form-item-phonecode">
                    <div class="phonecode-left left">
                      <label>手机验证码</label>
                      <input type="text" name="mobileCode" maxlength="6" autocomplete="off" id="phoneCode" class="field phonecode" placeholder="输入验证码">
                      <i class="i-status"></i>
                      <i class="i-cancel"></i>
                    </div>
                    <button id="getPhoneCode" class="btn-phonecode left" type="button">{{getCodeText}}</button>
                    <div class="input-tip">
                        <span></span>
                    </div>

                  </div>
                </div>
              </div>
            </form>
            <div class="audio-tip">收不到短信验证码？点击&nbsp;<span class="get-auth-code" clstag="pageclick|keycount|reg_puser_201804031|13">获取语音验证码</span></div>
            <div class="btn-register">注册</div>
          </div>
        </main>
      </main>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      itemIndex: '1',
      itemLabel: '验证手机号',
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
          background: url('../../../assets/jdLogo.jpg') no-repeat;
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
    @include b (timeline) {
      display: flex;
      justify-content: center;
      .pro {
        margin-right: 110px;
      }
      @include b (timeline-item) {
        position: relative;
        @include e(tail) {
          position: absolute;
          top: 10px;
          left: 55px;
          height: 10px;
          background: url('../../../assets/reg-icon.png') no-repeat;
          width: 124px;
          background-position: 0 -100px;
        }
        @include e (node) {
          text-align: center;
          .step-index {
            color: #fff;
            font-size: 12px;
            background: url('../../../assets/reg-icon.png') no-repeat;
            background-position: 0 -200px;
            display: inline-block;
            width: 24px;
            height: 24px;
            line-height: 24px;
            font-weight: bold;
          }
          .step-desc {
            font-size: 12px;
            color: #999;
            margin-top: 10px;
          }
        }
      }
    }
  }
  .main {
    margin: 50px auto 186px;
    width: 400px;
    .form-item {
      label {
        float: left;
        width: 87px;
        height: 50px;
        line-height: 50px;
        padding-left: 20px;
      }
    }
    .item-phone-wrap{
      position: relative;
      width: 398px;
      height: 86px;
      z-index: 0;
      .form-item {
        label {
          float: left;
          width: 87px;
          height: 50px;
          line-height: 50px;
        }
        .item-input-wrap {
          width: 308px;
          height: 50px;
          border: 1px solid rgb(221, 221, 221);
          #form-phone {
            border: 0 none;
            font-size: 14px;
            width: 190px;
            padding-bottom: 11px;
            padding-left: 20px;
            padding-top: 16px;
          }
        }
      }

      .select-country {
        padding: 0 0 0 20px;
        cursor: pointer;
        border-top: 1px solid rgb(221, 221, 221);
        border-right: none rgb(221, 221, 221);
        border-bottom: 1px solid rgb(221, 221, 221);
        border-left: 1px solid rgb(221, 221, 221);
        border-image: initial;
      }

    }
    .form-item-phonecode {
      .phonecode-left {
        border: solid 1px #ddd;
        border-color: rgb(221, 221, 221);
        border-right-width: 1px;
        border-right-style: solid;
        .phonecode {
          border: 0 none;
          font-size: 14px;
          width: 190px;
          padding-bottom: 11px;
          padding-left: 20px;
          padding-top: 16px;
        }
      }
      .btn-phonecode {
        cursor: pointer;
        float: left;
        width: 118px;
        height: 52px;
        border: 1px solid #ddd;
        border-left: none;
        background: #fff;
        color: #333;
        padding: 0;
      }

    }
    .audio-tip {
      padding-top: 60px;
      text-align: right;
      font-size: 12px;
      .get-auth-code {
        color: #06c;
        cursor: pointer;
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
}
</style>
