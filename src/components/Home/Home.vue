<style lang="scss" scoped>
    // 搜索动画
    .fade-enter-active, .fade-leave-active {
        transition: all .4s
    }
    .fade-enter, .fade-leave-active {
        transform: translateY(100%);
        opacity: 0;
    }
    // 删除动画
    .remove-enter-active, .remove-leave-active {
        transition: all .3s
    }
    .remove-enter, .remove-leave-active {
        transform: scale(0);
        opacity: 0;
    }
</style>
<template>
    <div class="main-page pr">
        <header class="navbar text-center">{{title}}</header>
                
    </div>
</template>

<script>
export default {
    name: 'list',
    data () {
        return {
            title: 'Lists',
        }
    },
    components: {
        
    },
    mounted () {
        
    },
    methods: {
        
    }
}
</script>