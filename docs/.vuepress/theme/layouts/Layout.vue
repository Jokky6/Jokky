<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar"/>

    <div class="sidebar-mask" @click="toggleSidebar(false)"></div>

    <Sidebar
      :items="sidebarItems"
      :class="isScroll? 'opacity' : 'normal'"
      @toggle-sidebar="toggleSidebar"
      @listen="Fixed"
      @destorylisten="NoFixed"
    >
      <slot v-if="!isMobile" name="sidebar-top" slot="top">
        <Logo/>
      </slot>
      <slot v-if="!isMobile" name="silder-info" slot="info">
        <div class="info-container">
          <Content slot-key="author"/>
          <Content slot-key="adverse" :class="isFixed?'fixed':false"/>
        </div>
      </slot>
      <slot name="sidebar-bottom" slot="bottom"/>
    </Sidebar>

    <Home v-if="$page.frontmatter.home"/>

    <Page v-else :sidebar-items="sidebarItems" :class="disScroll? 'dis-scroll': ''">
      <slot name="page-top" slot="top"/>
      <slot name="page-bottom" slot="bottom"/>
    </Page>
  </div>
</template>

<script>
import Home from "@theme/components/Home.vue";
import Navbar from "@theme/components/Navbar.vue";
import Page from "@theme/components/Page.vue";
import Sidebar from "@theme/components/Sidebar.vue";
import { resolveSidebarItems } from "../util";
let t1 = 0;
let t2 = 0;
let timer = null; // 定时器
export default {
  components: { Home, Page, Sidebar, Navbar },

  data() {
    return {
      isSidebarOpen: false,
      isScroll: false,
      isFixed: false,
      isMobile: false,
      disScroll:false
    };
  },

  computed: {
    shouldShowNavbar() {
      const { themeConfig } = this.$site;
      const { frontmatter } = this.$page;
      if (frontmatter.navbar === false || themeConfig.navbar === false) {
        return false;
      }
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      );
    },

    shouldShowSidebar() {
      const { frontmatter } = this.$page;
      return (
        !frontmatter.home &&
        frontmatter.sidebar !== false &&
        this.sidebarItems.length
      );
    },

    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      );
    },

    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass;
      return [
        {
          "no-navbar": !this.shouldShowNavbar,
          "sidebar-open": this.isSidebarOpen,
          "no-sidebar": !this.shouldShowSidebar
        },
        userPageClass
      ];
    }
  },

  mounted() {
    this.$router.afterEach(() => {
      if (this.isScroll || this.isMobileClient()) {
        this.isSidebarOpen = true;
      } else {
        this.isSidebarOpen = false;
      }
    });
    this.handleLinksWrapWidth();
    window.addEventListener("resize", this.handleLinksWrapWidth, false);
    window.addEventListener("scroll", this.handleScroll, false);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleLinksWrapWidth);
  },
  methods: {
    isMobileClient() {
      const userAgentInfo = navigator.userAgent;
      const Agents = [
        "Android",
        "iPhone",
        "SymbianOS",
        "Windows Phone",
        "iPod"
      ];
      let flag = false;
      for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = true;
          break;
        }
      }
      if (this.isMobile) {
         flag = true;
      }
      return flag;
    },
    handleLinksWrapWidth() {
      this.isScroll = false
      const MOBILE_DESKTOP_BREAKPOINT = 719; // refer to config.styl
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
    handleScroll() {
      if (!this.isMobile || this.disScroll) {
        return
      }
      this.isScroll = true;
      clearTimeout(timer);
      timer = setTimeout(this.isScrollEnd, 200);
      t1 = document.documentElement.scrollTop || document.body.scrollTop;
    },
    isScrollEnd() {
      t2 = document.documentElement.scrollTop || document.body.scrollTop;
      if (t2 == t1) {
        this.isScroll = false;
      }
    },
    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === "boolean" ? to : !this.isSidebarOpen;
    },

    // side swipe
    onTouchStart(e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      };
      if(this.touchStart.x < 236.16 && this.isSidebarOpen) {
        this.disScroll = true
      } else {
        this.disScroll = false
      }
    },

    onTouchEnd(e) {
      this.isScroll = false;
      const dx = e.changedTouches[0].clientX - this.touchStart.x;
      const dy = e.changedTouches[0].clientY - this.touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 60) {
          this.toggleSidebar(true);
        } else {
          this.toggleSidebar(false);
        }
      }
    },

    Fixed() {
      this.isFixed = true;
    },
    NoFixed() {
      this.isFixed = false;
    }
  }
};
</script>

<style src="./prismjs/themes/prism-tomorrow.css"></style>

<style lang="stylus" scoped>
.opacity
  opacity 0.7
  transition opacity ease 0.3s
.normal
  opacity 1 
  transition 0.3s ease
.author
  padding 0 !important
.content.adverse
  width 100%
  padding 0px !important
  height 180px
  background #F0F3F8
.info-container
  width $sidebarWidth
.dis-scroll 
  overflow-y hidden  
@media (max-width: $MQNarrow)
  .info-container
    width $sidebarWidth * 0.82
    margin-bottom -20px
  .logo
    width $sidebarWidth * 0.82
</style>

