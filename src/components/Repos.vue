<template>
  <div class="repos">
    <div class="card-repo" v-for="repo in repos" :key="repo">
      <div class="repo-name">
        <a href="">{{ repo.name }}</a>
        <a href="">TESTE</a>
        </div>
    </div>
  </div>
</template>

<script>
 import { mapState } from 'vuex'
export default {
  methods: {
    ...mapState(['repos'])
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/global.scss";
  .repos {
    display: flex;
    justify-content: center;
    flex-direction: column;
    
  }

  .card-repo {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 60%;
    height: 10%;
    background-color: rgba($color: #8883834f, $alpha: 1.0)
  }

  .repo-name {
    text-align: center;
    justify-content: center;
  }

</style>