<template>
  <h1>Bienvenido: {{$route.params.user}}</h1>
  <p>Nombre: {{$route.params.post}}</p>
</template>

<script>
export default {
    //Cuando especifiquemos mas de un parametros
    //podremos obtenerlo mediante un array
    mounted(){
        console.log(this.$route.params);
    }
}
</script>

<style>

</style>