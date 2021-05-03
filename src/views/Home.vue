<template>
  <div id="home">
    <NavBar /> 
    <Profile />
  </div>
</template>

<script>
import NavBar from '@/template/navBar.vue'
import Profile from '../components/Profile.vue'
export default {
  name: 'Home',
  components: {
    NavBar,
    Profile,
  }
}
</script>

<style lang='scss' scoped>
  #home {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
