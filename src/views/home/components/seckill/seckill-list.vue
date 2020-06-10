<!--  -->
<template>
  <ul class="seckill-list">
    <li class="seckill-item">
      <a href="">
        <div class="seckill-item__image">
          <img src="//img11.360buyimg.com/mobilecms/s130x130_jfs/t1/114013/13/6369/149420/5eb8fef8Ea1c31f0d/a3946be901fd1d5a.jpg.webp" alt="">
        </div>
        <h6 class="seckill-item__name">【 100%纯手工制作-送礼佳品】【非遗传承木叶盏-美人盏套装】建阳建盏天然铁胎品质茶盏主人杯礼盒装 非遗传承-木叶盏套装</h6>
        <div class="seckill-item__price">
          <span class="price-miaosha">
            <i>¥</i>
            <span>799.00</span>
          </span>
          <span class="price-origin">
            <i>¥</i>
            <span>2599.00</span>
          </span>
        </div>
      </a>
    </li>
    <li class="seckill-item">
      <a href="">
        <div class="seckill-item__image">
          <img src="//img14.360buyimg.com/mobilecms/s140x140_jfs/t1/122956/20/2128/117527/5ec33cb1Ec43d4b0f/56c2b24578286bbf.jpg.webp" alt="">
        </div>
        <h6 class="seckill-item__name">【 100%纯手工制作-送礼佳品】【非遗传承木叶盏-美人盏套装】建阳建盏天然铁胎品质茶盏主人杯礼盒装 非遗传承-木叶盏套装</h6>
        <div class="seckill-item__price">
          <span class="price-miaosha">
            <i>¥</i>
            <span>799.00</span>
          </span>
          <span class="price-origin">
            <i>¥</i>
            <span>2599.00</span>
          </span>
        </div>
      </a>
    </li>
    <li class="seckill-item">
      <a href="">
        <div class="seckill-item__image">
          <img src="//img30.360buyimg.com/mobilecms/s140x140_jfs/t1/114630/26/7566/75100/5ec3893bE53242aa1/68def72ea9344974.png.webp" alt="">
        </div>
        <h6 class="seckill-item__name">【 100%纯手工制作-送礼佳品】【非遗传承木叶盏-美人盏套装】建阳建盏天然铁胎品质茶盏主人杯礼盒装 非遗传承-木叶盏套装</h6>
        <div class="seckill-item__price">
          <span class="price-miaosha">
            <i>¥</i>
            <span>799.00</span>
          </span>
          <span class="price-origin">
            <i>¥</i>
            <span>2599.00</span>
          </span>
        </div>
      </a>
    </li>
    <li class="seckill-item">
      <a href="">
        <div class="seckill-item__image">
          <img src="//img13.360buyimg.com/mobilecms/s140x140_jfs/t1/111515/27/6616/123327/5ebbb5a4Ed51ec53c/ce7791ab695b89e4.jpg.webp" alt="">
        </div>
        <h6 class="seckill-item__name">【 100%纯手工制作-送礼佳品】【非遗传承木叶盏-美人盏套装】建阳建盏天然铁胎品质茶盏主人杯礼盒装 非遗传承-木叶盏套装</h6>
        <div class="seckill-item__price">
          <span class="price-miaosha">
            <i>¥</i>
            <span>799.00</span>
          </span>
          <span class="price-origin">
            <i>¥</i>
            <span>2599.00</span>
          </span>
        </div>
      </a>
    </li>
  </ul>
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
.seckill-list {
  position: relative;
  float: left;
  width: 800px;
  height: 100%;
  overflow: hidden;
  background-color: #fff;
  margin: 0 10px;
  .seckill-item {
    position: relative;
    width: 200px;
    height: 100%;
    float: left;
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      right: 0;
      width: 1px;
      height: 200px;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      background: -webkit-gradient(linear,left top,left bottom,from(white),color-stop(#eeeeee),to(white));
      background: linear-gradient(180deg,white,#eeeeee,white);
    }
    a {
      display: inline-block;
      width: 100%;
      height: 100%;
      .seckill-item__image {
        width: 140px;
        height: 140px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 30px;
        img {
          width: 100px;
          height: 100px;
        }
      }
      .seckill-item__name {
        width: 160px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 13px;
        font-size: 12px;
        font-weight: 400;
        color: #333;
        -webkit-transition: color .2s ease;
        transition: color .2s ease;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .seckill-item__price {
        border: 1px solid #e1251b;
        position: relative;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        line-height: 24px;
        overflow: hidden;
        background-color: #e1251b;
        width: 160px;
        height: 24px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 7px;
        i {
          font-size: 12px;
          font-weight: 400;
          padding-right: 5px;
        }
        .price-miaosha {
          width: 92px;
          height: 100%;
          text-align: center;
          color: #fff;
          font-size: 16px;
          font-weight: 700;
          line-height: 22px;
          float: left;
          &::before {
            content: " ";
            width: 0;
            height: 0;
            border-color: transparent white transparent transparent;
            border-style: solid;
            border-width: 22px 8px 0 0;
            position: absolute;
            top: 0;
            left: 84px;
          }
        }
        .price-origin {
          height: 100%;
          width: 66px;
          float: right;
          background: #fff;
          text-align: center;
          color: #999;
          font-size: 12px;
          line-height: 22px;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          text-decoration: line-through;
          vertical-align: top;
        }
      }

    }

  }
}
</style>
