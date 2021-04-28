import axios from 'axios'
import swal from 'sweetalert'

export default {
    methods: {
        eliminar(id) {

            swal({
                    title: 'Seguro que deseas eliminar el post',
                    text: 'Al eliminarlo no podras recuperarlo',
                    icon: 'warning',
                    buttons: true,
                    dangerMode: true,
                })
                .then((aceptar) => {
                    if (aceptar) {
                        //aqui ejecuta el ajax para eliminar el post
                        axios.get('http://localhost/snippetWebpack/api/crud/eliminar.php?id=' + id)
                            .then(resp => {
                                if (resp.data == 'success') {
                                    swal('Post eliminado');
                                    this.getCategoria();
                                } else {
                                    swal('Post no eliminado');
                                }
                            });
                    } else {
                        return false;
                    }
                });

        }
    }
}