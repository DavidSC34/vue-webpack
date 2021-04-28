<template>
    <div>
            <cabecera></cabecera>
       <div class="container center">
    <div class="row" >
        <div class="col s12 m12 l12">
            <div class="card">
                <div class="card-content">
                    <span class="card-title">Editar Post</span>
                    <form id="editarPost" autocomplete="off" @submit.prevent="editar">
                        <input type="text" name="titulo" placeholder="Titulo" required :value="formEditar.titulo">
                        <textarea name="codigo" class="materialize-textarea" placeholder="Escribe tu codigo" :value="formEditar.codigo"></textarea>
                        <textarea name="descripcion" class="materialize-textarea" placeholder="Escribe tu descripcion" :value="formEditar.descripcion"></textarea>
                        <select name="categoria" class="browser-default" required>
                            <!-- <option value="" disabled selected>Escoge una opcion</option> -->
                            <option value="php" :selected="formEditar.categoria ==='php'">PHP</option>
                            <option value="css" :selected="formEditar.categoria ==='css'">CSS</option>
                            <option value="html5" :selected="formEditar.categoria ==='html5'">HTML5</option>
                            <option value="mysql" :selected="formEditar.categoria ==='mysql'">MYSQL</option>
                            <option value="vue" :selected="formEditar.categoria ==='vue'">VUE</option>
                        </select>
                        <input type="hidden" name="id" :value="$route.params.id">
                        <input type="submit" value="Editar" class="btn blue">
                    </form>
                </div>

            </div>
        </div>
    </div>
</div>
    </div>
</template>

<script>
import cabecera from './cabecera'
import sesion from '../mixins/sesion'
import axios from 'axios';
import swal from 'sweetalert';
export default {
  name:'editar',
  data(){
        return{
            formEditar:{}
        }
  },
  created(){
        this.getId();
  },
  
  components:{
      cabecera
  },
  mixins:[
       sesion
   ], 
   methods:{
      getId(){
          const id = this.$route.params.id;
          axios.get('http://localhost/snippetWebpack/api/crud/getId.php?id=' + id)
                    .then(resp => {
                        this.formEditar = resp.data;
                    });
      },
      editar() {
            const form = document.getElementById('editarPost');
            axios.post('http://localhost/snippetWebpack/api/crud/editarPost.php', new FormData(form))
                .then(resp => {
                    this.respuesta = resp.data;
                    if (resp.data == 'success') {
                        this.$router.push('/inicio')

                    } else {
                        swal('El post no pudo ser editar');
                    }
                });
        }
  }
}
</script>