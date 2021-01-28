<template>
  <div id="app" class="bg-warning">
    <nav-bar></nav-bar>
      
    <router-view />
      <HelloWorld />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import HelloWorld from "@/components/HelloWorld.vue";


export default {
  name: "App",

  components:{
    NavBar,
    HelloWorld,
  

  },


  created() {
    this.$store.dispatch('llamadoApi')
  },
};
</script>

<style>
#app{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
#nav a.router-link-exact-active {
  color: black;
}
</style>
