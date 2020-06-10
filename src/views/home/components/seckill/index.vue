<!--  -->
<template>
  <div class='seckill w clear'>
    <count-down />
    <seckill-list />
  </div>
</template>

<script>
import countDown from './countdown';
import seckillList from './seckill-list'
export default {
  data () {
    return {

    }
  },
  components: {
    countDown, seckillList
  },

  methods: {}
}

</script>
<style scoped lang='scss'>
@import '@/common/styles/base.scss';
.seckill {
  width: $--wrapper-width;
  height: 260px;
  margin-bottom: 20px;
  margin-top: 20px;


}
</style>
