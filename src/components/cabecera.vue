<template>
    <div>
        <nav class="blue">
            <div class="nav-wrapper" >
                <ul id="nav-movile" class="right hide-on-med-and-down">
                    <li><a href="index.php"><i class="material-icons">home</i></a></li>
                    <li><a href="alta.php"><i class="material-icons">add</i></a></li>
                    <li><a href="index.php?cat=php">PHP</a></li>
                    <li><a href="index.php?cat=css">CSS</a></li>
                    <li><a href="index.php?cat=html5">HTML5</a></li>
                    <li><a href="index.php?cat=vue">VUE</a></li>
                    <li><a href="index.php?cat=mysql">MYSQL</a></li>
                    <li><a href="#" @click="salir">SALIR</a></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'cabecera',
    methods:{
        salir(){
            const token = JSON.parse(this.$localStorage.get('token'));
            axios.get('http://localhost/snippetWebpack/api/loginRegistro/salir.php?token=' +token)
            .then( res=>{
                 if(res.data =='success'){
                     this.$localStorage.remove('token');
                     this.$router.push('/');
                 }
            });
        }
    }
}
</script>