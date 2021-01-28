<template>
  <div class="container mt-5">
  <!--Card Presonaje-->
    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 m-auto mt-5">
      <div
        class="col mb-4 container"
        v-for="(item, index) in enviarDatosApi"
        :key="index"
      >
        <div class="card h-100 border-dark car" :class="{sombras: item.favorito}">
          <img
            :src="item.image"
            class="card-img rounded-circle"
            :alt="item.id"
          />
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <div
              class="btn-group ml-auto"
              role="group"
              aria-label="Basic example"
            >
            <!--button Modal-->
              <button
                type="button"
                class="btn border-secondary bg-success btn-lg"
                data-toggle="modal"
                :data-target="'#s'+item.id"
              >
                <font-awesome-icon icon="gavel"></font-awesome-icon> Opinar
              </button>

              <!--modal opinar-->
              <div
                class="modal fade "
                :id="'s'+item.id"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog ">
                  <div class="modal-content ">
                    <div class="modal-header">
                      <a class="modal-title" id="exampleModalLabel"  >
                        {{ item.name }}
                      </a>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <form>
                      <div class="form-group">
                        <label for="exampleFormControlInput1" class="form-label"
                          >Nombre :</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Ingrese nombre"
                          v-model="nombre"
                        />
                      </div>
                      <div class="form-group">
                        <label for="exampleFormControlTextarea1"  class="form-label"
                          >Tu opinion</label >
                        <textarea
                          class="form-control"
                          rows="3"
                          placeholder="¿Que Opinas de este personaje?"
                          v-model="opinion"
                        ></textarea>
                      </div>
                    </form>
                    
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                      <font-awesome-icon icon="window-close"></font-awesome-icon> 
                        cerrar
                      </button>
                      <!--Guardar Opinion button-->
                      <button type="button" class="btn btn-primary" @click="guardarOpinion(item)">
                        <font-awesome-icon icon="save"></font-awesome-icon> Guardar
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Modal  Ver mas-->
              <div
                class="modal fade bg-secondary"
                :id="'p' + item.id"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        {{ item.name }}
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <img :src="item.image" alt="" />
                      <ul>
                        <li>Estado: {{ item.status }}</li>
                        <li>Especie: {{ item.species }}</li>
                        <li>Origen:{{ item.origin.name }}</li>
                        <li>Cant Episodios:{{ item.episode.length }}</li>
                        <li>Fecha de Nac: {{ item.created }}</li>
                      </ul>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        <font-awesome-icon
                          icon="window-close"
                        ></font-awesome-icon>
                        Close
                      </button>
                      <!--Agregar a favoritos button-->
                      <button
                        type="button"
                        class="btn btn-primary"
                      
                        @click.prevent="agregandoFavoritos(item) "
                      
                        :disabled="item.favorito"
                      >  
                        <font-awesome-icon
                          icon="thumbs-up"
                        ></font-awesome-icon>
                        Agregar a favoritos
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!--button ver mas-->
              <button
              
                class="btn bg-secondary btn-lg"
                data-toggle="modal"
                :data-target="'#p' + item.id"
                
              >
                <font-awesome-icon icon="search-plus"></font-awesome-icon> Ver
                mas
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>
</template>

<script>
// @ is an alias to /src

import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  components: {
   
  },

  data() {
    return {
     
      nombre: '',
      opinion:'',
       opinionCompleta: { nombre: this.nombre, opinion: this.opinion},
      
    };
  },
  computed: {
    ...mapGetters(["enviarDatosApi"]),

    deshabilitado(){
      return this.cant === 0;
    },


  },

  methods: {
    ...mapActions(["agregandoFavoritos"]),

    enviarFavorito(index){
      this.$router.push(`/favoritos/${index}`);
    },



    guardarOpinion(item){
         if (this.opinion.length <= 10) {
             alert('debe agregar mas de 10 letras');
         } else {
             let ocompleta= {
                 opinion: this.opinion,
                 nombre: this.nombre,
                 name: item.name,
                 id: item.id
             };
             this.$store.dispatch('guardandoOpinion',ocompleta)
             this.nombre =  "";
             this.opinion ="";

         }


    },
    

  },
};
</script>
<style >
.button {
  text-align: center;
}
.sombras{

  border: 1px solid black;
}

.car{
   
  color: black;
  border: 3px solid;

 background: rgb(133,15,50);
background: linear-gradient(90deg, rgba(133,15,50,1) 38%, rgba(96,5,15,0.9457983877144608) 100%); 
}

</style>