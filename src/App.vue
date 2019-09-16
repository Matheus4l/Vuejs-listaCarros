<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Veiculo</span>
        <span class="font-weight-light">Carro e Moto</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
     
    </v-app-bar>
        <router-view/>
    <v-content>
      
    </v-content>
  </v-app>
</template>


<script>
    export default {
        name: 'App',
    };
</script>