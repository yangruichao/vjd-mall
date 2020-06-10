<!--  -->
<template>
  <div>
    <ul class="jd-steps">
      <li
        :style="style"
        class='jd-step'
        :class="[
          isLast == index && 'is-flex',
          active >= (index+1) ? `is-${currentStatus}`: ''
        ]"
        v-for="(step, index) in stepList" :key="index">
        <div class="jd-step__head">
          <div class="jd-step__line" v-if="isLast != index">
            <i class="el-step__line-inner" style="width: 100%" v-if="active > (index+1)"></i>
          </div>
          <div class="jd-step__icon" :class="`is-${step.icon ? 'icon' : 'text'}`">
            <slot>
              <i v-if="step.icon" class="jd-step__icon-inner" :class="[step.icon]"></i>
              <div class="jd-step__icon-inner" v-if="!step.icon">{{ index + 1}}</div>
            </slot>
          </div>
        </div>
        <div class="jd-step__main">
          <div
            class="jd-step__title"
            ref="title"
            :class="['is-' + currentStatus]">
            <slot name="title">{{ step.title }}</slot>
          </div>
          <div
            class="jd-step__description"
            :class="['is-' + currentStatus]">
            <slot name="description">{{ step.description }}</slot>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      internalStatus: ''
    }
  },
  props: {
    active: Number,
    stepList: {
      type: Array,
      default: () => {
        return []
      }
    },
    space: [String, Number],
    status: {
      type: String,
      default: 'success'
    },
    center: {
      type: Boolean,
       default: true
    }
  },
  computed: {
    currentStatus() {
      return this.status
    },
    style () {
      const steps = this.stepList,
            len = steps.length,
            style = {}
      const space = (typeof this.space === 'number'
        ? this.space + 'px'
        : this.space
          ? this.space
          : 100 / (len-1)  + '%');
      style.flexBasis = space
      return style
    },
    isLast() {
      return this.stepList.length - 1
    },
  },
  components: {},

  methods: {}
}

</script>
<style scoped lang='scss'>
@import '@/common/styles/mixins.scss';
@import '@/common/styles/var.scss';

@include b (steps) {
  display: flex;

  @include b(step) {
    position: relative;
    flex-shrink: 1;
    color: #999;
    @include pseudo(last-of-type) {
      @include e(line) {
        display: none;
      }

    // 只有未设置 space 的情况下才自适应宽度
    @include when(flex) {
      flex-basis: auto !important;
      flex-shrink: 0;
      flex-grow: 0;
    }
    }
    @include e (head) {
      position: relative;
      width: 100%;
    }
    @include e (line) {
      position: absolute;
      border-color: inherit;
      background-color: $--text-color-primary;
      height: 2px;
      top: 11px;
      left: 0;
      right: 0;
    }
    @include e(line-inner) {
      display: block;
      border-width: 1px;
      border-style: solid;
      border-color: inherit;
      transition: .15s ease-out;
      box-sizing: border-box;
      width: 0;
      height: 0;
    }
    @include e(icon) {
      position: relative;
      z-index: 1;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 24px;
      height: 24px;
      font-size: 14px;
      box-sizing: border-box;
      background: #fff;
      transition: .15s ease-out;
      @include when(text) {
        border-radius: 50%;
        border: 2px solid;
        border-color: inherit;
      }

      @include when(icon) {
        width: 40px;
      }
    }
    @include when(process) {
      color: $--text-color-primary;
      border-color: $--text-color-primary;
    }
    @include when(success) {
      color: $--color-success;
      border-color: $--color-success;
    }
  }
}
</style>
