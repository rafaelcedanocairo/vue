<template>
  <div v-if="$route.params.userId">
    <h1>Aqui podras ver el listado de un usuario</h1>
  </div>

  <div v-else>
    <h1>Aqui veras el detalle de los usuarios</h1>    
  </div>

</template>

<script>
export default {

}
</script>

<style>

</style>