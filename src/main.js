import Vue from "vue"
import App from './App.vue'
import 'materialize-css/dist/css/materialize.css'

new Vue(App).$mount('#app')




// new Vue({
//   el: '#app',
//   data: {
//     page: 'login',
//     loginStatus: localStorage.getItem("token") ? true : false,
//     error: '',
//     login: {
//       email: '',
//       password: ''
//     },
//     register: {
//       email: '',
//       password: '',
//       username : ''
//     },
//     errorLogin: {
//       status: false,
//       msg: ''
//     },
//     errorRegister: {
//       status: false,
//       msg: ''
//     },
//     loggedUser: {
//       firstName : localStorage.getItem("payload.email")
//     },
//     successRegister: false,
//     showModal: false
//   },
//   methods: {
//     registerUser() {
//       let input = this.register
//       axios({ 
//         method: 'POST',
//         url: `http://localhost:3000/user/signup`,
//         data: input
//       })
//       .then(({data}) => {
//         this.successRegister = true
//       })
//       .catch(next)
//     },
//     loginUser() {
//       let input = this.login
//       axios({ 
//         method: 'POST',
//         url: `http://localhost:3000/user/signin`,
//         data: input
//       })
//       .then(({data}) => {
//         console.log(input, 'ini input')
//         localStorage.setItem('token', data.token)
//         localStorage.setItem('payload', data.payload)
//         this.page = 'article'
//         this.loginStatus = true
//       })
//       .catch(next)
//     },
//     addNewReso() {

//     },

//     logoutUser() {
//       localStorage.clear()
//       this.loginStatus = false
//       this.page = 'login'
//       this.successRegister = true
//     }
//   },
//   computed: {
//     fullName() {
//       return this.loggedUser.firstName + ' ' + this.loggedUser.lastName
//     }
//   }
// })