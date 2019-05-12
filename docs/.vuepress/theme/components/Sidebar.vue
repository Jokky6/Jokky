<template>
  <aside class="sidebar">
    <NavLinks/>
    <slot name="top"/>
    <div class="center" @scroll="handleScroll" ref="refCenter">
      <slot name="info"/>
      <SidebarLinks :depth="0" :items="items" :class="isFixed?'reset':false"/>
    </div>
    <slot name="bottom"/>
  </aside>
</template>

<script>
import SidebarLinks from '@theme/components/SidebarLinks.vue'
import NavLinks from '@theme/components/NavLinks.vue'

export default {
  name: 'Sidebar',

  components: { SidebarLinks, NavLinks },

  props: ['items'],

  data(){
    return({
      isFixed:false
    })
  },

  methods:{
    handleScroll(){
      this.scrollTop = this.$refs.refCenter.scrollTop
      console.log(this.$refs.refCenter.offsetTop)
      if(this.scrollTop>185){
        this.$emit("listen")
        this.isFixed = true
      }
      if(this.scrollTop<=185){
        this.$emit("destorylisten")
        this.isFixed = false
      }
    }
  }

}
</script>

<style lang="stylus">
.sidebar
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
  .center
    overflow-y auto
    height calc(100% - 4.5rem)
    ul
      padding 0
      margin 0
      list-style-type none
    a
      display inline-block
    & > .reset
      padding-top 9.5rem !important
    & > .sidebar-links
      padding 1.5rem 0
      overflow-y auto
      & > li > a.sidebar-link
        font-size 1.1em
        line-height 1.7
        font-weight bold
      & > li:not(:first-child)
        margin-top .75rem
    

@media (max-width: $MQMobile)
  .sidebar
    .nav-links
      display block
      .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after
        top calc(1rem - 2px)
    & > .sidebar-links
      padding 1rem 0
</style>