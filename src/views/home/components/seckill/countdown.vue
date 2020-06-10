<!--  -->
<template>
  <a class="seckill-countdown">
    <div class="seckill-title">京东秒杀</div>
    <div>
      <div class="countdown-desc">
        <strong>16:00</strong>
        点场 倒计时
      </div>
      <div class="timmer countdown-main">
        <span class="timmer__unit timmer__unit--hour">01</span>
        <span class="timmer__unit timmer__unit--minute">02</span>
        <span class="timmer__unit timmer__unit--second">03</span>
      </div>
    </div>
  </a>
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
.seckill-countdown {
  position: relative;
  float: left;
  width: 190px;
  height: 100%;
  color: #fff;
  background-color: #e83632;
  background-image: url('../../../../assets/4a15d8883775742e3efbb850ae14def7.png');
  background-size: contain;
  background-position: 50%;
  background-repeat: no-repeat;
  .seckill-title {
    width: 100%;
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    margin-top: 31px;
  }
  .countdown-desc {
    margin-top: 120px;
    font-size: 14px;
    text-align: center;
    strong {
      font-size: 22px;
      padding-right: 2px;
      vertical-align: middle;
      display: inline-block;
      margin-top: -1px;
    }
  }
  .countdown-main {
    width: 100%;
    height: 30px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    .timmer__unit {
      position: relative;
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      background-color: #2f3430;
      margin: 0 10px;
      color: white;
      font-size: 20px;
    }
    .timmer__unit--hour,  .timmer__unit--minute{
      &::after {
        content: ":";
        display: block;
        position: absolute;
        right: -20px;
        font-weight: bolder;
        font-size: 18px;
        width: 20px;
        height: 100%;
        top: 0;
      }
    }
  }
}
</style>
