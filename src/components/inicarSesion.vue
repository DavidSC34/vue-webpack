<template>
  <div>
      <nav class="blue"></nav>
      <div class="container center">
            <div class="row" style="margin:0,auto; width:50%;" >
              <div class="col s12 m12 l12">
                <div class="card">
                  <div class="card-content">
                    <span class="card-title">Iniciar sesion</span>
                      <form id="inicioSesion" autocomplete="off" @submit.prevent="login" >
                          <input type="email" name="email" placeholder="Correo electronico" required >
                          <input type="password" name="pass" placeholder="Password" required pattern="[A-Za-z0-9]{8,15}" >
                          <input type="submit" value="Entrar" class="btn blue" >
                      </form>
                  </div>
                  <div class="card-action">
                  <router-link to="/registro">Registrarse</router-link>
                  </div>
                </div>
              </div>
            </div>

      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
