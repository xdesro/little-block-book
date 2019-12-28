<template>
  <div id="app">
    <TopNav />
    <router-view />
    <Tray />
  </div>
</template>

<script>
import TopNav from "./components/TopNav";
import Tray from "./components/Tray";
export default {
  components: {
    TopNav,
    Tray
  }
};
</script>

<style lang="scss">
@import url("https://rsms.me/inter/inter.css");
*,
*:before,
*:after {
  box-sizing: border-box;
}
html {
  font-family: "Inter", sans-serif;
  background-color: $color__background--dark;
  color: $color__primary--dark;
  margin: 0;
  padding: 0;
  @supports (font-variation-settings: normal) {
    font-family: "Inter var", sans-serif;
  }
}
body {
  margin: 0;
  padding: 0;
}
#app {
  padding: 2rem 1rem 0;
  // font-family: "Inter", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    // color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
