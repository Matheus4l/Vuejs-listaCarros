<template>
  <v-container>
     <br><hr><br>
      <h1 class="text-center">{{nome}}</h1>
      <a href="javascript:history.go(-1)" class="btn btn-primary">Voltar</a>
    <v-simple-table dense>
            <thead>
              <tr>

                <th class="text-left">numero</th>
                <th class="text-left">Modelo</th>
               
              </tr>
            </thead>
            <tbody>
              <tr  v-for="item in dataModelo" :key="item.id" >
                <td>
                  <router-link :to="{ name: 'modelo_detalhes',
                                        params: {
                                            Veiculo: tipoveiculo,
                                            idVeiculo: idveiculo,
                                            nome:item.name,
                                            idModelo:item.id
                                        }}">
                        {{item.id}}
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
   
    dataModelo:[],
    tipoveiculo:'',
    idveiculo:'',
    nome:'',
    loading:false
  }),
  created() {
              this.pegamModelo();
          },

  methods: {
      pegamModelo(){
        this.tipoveiculo=this.$route.params.tipoVeiculo;
        this.idveiculo= this.$route.params.idVeiculo;
        this.nome= this.$route.params.nome;
    
         
            const url='https://fipeapi.appspot.com/api/1/'
           
        
            axios.get(url+this.tipoveiculo+'/veiculos/'+ this.idveiculo+'.json').then((response) => {
                            console.log(response.data);
                            this.dataModelo = response.data;
                            
                        })
          
         
        
      }
    }, 

};
</script>
