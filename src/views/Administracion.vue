<template>
  <div class="container my-5">
  <div  v-if="enviarOpiniones.length  > 0">
      <h1>Administracion de opiniones</h1>

    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Personaje</th>
      <th scope="col">Opinion</th>
      <th scope="col">usuario</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item,index) in enviarOpiniones" :key="index" >
      <td>{{index+1}}</td>
      <td>{{item.name}}</td>
      <td>{{item.nombre}}</td>
      <td>{{item.opinion}}</td>
      <td><button type="button" class="btn btn-danger" @click="eliminandoOPinion(index)">Eliminar</button></td>
      <td><button type="button" class="btn btn-info" @click="editandoOpinion(item.id)">Editar</button></td>
    </tr>
  </tbody>
</table>

  
</div>

  <div v-else>
           <div class="alert alert-dark" role="alert">
              No hay opiniones para  administar
            <button type="button" class="btn btn-secondary" @click="$router.go(-1)"> Ir Atras...</button>
          </div>
  </div> 
  </div>
</template>

<script>

import { mapGetters} from "vuex";

export default {
  name: 'Administracion',


computed: {
    ...mapGetters(['enviarOpiniones'])
},

methods: {
  eliminandoOPinion(index){

    this.$store.dispatch('borraOpinion', index)
  },
  editandoOpinion(id){
    console.log(id);
    this.$router.push({name: 'EditarOpinion', params: {id: id}})
}
},

}
</script>

<style>

</style>