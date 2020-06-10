<!--  -->
<template>
  <div class='news-flas'>
    <div class="news-hd clear">
      <h6 class=" news-title left">京东快报</h6>
      <a class="news-more right">更多></a>
    </div>
    <ul class="news-list left">
      <li class="news-item">
        <a href="">
          <span class="news_tag">最新</span>
          你喝的水真的干净吗？云米S2纯水机，让喝水更安心
        </a>
      </li>
      <li class="news-item">
        <a href="">
          <span class="news_tag">HOT</span>
          你喝的水真的干净吗？云米S2纯水机，让喝水更安心
        </a>
      </li>
      <li class="news-item">
        <a href="">
          <span class="news_tag">HOT</span>
          你喝的水真的干净吗？云米S2纯水机，让喝水更安心
        </a>
      </li>
      <li class="news-item">
        <a href="">
          <span class="news_tag">热议</span>
          你喝的水真的干净吗？云米S2纯水机，让喝水更安心
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
@import '@/common/styles/base';
.news-flas {
  margin-top: 20px;
  padding: 0 15px;
  .news-hd {
    margin-bottom: 10px;
    .news-title {
      color: #333;
      font-weight: 700;
    }
    .news-more {
      font-size: 12px;
      color: #666;
      cursor: pointer;
      &:hover {
        color: $--color-hover-primary;
      }
    }
  }
  .news-list {
    position: relative;
    height: 88px;
    .news-item {
      max-width: 160px;
      height: 16px;
      line-height: 16px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      color: #999;
      margin-bottom: 6px;
      a {
        color: #666;
        text-decoration: none;
      }
      &:hover {
        a {
          color: $--color-hover-primary;
        }
      }
      .news_tag {
        display: inline-block;
        position: relative;
        font-size: 12px;
        height: 16px;
        width: 35px;
        line-height: 16px;
        text-align: center;
        vertical-align: 0;
        color: #e1251b;
        background-color: rgba(225,37,27,.08);
      }
    }
  }
}
</style>
