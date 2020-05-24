<!--  -->
<template>
  <header class="header">
    <div class="warpper w">
      <logo class="left"/>
      <div class="right ">
        <div class="nav-top">
          <search />
          <drop-down />
        </div>
        <div class="nav-bottom">
          <hot-word />
          <nav-item />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import logo from './logo'
import search from './search'
import dropDown from './dropdown'
import hotWord from './hotword'
import navItem from './navItem'
export default {
  data () {
    return {

    }
  },
  components: {
    logo, search, dropDown, hotWord, navItem
  },

  methods: {}
}

</script>
<style scoped lang='scss'>
@import '@/common/styles/base.scss';
.warpper {
  height: 140px;
  width: $--wrapper-width;
  display: flex;
  .right {
    flex: 1;
    .nav-top {
      display: flex;
    }
  }
}
</style>
