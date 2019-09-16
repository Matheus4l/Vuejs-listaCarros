<template>
  <v-container>
      <h1 class="text-center">Escolha </h1>
    
    
      <v-radio-group class="justify-center" v-model="tipoVeiculo" row >
          <v-radio label="Carro" value="carros" ></v-radio>
          <v-radio label="Moto" value="motos" ></v-radio>
      </v-radio-group>
      <div class="text-center">
          <v-btn @click.prevent.stop="pegaVeiculos()" :loading="loading">Pesquisar</v-btn>
      </div>
          <br><hr><br>

    <v-simple-table dense>
            <thead>
              <tr>
                <th class="text-left">Modelo</th>
               
              </tr>
            </thead>
            <tbody>
              <tr  v-for="item in dataVeiculo" :key="item.id" >
                <td>
                    <router-link :to="{ name: 'modelo',
                                        params: {
                                            tipoVeiculo: tipoVeiculo,
                                            idVeiculo: item.id,
                                            nome:item.name
                                        }}">
                        {{ item.id }}
                    </router-link>
                </td>
                <td>{{item.name}}</td>
              </tr>
             
            </tbody>
          </v-simple-table>
  </v-container>
   
</template>

<script>
import axios from 'axios'
export default {
  
  data: () => ({
    tipoVeiculo:"",
    dataVeiculo:[],
    loading:false
  }),

  methods: {
      pegaVeiculos(){
         
         if (this.tipoVeiculo) {
            const url="https://fipeapi.appspot.com/api/1/"
            this.loading=true
        
            axios.get(url+this.tipoVeiculo+"/marcas.json").then((response) => {
                            console.log(response.data);
                            this.dataVeiculo=response.data;
                            this.loading=false;
                        })
          
          }
        
      }
    }, 

};
</script>
