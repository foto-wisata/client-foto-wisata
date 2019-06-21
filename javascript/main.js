new Vue({
  el: '#app',
  data: {
    page: '',
    loginStatus: true,
    error: '',
    login: {
      email: '',
      password: ''
    },
    register: {
      email: '',
      password: ''
    },
    errorLogin: {
      status: false,
      msg: ''
    },
    errorRegister: {
      status: false,
      msg: ''
    },
    loggedUser: {
      firstName: 'Michael',
      lastName: 'Scott',
      email: ''
    },
    successRegister: false,
    showModal: false
  },
  methods: {
    registerUser() {
      let input = this.registerUser
      axios({ 
        method: 'POST',
        url: `http://localhost:3000/api/users/register`,
        data: input
      })
      .then(({data}) => {
        this.successRegister = true
      })
      .catch(next)
    },
    loginUser() {
      let input = this.loginUser
      axios({ 
        method: 'POST',
        url: `http://localhost:3000/api/users/register`,
        data: input
      })
      .then(({data}) => {
        localStorage.setItem('token', data.token)
        this.page = 'article'
        this.loginStatus = true
      })
      .catch(next)
    },
    addNewReso() {

    },

    logoutUser() {
      localStorage.clear()
      this.loginStatus = false
      this.page = 'login'
      this.successRegister = true
    }
  },
  computed: {
    fullName() {
      return this.loggedUser.firstName + ' ' + this.loggedUser.lastName
    }
  }
})