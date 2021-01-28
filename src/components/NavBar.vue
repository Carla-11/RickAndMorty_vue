<template>
  <nav class="navbar navbar-expand-lg  bg-success ">
  <div class="container-fluid">
     <router-link  to="/" class="nav-link text-dark"> Rick And Morty</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
        <li class="nav-item">
          <router-link :to="{ name:'Opiniones'}"  class="nav-link text-dark">Opiniones</router-link>
        </li>
        <li class="nav-item dropdown">
         <router-link :to="{ name:'Favoritos'}" class="nav-link text-dark">Favoritos</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/administracion" class="nav-link text-dark">Administracion</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: "NavBar"

};
</script>

<style>


</style>