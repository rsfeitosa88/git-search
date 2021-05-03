<template>
  <div class="nav-bar">
    <div class="nav-content">
      <div class="title">
        <a>GitHub Search</a>
      </div>
      <div class="search">
        <svg xmlns="http://www.w3.org/2000/svg" 
          width="2rem" height="2rem" fill="currentColor" class="bi bi-search" viewBox="0 0 15 15">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 
            1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" title="photo perfil"/>
        </svg>
        <input id="search" type="text" placeholder="Digite o User para pesquisa" 
          @keyup="GET_SEARCH">
      </div>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    GET_SEARCH(e) {
      if(e != null){
        this.$store.dispatch('GET_USER_INFO', e.target.value)
      }
    },
  },
  watch: {
    Keyboard(e){
      return e.taget.value
    }
  }
}

</script>
  
<style lang="scss">
  @import "@/assets/scss/global.scss";
  .nav-bar {
    display: flex;
  }

  .nav-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 10%;
    margin-bottom: $headings-margin-bottom;
    background-color: $white;
    color: $black;
    box-shadow: $box-shadow;
    height: 5rem;
  }
  
  .title {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title a {
    font-size: 2rem;
    font-weight: $font-weight-bold;
  }

  .search {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    margin-right: 1.5rem;
  }

  .search input {
    display: flex;
    border: 0;
    margin-Left: 0.8rem;
    border-bottom: 1px solid $black;
    background-color: $white;
    height: 2rem;
    padding: 0.5rem;
    width: 15rem;
    height: 2.6rem;
    outline: none;
    transition: .2s ease-in-out;
    box-sizing: border-box;
    font-size: $input-button-font-size-lg;
  }

  .btn {
    width: 7rem;
    height: 2rem;
    border-radius: 0.5rem;
    border: 3px solid $blue;
    align-self: center;
    margin-left: 1rem;
  }

  .btn-search {
    background-color: $blue;
    justify-content: center;
    font-weight: 600;
    color: white
  }

  .btn-search:active {
    background-color: $lighten-blue;
    color: $black;
    
  }
</style>

