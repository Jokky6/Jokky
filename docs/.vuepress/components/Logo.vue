<template>
  <div class="logo" v-if="$site.themeConfig.leftLogo">
    <img class="image" :src="$withBase($site.themeConfig.leftLogo)" :alt="$siteTitle" @click="goToHomePage">
  </div>
</template>

<script>
export default {
  methods: {
    goToHomePage() {
      window.open("http://7yue.pro", "_blank");
    }
  }
}
</script>

<style lang="stylus" scoped>
  $temp = 288px * 0.82
  $ipadPadding = ($temp - 110px) / 2
  .logo
    width $sidebarWidth
    height 4.5rem
    display flex
    flex-direction column
    align-items center
    justify-content center
    background #f0f3f8
    .image
      $padding = (288px - 110px) / 2
      width 110px
      position fixed
      top 0
      z-index 2
      background #f0f3f8
      padding-top 11px
      padding-bottom 11px
      padding-left $padding
      padding-right $padding
      cursor pointer
  @media (max-width $MQNarrow)
    .logo
      width $sidebarWidth * 0.82
      .image
        padding-left $ipadPadding
        padding-right $ipadPadding
  @media (max-width $MQMobile)
    .logo
      display none
      background transparent
      width 110px
      .image
        padding 0
        background none
        margin-top 10px
        margin-left 20px
</style>

