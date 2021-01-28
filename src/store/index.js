
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
    datosApi: [],
    favorito: [],
    listaOpiniones: []
  },

  getters:{

    enviandoNombrePersonaje(state){
         return state.datosApi.name;
    },
    enviarOpiniones(state){
       return state.listaOpiniones;
    },
    enviarDatosApi(state){
      return state.datosApi
    },
    enviarFavorito(state){
      return state.favorito;
    }

  },
  mutations: {

    mutandoDatosApi(state,results){
       for (let index = 0; index < results.length; index++) {
          results[index].favorito = false;
         
       }
      state.datosApi = results;

    },
    mutandoFavoritos(state,valor){
        let resultado = state.datosApi.find(result => result.id == valor.id);
        resultado.favorito= true;
         state.favorito.push(resultado)
    },

   
    eliminaFav(state,index){
        state.favorito.splice(index,1);

    },
    opinioCompleta(state,opinionRecib){
      state.listaOpiniones.push(opinionRecib)
    },
    mutandoBorrarOpinion(state, index){
      state.listaOpiniones.splice(index,1);

    },
    mutandoOpinionEditada(state,opinionEdit){
         let newOpinion = state.listaOpiniones.find(result => result.id ===
          opinionEdit.id);
          if (opinionEdit !== undefined) {
            newOpinion.nombre = opinionEdit.nombre;
            newOpinion.opinion = opinionEdit.opinion;
            newOpinion.name = opinionEdit.nPersonaje;
            newOpinion.id = opinionEdit.idPersonaje;
          } else {
            console.log('no existe')
          }
    }

  },
  actions: {
   
    llamadoApi({commit}){
     
      fetch('https://rickandmortyapi.com/api/character')
      .then(Response => Response.json())
      .then(results => {console.log(results.results);
        commit('mutandoDatosApi', results.results);
        this.personaje = results.results;
      })
      .catch(error => console.error(error))
    },
    
    agregandoFavoritos({commit},valor){
      commit('mutandoFavoritos',valor)

    },
    
    agregandoOpinion({commit},valor){
      commit('mutandoOpinion',valor)

    },
    eliminando({commit},index){
    commit('eliminaFav',index)
    },

    guardandoOpinion({commit},opinionRecib){
     console.log(opinionRecib);
     commit('opinioCompleta',opinionRecib);

    },

    borraOpinion({commit},index){
      commit('mutandoBorrarOpinion', index)
    },
  
    guardarEdicion({commit},opinionEdit){
        commit('mutandoOpinionEditada',opinionEdit)
    }

  },
  modules: {
    
  }
})
