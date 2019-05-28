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
        
        <button class="float-button" @click="toggleSearch(true)"><icon name="plus"></icon></button>
        <transition name="fade">
        <Search v-show="showSearch" @savePlace="savePlace"></Search>
        </transition>
    </div>
</template>

<script>
	import Search from './Search.vue'
	export default {
	    name: 'list',
	    data () {
	        return {
	            title: 'Weather Forecast',
	            showSearch: false,
	        }
	    },
	    components: {
	        Search
	    },
	    mounted () {
	       this.initSwipeDelete();
	    },
	    methods: {
	    	initSwipeDelete () {
	            return Swiped.init({
	                query: '.list li a',
	                list: true,
	                right: 20,
	                unit: '%'
	            });
	        },
	        toggleSearch (flag) {
	            this.showSearch = flag
	        },
	        savePlace (place) {
	            if (place) {
	                let flag = this.places.map( (o, i) => {
	                    return o.id === place.id;
	                });
	                if (flag.indexOf(true) == -1) {
	                    this.places.push(place);
	                    Storage.save(this.places);
	                } else {
	                    // 带有当前城市标记则不弹出
	                    if (!place.isCurrent) {
	                        alert('城市已存在，无需重复选择！');
	                    }
	                }
	            }
	
	            this.toggleSearch(false);
	
	            this.$nextTick(() => {
	                this.initSwipeDelete();
	            })
	        },
	    }
	}
</script>