<template>
  <transition name="fade">
    <div>
      <div v-if="show" class="text">回到顶部</div>
      <div class="wrap"></div>
      <svg
        v-if="show"
        class="go-to-top"
        @click="scrollToTop"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 49.484 28.284"
      >
        <g transform="translate(-229 -126.358)">
          <rect
            fill="currentColor"
            width="35"
            height="5"
            rx="2"
            transform="translate(229 151.107) rotate(-45)"
          ></rect>
          <rect
            fill="currentColor"
            width="35"
            height="5"
            rx="2"
            transform="translate(274.949 154.642) rotate(-135)"
          ></rect>
        </g>
      </svg>
    </div>
  </transition>
</template>

<script>
import debounce from "lodash.debounce";

export default {
  props: {
    threshold: {
      type: Number,
      default: 300
    }
  },

  data() {
    return {
      scrollTop: null
    };
  },

  mounted() {
    this.scrollTop = this.getScrollTop();
    window.addEventListener(
      "scroll",
      debounce(() => {
        this.scrollTop = this.getScrollTop();
      }, 100)
    );
  },

  methods: {
    getScrollTop() {
      return (
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0
      );
    },

    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
      this.scrollTop = 0;
    }
  },

  computed: {
    show() {
      return this.scrollTop > this.threshold;
    }
  }
};
</script>

<style lang='stylus' scoped>
.go-to-top
  cursor pointer
  position fixed
  bottom 7rem
  right 2.2rem
  color #C4C9D2
  z-index 1
svg
  width 20px
  height 20px
  border-radius 50%
  padding 8px
  background rgba(255, 255, 255, 1)
  box-shadow 0px 0px 14px 0px rgba(207, 207, 207, 0.5)
.text
  cursor pointer
  position fixed
  bottom 2rem
  right 2.5rem
  width 2rem
  color #C4C9D2
  z-index 1
  width 20px
  font-size 12px
.go-to-top:hover
  color lighten(#C4C9D2, 30%)
@media (max-width: 959px)
  .go-to-top,.text
    display none
.fade-enter-active, .fade-leave-active
  transition opacity 0.3s
.fade-enter, .fade-leave-to
  opacity 0
</style>
