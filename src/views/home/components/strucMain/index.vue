<!--  -->
<template>
  <div class="bs w clear">
    <nav-slider-bar></nav-slider-bar>

    <pm-banner />
    <rm-banner />

    <div class="fs-col">
      <user-tool />
      <news-flas />
      <service />
    </div>
  </div>
</template>

<script>
import navSliderBar from './navSliderBar'
import pmBanner from './pmBanner'
import rmBanner from './rmBanner'
import userTool from './userTool'
import newsFlas from './newsFlas'
import service from './service'
export default {
  data () {
    return {

    }
  },
  components: {
    navSliderBar, pmBanner, rmBanner, userTool, newsFlas, service
  },

  methods: {}
}

</script>
<style scoped lang='scss'>
@import '@/common/styles/base.scss';
.bs {
  width: $--wrapper-width;
  padding-top: 10px;
  .fs-col {
    position: relative;
    background-color: #fff;
    float: right;
    width: 190px;
    height: 470px;
    z-index: 1;

  }
}
</style>
