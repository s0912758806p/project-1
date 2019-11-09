<template>
  <div id="app">
    <div>
      <Header />
    </div>
    <router-view />
    <div>
      <Footer />
    </div>
    <div class="ft_caveat"></div>
  </div>
</template>

<script>
import Header from "./layout/Header";
import Footer from "./layout/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="">
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.5;
  /* outline: 1px solid #f00; */
}

:root {
  --primary-color: rgba(236, 198, 147, 0.75);
  --overlay-color: rgba(7, 16, 37, 0.98);
  --menu-speed: 0.75s;
}
</style>
