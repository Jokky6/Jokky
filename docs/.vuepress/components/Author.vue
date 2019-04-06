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
        display flex
        flex-direction row
        padding .8rem .4rem
        background #fff
        .avatar
            width 80px
            height 80px
            border-radius 50%
            cursor pointer
        .author-info
            display flex
            flex-direction column
            width 60%
            margin-top -15px
            align-items center
            align-self center
            .name
                font-size 16px
                color $textColor
            .job
                font-size 14px
                margin-top -15px
                color #777

            
</style>


