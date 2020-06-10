<!--  -->
<template>
  <div class='main-container clear'>
    <struc-main />
    <seckill />
  </div>
</template>

<script>
import strucMain from './components/strucMain'
import seckill from './components/seckill'
export default {
  data () {
    return {

    }
  },
  components: {
    strucMain, seckill
  },

  methods: {}
}

</script>
<style scoped lang='scss'>
@import '@/common/styles/base.scss';
.main-container {
  background-color: $--body-color;
  .aaa {
    height: 500px;
  }
}
</style>
