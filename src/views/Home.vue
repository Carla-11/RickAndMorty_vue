<template>
  <div class="home  ">
   <Principal></principal>
  
  </div>
</template>

<script>
// @ is an alias to /src
import Principal from "@/components/Principal.vue"



export default {
  name: "Home",
  components: {
    Principal
    
  },

  data() {
    return {
     
      nombre: '',
      opinion:'',
       opinionCompleta: { nombre: this.nombre, opinion: this.opinion},
      
    };
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