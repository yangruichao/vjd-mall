<!--  -->
<template>
  <div class='main-container clear'>
    <struc-main />
  </div>
</template>

<script>
import strucMain from './components/strucMain'
export default {
  data () {
    return {

    }
  },
  components: {
    strucMain
  },

  methods: {}
}

</script>
<style scoped lang='scss'>
@import '@/common/styles/base.scss';
.main-container {
  background-color: $--body-color;
}
</style>
