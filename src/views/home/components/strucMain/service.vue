<!--  -->
<template>
  <div class='service left'>
    <ul class="service_list">
      <li class="service_item left">
        <a href="" class="service_lk">
          <i class="serviceIcon icon-huafei"></i>
          <span class="service_text">话费</span>
        </a>
      </li>
      <li class="service_item left">
        <a href="" class="service_lk">
          <i class="serviceIcon icon-jipiao"></i>
          <span class="service_text">机票</span>
        </a>
      </li>
      <li class="service_item left">
        <a href="" class="service_lk">
          <i class="serviceIcon icon-Artboard"></i>
          <span class="service_text">酒店</span>
        </a>
      </li>
      <li class="service_item left">
        <a href="" class="service_lk">
          <i class="serviceIcon icon-youxi"></i>
          <span class="service_text">游戏</span>
        </a>
      </li>
      <li class="service_item left">
        <a href="" class="service_lk">
          <i class="serviceIcon icon-jiayouka"></i>
          <span class="service_text">加油卡</span>
        </a>
      </li>
      <li class="service_item left">
        <a href="" class="service_lk">
          <i class="serviceIcon icon-huoche"></i>
          <span class="service_text">火车票</span>
        </a>
      </li>
      <li class="service_item left">
        <a href="" class="service_lk">
          <i class="serviceIcon icon-zhongchou-e"></i>
          <span class="service_text">众筹</span>
        </a>
      </li>
      <li class="service_item left">
        <a href="" class="service_lk">
          <i class="serviceIcon icon-licai"></i>
          <span class="service_text">理财</span>
        </a>
      </li>
      <li class="service_item left">
        <a href="" class="service_lk">
          <i class="serviceIcon icon-baitiao"></i>
          <span class="service_text">白条</span>
        </a>
      </li>
      <li class="service_item left">
        <a href="" class="service_lk">
          <i class="serviceIcon icon-xingzhuang"></i>
          <span class="service_text">电影票</span>
        </a>
      </li>
      <li class="service_item left">
        <a href="" class="service_lk">
          <i class="serviceIcon icon-qiyegou-e"></i>
          <span class="service_text">企业购</span>
        </a>
      </li>
      <li class="service_item left">
        <a href="" class="service_lk">
          <i class="serviceIcon icon-lipinka-e"></i>
          <span class="service_text">礼品卡</span>
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
@import '@/common/styles/base.scss';
.service {
  position: relative;
  padding: 15px 0;
  width: 100%;
  .service_list {
    .service_item {
      width: 63px;
      height: 55px;
      &:hover {

        .serviceIcon, .service_text {
          color: $--color-hover-primary !important;
        }
      }
      .service_lk {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 8px;
        i {
          font-size: 28px;
        }
        .service_text {
          font-size: 12px;
          color: #333;
          padding: 5px;
        }
        .icon-huafei {
          color: #6eb4e8;
          font-size: 28px;
        }
        .icon-jipiao {
          color: #f5ba6a;
          font-size: 28px;
        }
        .icon-Artboard {
          color: #4edaca;
          font-size: 28px;
        }
        .icon-youxi {
          color: #f5ba6a;
          font-size: 28px;
        }
        .icon-jiayouka {
          color: #4edaca;
          font-size: 28px;
        }
        .icon-huoche {
          color: #eb675e;
          font-size: 28px;
        }
        .icon-zhongchou-e {
          color: #4edaca;
          font-size: 28px;
        }
        .icon-licai {
          color: #6eb4e8;
          font-size: 28px;
        }
        .icon-baitiao {
          color: #eb675e;
          font-size: 28px;
        }
        .icon-xingzhuang {
          color: #eb675e;
          font-size: 28px;
        }
        .icon-qiyegou-e {
          color: #6eb4e8;
          font-size: 28px;
        }
        .icon-lipinka-e {
          color: #f5ba6a;
          font-size: 28px;
        }
      }
    }
  }
  &::after {
    position: absolute;
    height: 1px;
    left: 15px;
    right: 15px;
    background: -webkit-gradient(linear,right top,left top,from(white),color-stop(#eeeeee),color-stop(#eeeeee),to(white));
    background: linear-gradient(270deg,white,#eeeeee,#eeeeee,white);
    content: " ";
    top: 10px;
  }
}
</style>
