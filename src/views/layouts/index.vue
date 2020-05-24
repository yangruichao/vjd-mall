<!--  -->
<template>
  <div class='jd-container'>
    <!-- 商城简介 -->
    <short-cut></short-cut>
    <!--  -->
    <nav-bar></nav-bar>
    <!-- 主体内容  -->
    <page-main></page-main>
  </div>
</template>

<script>
import shortCut from './components/shortCut'
import navBar from './components/navBar'
import pageMain from './components/pageMain'
export default {
  data () {
    return {

    }
  },
  components: {
    shortCut, navBar, pageMain
  },

  methods: {}
}

</script>
<style scoped lang='scss'>

</style>
