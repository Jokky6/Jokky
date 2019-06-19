<template>
    <div class="adverse">
        <div class="book-name">{{title}}</div>
        <img class="avatar" :src="avatar" alt="广告" />
    </div>
</template>

<script>
export default {
    props:{
        avatar:{
            type:String,
            default:'../../../adverse.png'
        },
        title:{
            type:String,
            default:'未知书名'
        }
    }
}
</script>

<style lang="stylus" scoped>
.adverse
  width 100%
  display flex
  flex-direction column
  align-items center
  height 180px
  border-bottom 1px #DEE2E6 dashed
  .book-name
    font-size 14px
    line-height 20px
    color #3683D6
    font-weight 500
    font-family PingFangSC-Medium
    margin-top 10px
  img 
    margin-top 10px
    width 200px 
    height 110px
.fixed
  height 180px
  .adverse
    position fixed
    width $sidebarWidth
    top 70px
    left 0
    background #F0F3F8
    
@media (max-width: $MQNarrow)
  .adverse
    height 160px
    img 
      width 164px
      height 90.2px
  .fixed
    .adverse
       width $sidebarWidth * 0.82
@media (max-width: $MQMobile)
  .adverse
    width $sidebarWidth * 0.82
    img 
      width 164px
  .fixed
    .adverse
      width $sidebarWidth * 0.82
      left 0
      z-index 2
</style>


