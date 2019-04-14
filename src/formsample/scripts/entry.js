import Vue from 'vue'

// Import Components
import FormInput from './components/02_atoms/formelements/form-input.vue'
import ContactUs from './components/03_molecules/contactus/contactus.vue'

// Vue Declaration for Components
Vue.component(FormInput.name, FormInput)
Vue.component(ContactUs.name, ContactUs)

import store from './store'

new Vue({ // eslint-disable-line no-new
  el: '#vue-container',
  store,
  data() {
    return {
    }
  },
  mounted() {
    this.$nextTick(function () {
      if (document.readyState !== 'loading') {
        this.domReady()
      } else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', () => {
          this.domReady()
        })
      } else {
        document.attachEvent('onreadystatechange', () => {
          if (document.readyState === 'complete') {
            this.domReady()
          }
        })
      }
    })
  },
  methods: {
    domReady() {
      document.querySelector('body').classList.add('page-loaded')
    }
  }
})
