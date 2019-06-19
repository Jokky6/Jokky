<template>
  <aside class="sidebar" @scroll="handleScroll">
    <Logo v-if="isMobile"/>
    <Content v-if="isMobile" slot-key="author" style="padding:0"/>
    <Content
      v-if="isMobile"
      slot-key="adverse"
      style="height:180px;padding:0;"
      :class="isMobileFixed?'fixed':false"
    />
    <NavLinks/>
    <slot name="top"/>
    <slot name="info"/>
    <SidebarLinks :depth="0" :items="items"/>
    <slot name="bottom"/>
  </aside>
</template>

<script>
import SidebarLinks from "@theme/components/SidebarLinks.vue";
import NavLinks from "@theme/components/NavLinks.vue";

export default {
  name: "Sidebar",

  components: { SidebarLinks, NavLinks },

  props: ["items"],

  data() {
    return {
      isMobileFixed: false,
      scrollTop: null,
      isMobile: false
    };
  },
  mounted() {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false;
    });
    this.handleLinksWrapWidth();
    window.addEventListener("resize", this.handleLinksWrapWidth, false);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleLinksWrapWidth)
  },
  methods: {
    handleLinksWrapWidth() {
       const MOBILE_DESKTOP_BREAKPOINT = 719; // refer to config.styl
       if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
    handleScroll(e) {
      this.scrollTop = document
        .getElementsByClassName("adverse")[0]
        .getBoundingClientRect().top;
      if (this.scrollTop < 70) {
        this.$emit("listen");
        this.isMobileFixed = true;
      } else {
        this.$emit("destorylisten");
        this.isMobileFixed = false;
      }
    }
  }
};
</script>

<style lang="stylus">
.sidebar
  background #F0F3F8
  ul
    padding 0
    margin 0
    list-style-type none
  a
    display inline-block
  .nav-links
    display none
    border-bottom 1px solid $borderColor
    padding 0.5rem 0 0.75rem 0
    a
      font-weight 600
    .nav-item, .repo-link
      display block
      line-height 1.25rem
      font-size 1.1em
      padding 0.5rem 0 0.5rem 1.5rem
  & > .sidebar-links
    padding 1.5rem 0
    & > li > a.sidebar-link
      font-size 1.1em
      line-height 1.7
      font-weight bold
    & > li:not(:first-child)
      margin-top 0.75rem
@media (max-width: $MQMobile)
  .sidebar
    .nav-links
      display block
      .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after
        top calc(1rem - 2px)
    & > .sidebar-links
      padding 1rem 0
</style>
