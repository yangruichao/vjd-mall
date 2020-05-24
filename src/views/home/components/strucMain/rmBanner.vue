<!--  -->
<template>
  <div class="sliderRecommendWrapper">
    <ul>
      <li>
        <a href>
          <img class="recomerImg" src="//img14.360buyimg.com/pop/s380x300_jfs/t1/114074/4/5001/38049/5eb1823fE56dab1b3/a53813c752c2d33c.png.webp" alt="">
        </a>
      </li>
      <li>
        <a href>
          <img class="recomerImg" src="//img13.360buyimg.com/babel/s380x300_jfs/t1/123433/3/2336/65458/5ec4e2e8Ecf0b1901/85a59a746812f567.jpg.webp" alt="">
        </a>
      </li>
      <li>
        <a href>
          <img class="recomerImg" src="//img11.360buyimg.com/babel/s380x300_jfs/t1/129450/20/2434/59337/5ec4e267E08954f09/c6d282ca5fb7fda3.jpg.webp" alt="">
        </a>
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
.sliderRecommendWrapper {
  float: left;
  position: relative;
  transition: opacity 300ms ease-in-out 0s;
  width: 190px;
  left: 0px;
  opacity: 1;
  z-index: 1;
  .recomerImg {
    height: 150px;
    display: block;
    margin-bottom: 10px;
  }
}
</style>
