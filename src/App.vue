<template>
  <div id="app">
    <v-app>
      <div id="nav">
        <router-link to="/hotel">Hotel</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/test">test</router-link>
      </div>
      <router-view />
    </v-app>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 100px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
