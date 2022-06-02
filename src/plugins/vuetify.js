// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'    //追加

Vue.use(Vuetify)

//修正
const opts = {
    icons: {
        iconfont: 'mdi'
      },
}

export default new Vuetify(opts)