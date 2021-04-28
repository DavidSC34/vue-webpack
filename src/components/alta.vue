<template>
    <div>
            <cabecera></cabecera>
        <div class="container center">
           
            <div class="row" >
                <div class="col s12 m12 l12">
                    <div class="card">
                        <div class="card-content">
                            <span class="card-title">Postea tu codigo</span>
                            <form id="altaPost" autocomplete="off" @submit.prevent="alta">
                                <input type="text" name="titulo" placeholder="Titulo" required>
                                <textarea name="codigo" class="materialize-textarea" placeholder="Escribe tu codigo"></textarea>
                                <textarea name="descripcion" class="materialize-textarea" placeholder="Escribe tu descripcion"></textarea>
                                <select name="categoria" class="browser-default" required>
                                    <option value="" disabled selected>Escoge una opcion</option>
                                    <option value="php">PHP</option>
                                    <option value="css">CSS</option>
                                    <option value="html5">HTML5</option>
                                    <option value="mysql">MYSQL</option>
                                    <option value="vue">VUE</option>
                                </select>
                                <input type="hidden" name="token" :value="token">
                                <input type="submit" value="Guardar" class="btn blue">
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
  name:'alta',
  
  components:{
      cabecera
  },
   mixins:[sesion],
  computed:{
      token(){
          return JSON.parse(this.$localStorage.get('token'));
      }
  },
  methods:{
      alta() {
            const form = document.getElementById('altaPost');
            axios.post('http://localhost/snippetWebpack/api/crud/altaPost.php', new FormData(form))
                .then(resp => {
                
                    if (resp.data == 'success') {
                        swal({
                            title: 'Buen trabajo',
                            text: 'Post guardado',
                            icon: 'success',
                            button: 'ok'
                        });
                        form.reset();
                    } else {
                        swal('El post no pudo ser guardado');
                    }
                });
        }
  }
}
</script>