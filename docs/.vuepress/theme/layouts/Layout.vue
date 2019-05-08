<template>
  <div
    class="theme-container container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar :isShowSidebar="isShowSidebar" :class="pageClasses"   v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar"/>
    <div
      class="sidebar-mask"
      @click="toggleSidebar(false)"
    ></div>
    <Sidebar
      :items="sidebarItems"
      @toggle-sidebar="toggleSidebar"
      :isShowSidebar = "isShowSidebar"
    >
      <slot
        name="sidebar-top"
        slot="top"
      >
        <div
          class="logo"
          v-if="$site.themeConfig.leftLogo"
        >
          <img 
           class="image"
           :src="$withBase($site.themeConfig.leftLogo)"
           :alt="$siteTitle" />
        </div>
      </slot>
      <slot
        name="silder-info"
        slot="info"
      >
        <div class="info-container">
            <Content slot-key="author"/>
            <Content slot-key="advertisement-top"/>
        </div>
      </slot>
      <slot
        name="sidebar-bottom"
        slot="bottom"
      />
    </Sidebar>

    <Home v-if="$page.frontmatter.home"/>

    <Page
      v-else
      :sidebar-items="sidebarItems"
      :isShowSidebar="isShowSidebar"
    >
      <slot
        name="page-top"
        slot="top"
      />
      <slot
        name="page-bottom"
        slot="bottom"
      />
    </Page>

    <img class="sidebar-btn" v-if="$site.themeConfig.more"
           :src="$withBase($site.themeConfig.more)"
           @click="showSidebar"
    />
  </div>
</template>

<script>
import Home from '@theme/components/Home.vue'
import Navbar from '@theme/components/Navbar.vue'
import Page from '@theme/components/Page.vue'
import Sidebar from '@theme/components/Sidebar.vue'
import { resolveSidebarItems } from '../util'

export default {
  components: { Home, Page, Sidebar, Navbar},

  data () {
    return {
      isSidebarOpen: false,
      isShowNav:true,
      clientWidth:'',
      isShowSidebar : true
    }
  },

  computed: {
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false
        || themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title
        || themeConfig.logo
        || themeConfig.repo
        || themeConfig.nav
        || this.$themeLocaleConfig.nav
      )
    },
    shouldShowSidebar () {
      const { frontmatter } = this.$page
      return (
        !frontmatter.home
        && frontmatter.sidebar !== false
        && this.sidebarItems.length
      )
    },

    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },

    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar
        },
        userPageClass
      ]
    }
  },

  mounted () {
    // 此处监听浏览器窗口
    this.screenWidth = document.body.clientWidth
    window.onresize = () => {
        return (() => {
          this.screenWidth = document.body.clientWidth;
        })();
      }
    ,
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
    })
  },

  methods: {
    showSidebar(){
      this.isShowSidebar = !this.isShowSidebar
    },

    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
    },

    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },

    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    }
  }
}
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="../styles/theme.styl" lang="stylus"></style>

<style>

.logo {
  width: 100%;
  height: 4.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center; 
}

.image{
  width: 110px;
}

.author{
  margin-top: 10px !important;
  margin-bottom: 10px !important;
  padding: 0 !important;
}

.advertisement-top{
  margin-top: 20px !important;
  padding-left: 50px !important;
  padding-right: 50px !important;
}

.sidebar-btn{
  position: fixed;
  width: 32px;
  height: 32px;
  top:100px;
  right:33px;
  border-radius: 50%;
  box-shadow: 0px 0px 14px 0px rgba(207,207,207,0.5);
  cursor: pointer;
}


 @media screen and (min-width: 1150px){
   .container{
     max-width: 1150px;
     margin: 0 auto;
   }
 }
</style>

