<style lang="scss" scoped>
	/*城市列表*/
	.list-city {
		background-color: #f7f7f7;
	}
	.list-city > li {
	    padding: .2rem 0;
	    font-size: .26rem;
	    height: 100%;
	}
	.list-city > li a {
	    display: inline-block;
	    padding: .1rem .2rem;
	    border: 1px solid #e1e2e1;
	    border-radius: .07rem;
	    color: #666;
	    background-color: #fff;
	    margin-top: .2rem;
	}
	.list-city > li ul li {
		padding: .2rem;
		border-bottom: 1px solid #ccc;
	}

</style>
<template>
    <section class="search-page pa">
        <div class="navbar">
            <div class="searchbar pr">
                <span class="search-icon pa" @click="search()"><icon name="search"></icon></span>
                <input type="text" placeholder="输入城市名或城市简码搜索" class="search-input" ref="city">
                <span class="search-clear pa" v-if="isLoading===false" @click="clearInput()"><icon name="remove"></icon></span>
                <span class="search-loading pa" v-else><img src="../assets/images/oval.svg"></span>
            </div>
        </div>
        <ul class="list-city" v-if="allList.length">
            <!--<li class="item" v-for="place in placeData" @click="selectPlace(place)">
                <span class="city">{{ place.name }}</span>
                <span class="path">{{ place.path }}</span>
            </li>-->
            <li v-for="item in allList">
				<a href="javascript:;" v-text="item.name">北京</a>
				<ul>
					<li v-for="list in item.pchilds">
						<span v-text="list.name"></span>
					</li>
				</ul>
			</li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'search',
    data () {
        return {
            searchText: '',
            placeData: [],
            isLoading: false,
            timer: null,
            allList:'',//所有城市名称列表
            city:'',
        }
    },
    created:function(){
					
	},
	mounted:function(){
		this.getCityList()  //获取城市列表
//		this.getCurrent()
//		this.getFuture()
	},
    methods: {
    	//获取城市列表
		getCityList:function(){			  	
			this.$axios.get('http://www.mxnzp.com/api/address/list')
		    .then(ret => {
		    	if(ret.data.code==1){
		    		var a = ret.data;
		    		if(a.data.length>0){
		    			for(var i=0;i<a.data.length;i++){
		    			
		    			}
		    		}
		    		this.allList = a.data
		    		console.log(this.allList.length)
		    	}
		    })
		    .catch(error => {
		    	
		    })  	
		},
        clearData () {
            this.placeData = [];
        },
        clearInput () {
            if (this.searchText) {
                this.searchText = '';
            } else {
                this.$emit('savePlace');
            }
            this.clearData();
        },
        search () {
//          this.city=this.$refs.city.value
//          if (this.city){
//              this.isLoading = true;
//              var city=this.$refs.city.value
//			  	this.$axios.get('http://www.mxnzp.com/api/weather/current/'+city, {
//			    	params: {
////				    	  	ID: 12345
//			    	}
//			  	})
//			    .then(ret => {
//			    	if(ret.data.code==1){
////						var a=ret.data
//			    		var a = ret.data;
//			    		if(a.data.length>0){
//			    			for(var i=0;i<a.data.length;i++){
//			    			
//			    			}
//			    		}
//			    		this.allList = a.data
//			    		console.log(this.allList.length)
//			    	}
//			    })
//			    .catch(error => {
//			    	
//			    })
//          } else {
//              this.clearData();
//              this.isLoading = false;
//          }
        },
        selectPlace (place) {
            this.$emit('savePlace', place);
            this.clearInput();
        }
    }
}
</script>