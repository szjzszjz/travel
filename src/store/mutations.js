export default {
  changeCity (state, city) {
    console.log(city)
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {

    }
  }
}
