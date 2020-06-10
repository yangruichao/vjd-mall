<!--  -->
<template>
  <div class="step1-wrap">
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
      <div class="btn-register" @click="handleClick(1)">下一步</div>
    </div>
  </div>
</template>

<script>
// import ValidCode from '@/components/ValidCode'

export default {
  data () {
    return {
      getCodeText: '点击获取验证码'
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
.step1-wrap {
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
</style>
