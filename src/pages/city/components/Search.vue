<template>
  <div class="search">
    <input type="text" placeholder="输入城市或者拼音" v-model="search">
<!--    v-show="search" 如果在搜索就显示搜索内容-->
    <div class="search-content" ref="search" v-show="search">
      <div>
        <div class="search-item border-bottom"
             v-for="(city,index) of getList"
             :key="index"
             @click="handleChangeCity(city.name)">
          {{city.name}}
        </div>
<!--        v-show="!getList.length" 如果数组长度为零 则显示没有匹配的数据-->
        <div class="search-item border-bottom" v-show="hasNoData">
          没有匹配的数据
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'Search',
  props: {
    cities: Object
  },
  data () {
    return {
      list: [],
      search: '',
      timer: null
    }
  },
  methods: {
    handleChangeCity (city) {
      // this.$store.dispatch('changeCity', city) // 第一种方法：调用action 然后再调用mutation
      // this.$store.commit('changeCity', city) // 第二种方法：直接调用mutation
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity']) // 第三种方法：利用扩展运算符
  },
  // 钩子函数 页面渲染完毕之后调用该函数
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  },
  computed: {
    // 获取所有的城市
    getAllCities () {
      const allCities = []
      for (let key in this.cities) {
        this.cities[key].forEach((city) => {
          // console.log(city.name)
          allCities.push(city)
        })
      }
      return allCities
    },

    // 第一种筛选办法：
    // 多个条件筛选中间中“+”号连接
    getList () {
      return this.getAllCities.filter((city) => {
        return city.spell.match(this.search) + city.name.match(this.search)
      })
    },

    hasNoData () {
      return !this.getList.length
    }
  }
  // 第二种筛选办法：
  // 监听器 search的变化
  // watch: {
  //   search () {
  //     if (this.timer) {
  //       clearTimeout(this.timer)
  //     }
  //     if (!this.search) {
  //       this.list = []
  //       return
  //     }
  //     this.timer = setTimeout(() => {
  //       this.list = []
  //       for (let key in this.cities) {
  //         this.cities[key].forEach((city) => {
  //           if (city.name.indexOf(this.search) > -1 ||
  //             city.spell.indexOf(this.search) > -1) {
  //             this.list.push(city)
  //           }
  //         })
  //       }
  //     }, 100)
  //   }
  // }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .search {
    margin-top -1px
    background: $bgColor
    height: 3rem
    line-height: 3rem
    text-align: center
  }

  .search input {
    border: none
    border-radius: 4px
    padding: 2px 4px
    height: 1.7rem
    width: 90%
    color: $darkTextColor
    text-align center
  }

  .search-content {
    z-index: 1 // 属性设置元素的堆叠顺序。拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面。
    background: #eeeeee
    overflow hidden
    position: absolute
    top:6rem
    left:0
    right:0
    bottom:0
  }
  .search-item{
    font-size: .8rem
    line-height: 2rem
    background: #ffffff
  }

</style>
