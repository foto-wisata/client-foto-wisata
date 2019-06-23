<template>
  <div>
    <navbar :loginStatus="loginStatus" :page="page"></navbar>
     <p style="text-align: center" id="successAlert" v-show="successRegister === true" class="primary-container">Success created an account {{register.email}} !</p> 
    <login-page v-if="loginStatus === false"></login-page>
    <main-content v-else></main-content>
  </div>
</template>

<script>
import list from "./components/list";
import LoginPage from "./components/LoginPage.vue";
import maincontent from './components/mainContent';
import modal from "./components/modal";
import navbar from './components/navbar';

const BASE_URL = `http://localhost:3000/`;

export default {
  components: {
    'navbar': navbar,
    LoginPage,
    'main-content': maincontent,
  },
  data: {
    page: "login",
    loginStatus: false,
    error: "",
    resolution: {
      description: null,
      image: null,
    },
    login: {
      email: "",
      password: ""
    },
    register: {
      email: "",
      password: ""
    },
    errorLogin: {
      status: false,
      msg: ""
    },
    errorRegister: {
      status: false,
      msg: ""
    },
    errorResolution: {
      status: false,
      msg: ""
    },
    loggedUser: {
      firstName: localStorage.getItem("resolusiemail")
    },
    resolution: [],
    successRegister: false,
    showModal: false
  },
  created() {
    let token = window.localStorage.getItem("resolusitoken");
    this.loggedUser.fi = window.localStorage.getItem("resolusiemail");
    if (token) {
      this.loginStatus = true;
    }
  },
  methods: {
    axiosConfig() {
      return {
        headers: {
          token: window.localStorage.getItem("resolusitoken")
        }
      };
    },
    a_login() {
      axios
        .post(`${BASE_URL}/user/signin`, this.login, this.axiosConfig())
        .then(res => {
          window.localStorage.setItem("resolusitoken", res.data.token);
          window.localStorage.setItem("resolusiemail", this.login.email);
          this.loginStatus = true;
        })
        .catch(err => {
          this.errorLogin.status = true;
          this.errorLogin.msg = err.message;
        });
    },
    a_register() {
      axios
        .post(`${BASE_URL}/user/signup`, this.register, this.axiosConfig())
        .then(res => {
          window.localStorage.setItem("resolusitoken", res.data.token);
          window.localStorage.setItem("resolusiemail", this.login.email);
        })
        .catch(err => {
          this.errorRegister.status = true;
          this.errorRegister.msg = err.message;
        });
    },
    imageFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.resolution.image = files[0]
    },
    postResolution() {  
      axios
        .post(`${BASE_URL}/resolutions/`, this.resolution, this.axiosConfig())
        .then(() => {

        })
        .catch(err => {
          this.errorResolution.status = true
          this.errorResolution.msg = err.message
        })
    }, 
    fetchResolution() {
      axios
        .get(`${BASE_URL}/resolutions/`, this.axiosConfig())
        .then(res => {
          this.resolution = res.data
          this.errorResolution.status = false
        })
        .catch(err => {
          this.errorResolution.status = true
          this.errorResolution.msg = err.message
        })
    }
  }
};
</script>
