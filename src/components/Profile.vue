<template>
  <div class="Profile">
    <div class="perfil-card">
      <template v-if="user.lenght != 0">
        <div class="perfil-foto">
          <img class="photo" :src="user.avatar_url">
        </div>
        <div class="perfil-dados">
          <a class="name">{{ user.name }}</a>
          <a class="bio">{{ user.bio }}</a>
          <div class="dados-numeros">
            <div class="data-following">
              <a>Following: {{ user.following }}</a>
            </div>
            <div class="data-followers">
              <a>Followers: {{ user.followers }}</a>
            </div>
            <div class="data-repos">
              <a>Repos: {{ user.public_repos }}</a>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="no-data">
          <a>Contrata eu rs</a>
        </div>
        
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState(['user'])
}

</script>

<style lang="scss" scoped>
  @import "@/assets/scss/global.scss";

  .class {
    display: flex;
    justify-content: center;
  }
  
  .perfil-card {
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin-left: 5rem;
    margin-right: 5rem;
    box-shadow: 2px 5px 10px rgba(14, 17, 17, 0.705);
    border-radius: 1.5rem;
  }
  
  .perfil-foto {
    display: flex;
    flex: 0.5;
    justify-content: center;
    align-items: center;
    margin-right: 0.2rem;
    margin-left: 0.2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .photo {
    display: flex;
    justify-content: center;
    width: 10rem;
    height: 10rem;
    border-radius: 5rem;
    
  }

  .perfil-dados {
    display: flex;
    flex-direction: column;
    margin-right: 1rem;
    flex: 1;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .name,
  .bio {
    display: flex;
    list-style: none;
    margin: 0.4rem
  }

  .name {
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .bio {
    font-size: 1.5rem;

  }

  .dados-numeros {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: 0.2rem;
  }

  .data-following {
    display: flex;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-right: 1rem;
    font-size: 1.3rem;
  }

  .data-followers,
  .data-repos {
    display: flex;
    margin: 1rem;
    font-size: 1.3rem;
  }

  .no-data {
    display: flex;
    justify-content: center;
    width: 10rem;
    height: 5rem;

  }

  
</style>