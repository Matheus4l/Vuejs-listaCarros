import Vue from 'vue'
import Router from 'vue-router'
import marca from '@/components/marca'
import modelo from '@/components/modelo'
import modelo_detalhes from '@/components/modelo_detalhes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'marca',
      component: marca
    },
    {
      path: '/:tipoVeiculo/:idVeiculo/:nome',
      name: 'modelo',
      component: modelo,
  },
  {
    path: '/:Veiculo/:idVeiculo/:nome/:idModelo',
    name: 'modelo_detalhes',
    component: modelo_detalhes,
},
  ]
})
