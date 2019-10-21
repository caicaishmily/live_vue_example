import Vue from 'vue'
import VueApollo from 'vue-apollo'

import App from './App.vue'
import apolloClient from './apollo_client'

Vue.config.productionTip = false
Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

new Vue({
  apolloProvider,
  render: h => h(App),
}).$mount('#app')
