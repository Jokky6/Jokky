---
home: true
navbar: false
---

<template>
  <div class="index">
    <img src="./.vuepress/public/index-logo.png"> 
    <div class="wrap">
      <div class="card" v-for="(item,index) in list" :key="index">
        <div class="card-box" @click="goTo(item)">
          <div class="img">
            <img src="./.vuepress/public/logo.png">
          </div>
          <div class="title">{{item.title}}</div>
          <div class="sub-title">{{item.content}}</div>
          <div class="auth">作者 {{item.auth}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: [
          {title:'Lin UI', content: '一套让开发者高效开发的 小程序组件', href:'/lin/lin-ui/tutorial/', auth: '李大嘴'},
          {title:'Lin UI', content: '一套让开发者高效开发的 小程序组件', href:'/lin/lin-ui/tutorial/', auth: '李大嘴'},
          {title:'Lin UI', content: '一套让开发者高效开发的 小程序组件', href:'/lin/lin-ui/tutorial/', auth: '李大嘴'},
          {title:'Lin UI', content: '一套让开发者高效开发的 小程序组件', href:'/lin/lin-ui/tutorial/', auth: '李大嘴'}
        ]
      }
    },
    methods: {
      goTo(item) {
        console.log(item)
        this.$router.push(item.href)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .index
    text-align center
    width 100%
    margin 0 auto
    >img
      height 100px
      margin-bottom 50px
      margin-top 50px
    >.wrap
      width 100%
      display flex
      flex-wrap wrap
      .card
        width 33.3%
        display flex
        justify-content center
        align-items center
        margin-bottom 80px
        height 280px
      .card-box
        height 240px
        width 260px
        border-left 4px solid #3683D6
        box-shadow 6px 10px 20px 0px rgba(206,206,206,0.5)
        cursor pointer
        background #fff
        &:hover 
          background #3683D6
          height 280px
          transition all 0.5s
          margin-bottom -40px
          .title
            color #fff
            margin-top 20px
          .sub-title
            color #fff  
          .auth
            color #fff  
        .img
          height 80px
          width 80px
          display flex
          justify-content center
          align-items center
          background #fff
          border-radius 50%
          margin-left auto
          margin-right auto
          margin-top 10px
          img
            width 55px
            height 51px
        .title
          font-size 18px
          font-weight 500
          color #3683d6
        .sub-title
          font-size 14px
          font-weight 400
          color #999999
          padding-left 35px
          padding-right 35px
          margin-top 20px
        .auth
          font-size 12px
          color #999
          font-weight 400
          margin-top 20px
@media (max-width: 1060px)
  .index
    .wrap
      .card
        width 50%     
@media (max-width: $MQMobile)
  .index
    .wrap
      .card
        width 100%             
</style> 