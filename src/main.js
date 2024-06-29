import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
import { faAddressBook } from '@fortawesome/free-regular-svg-icons'

library.add(fas,fab,faAddressBook)

import './assets/tailwind.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
createApp(App)
.component('fa',FontAwesomeIcon)
.mount('#app')
