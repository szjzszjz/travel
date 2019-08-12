<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @changeLetter="changeLetter"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {}, // 按照字母排序的城市
      hotCities: [], // 热点城市
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(res => {
          console.log(res)
          res = res.data
          if (res.data) {
            this.cities = res.data.cities
            this.hotCities = res.data.hotCities
          }
          console.log(this.cities)
          console.log(this.hotCities)
        }).catch(err => {
          console.log(err)
        })
    },
    changeLetter (letter) {
      this.letter = letter
      // console.log('city:' + this.letter)
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style scoped>

</style>
