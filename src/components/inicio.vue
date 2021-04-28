<template>
    <div>
            <cabecera></cabecera>
            <h1>Principal</h1>

    </div>

</template>

<script>
import cabecera from './cabecera'
import sesion from '../mixins/sesion'
export default {
    name:'inicio',
    components:{
        cabecera
    },
    mixins:[sesion]
}
</script>