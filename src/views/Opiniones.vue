<template>
  <div class="container my-5">
    <div v-if="enviarOpiniones.length > 0">
      <h1>Opiniones:</h1>
     
      <div class="accordion " id="accordionExample">
        <div class="card"  v-for="(coment,index) in enviarOpiniones" :key="index">
          <div class="card-header" id="headingOne">
            <h2 class="mb-0">
              <button
                class="btn btn-link btn-block text-center"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Opinion sobre el pesonaje :  {{coment.name}} ---------------------  Realizada Por: {{coment.nombre}}
              </button>
            </h2>
          </div>
          <div
            id="collapseOne"
            class="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div class="card-body">
            {{coment.opinion}}
            </div>
          </div>
        </div>
      </div>
    </div>

     <div v-else>
        <div class="alert alert-dark" role="alert">
              No haz agregado tus opiniones 
            <button type="button" class="btn btn-secondary" @click="$router.go(-1)"> Ir Atras...</button>
          </div>
      </div>

 
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Opiniones",

  data() {
    return {
    }
  },

  computed: {
    ...mapGetters(["enviarOpiniones"]),

   
  },

  methods: {
    ...mapActions(["guardandoOpinion"]),
  },
};
</script>

<style >
</style>