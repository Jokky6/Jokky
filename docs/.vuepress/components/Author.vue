<template>
    <div class="author-container">
        <img class="avatar" :src="avatar" alt="头像" />
        <div class="author-info">
            <p class="name" :name="name">{{name}}</p>
            <span class="job" :job="job">{{job}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        name:{
            type:String,
            default:'佚名'
        },
        avatar:{
            type:String,
            default:'../../../hero.png'
        },
        job:String
    }
}
</script>

<style lang="stylus" scoped>
    .author-container
        width 100%
        display flex
        flex-direction column
        justify-content center
        align-items center
        .avatar
            
            width 88px
            height 88px
            border-radius 50%
            border:3px solid rgba(255,255,255,1);
            cursor pointer
        .author-info
            display inline
            p
                color #333
                margin-bottom 0
                text-align center
                line-height 22px
            span 
                color #999
                font-size 12px
                line-height 17px
        
            
</style>


