<template>
  <div class="container mt-5 my-5"  >
    <div  v-if="enviarFavorito.length >0">
       <h1>Agregaste los siguientes personajes a Favoritos</h1>    
       <div class="row" >
             <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-3">
                <div class="card bg-secondary"  v-for="(item, index) in enviarFavorito"
                       :key="index ">
                        <img class="card-img-top" :src="item.image" :alt="item.id" />
                          <div class="card-body">
                           <h5 class="card-title">{{item.name}}</h5>
                            <p class="card-text">
                                 <ul>
                                      <li>Estado: {{ item.status }}</li>
                                      <li>Especie: {{ item.species }}</li>
                                      <li>Origen:{{ item.origin.name }}</li>
                                      <li>Cant Episodios:{{ item.episode.length }}</li>
                                      <li>Fecha de Nac: {{ item.created}}</li>
                                 </ul>
                            </p>
                               <button class="btn-info btn  " @click="eliminando(index)"> <font-awesome-icon icon="window-close"></font-awesome-icon> Eliminar</button>
                </div>
             </div>     
       </div>
       </div>
    </div>

    <div v-else>
           <div class="alert alert-dark" role="alert">
              No haz agregado tus favoritos 
            <button type="button" class="btn btn-secondary" @click="$router.go(-1)"> Ir Atras...</button>
          </div>
    </div> 
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Favoritos",

  computed: {
    ...mapGetters(["enviarFavorito"]),
  },

  methods: {
    ...mapActions(["eliminando"]),
  },
};
</script>