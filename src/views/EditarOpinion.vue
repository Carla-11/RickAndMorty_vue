<template>
    <div class="container">
    <div v-if="idPersonaje" class="my-5">

    <h2> Editando Opinion de : {{nPersonaje}}</h2>
     <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Nombre</label>
            <input type="text" class="form-control" v-model="nombre">
    
         </div>
         <div class="form-group">
                 <div class="form-group">
                   <label for="exampleFormControlTextarea1">Opinion</label>
                    <textarea class="form-control" rows="3" v-model="opinion"></textarea>
                </div>
         </div>
            <button type="submit" class="btn btn-primary mx-3" @click="opinionEditada">Guardar</button>
             <button type="submit" class="btn btn-info" @click="$router.push('/administracion')">Regresar</button>
        </form>
    
    </div>
    <div v-else>
     <div class="alert alert-dark" role="alert">
              el personaje no existe
            <button type="button" class="btn btn-secondary" @click="$router.push('/administracion')"> Ir Atras...</button>
          </div>
    </div>
    </div>  
</template>

<script>
export default {
   name: 'EditarOpinion',

   props: ['id'],
   data() {
       return {
           nombre: '',
           opinion:'',
           nPersonaje: '',
           idPersonaje: null,
       }
   },
   mounted() {
       let opinionComplet =this.$store.getters.enviarOpiniones.find(res =>
       res.id === this.id);
       if (opinionComplet !== undefined) {
           this.nombre = opinionComplet.nombre;
           this.opinion = opinionComplet.opinion;
           this.nPersonaje = opinionComplet.name;
           this.idPersonaje = opinionComplet.id;
           
       } else {
           this.idPersonaje = null;
       }
   },
   methods: {
       opinionEditada(){
       
           let opinionEdit = {
           
           nombre: this.nombre,
           opinion: this.opinion,
           nPersonaje: this.nPersonaje,
           idPersonaje: this.idPersonaje,
           }

           this.$store.dispatch('guardarEdicion',opinionEdit);
           this.$router.push({name: 'Administracion'})
       }
   },
}
</script>

<style>

</style>