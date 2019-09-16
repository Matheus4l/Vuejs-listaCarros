<template>
  <v-container>
     <br><hr><br>
      <h1 class="text-center">{{nome}}</h1>
      <a href="javascript:history.go(-1)" class="btn btn-primary">Voltar</a>
    <v-simple-table dense>
            <thead>
              <tr>

                
                <th class="text-left">Veiculo</th>
                <th class="text-left">Ano/Combustivel</th>
               
              </tr>
            </thead>
            <tbody>
              <tr  v-for="item in dataModelo" :key="item.id" >
                
                  <td>{{item.veiculo}}</td>
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
        this.tipoveiculo=this.$route.params.Veiculo;
        this.idveiculo= this.$route.params.idVeiculo;
        this.nome= this.$route.params.nome;
        this.idModelo= this.$route.params.idModelo;
    
         
            const url='https://fipeapi.appspot.com/api/1/'
           //fipeapi.appspot.com/api/1/carros/veiculo/21/4828.json
        
            axios.get(url+this.tipoveiculo+'/veiculo/'+ this.idveiculo+'/'+this.idModelo+'.json').then((response) => {
                            console.log(response.data);
                            this.dataModelo = response.data;
                            
                        })
          
         
        
      }
    }, 

};
</script>
