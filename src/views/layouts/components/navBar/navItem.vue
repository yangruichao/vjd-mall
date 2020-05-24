<!--  -->
<template>
  <div class="navitems">
    <ul class="navitemsBox">
      <li>
        <a href class="navitems-lk">家电告白节</a>
      </li>
      <li>
        <a href class="navitems-lk">家电告白节</a>
      </li>
      <li>
        <a href>
          家电告白节
          <img
            class="hotImg"
            src="https://m.360buyimg.com/babel/jfs/t1/114552/40/7513/819/5ec47d43E45a861f6/ec964b5d5aa85530.png"
            alt
          />
        </a>
      </li>
      <li>
        <a href>家电告白节</a>
      </li>
    </ul>
  </div>
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
.navitems {
  position: relative;
  left: -50px;
  height: 40px;
  .navitemsBox {
    display: flex;
    a {
      position: relative;
      display: inline-block;
      height: 40px;
      line-height: 40px;
      font-size: 15px;
      color: #333;
      margin: 0 11px;
      -webkit-transition: color 0.2s ease;
      transition: color 0.2s ease;
      .hotImg {
        position: absolute;
        top: -5px;
        left: 100%;
        margin-left: -13px;
        width: 28px;
        height: 15px;
      }
    }
    .navitems-lk {
      color: #e2231a;
      font-weight: 700;
    }
  }
}
</style>
