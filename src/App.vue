<template>
  <div id="navbar">
    <div class="nav-content logo-nav" @click="page = 'article'">
        <i class="far fa-calendar-check logonya"></i>
      <div class="nav-content">Resolution Maker</div>
    </div>
      <div class="nav-content logout-nav" v-if="loginStatus === true" @click="logoutUser">
      <div class="nav-content">Sign Out</div>
      <i class="fas fa-sign-out-alt logonya"></i>
    </div>
    <div class="nav-content login-nav" v-if="!loginStatus && page != 'login'" @click="page = 'login'">
      <div class="nav-content">Sign In</div>
      <i class="fas fa-sign-in-alt logonya"></i>
    </div>
  </div>  
</template>
<script>
import modal from "./components/modal";
import login from "./components/login"

export default {
  data() {
    return {
      page: 'login',
      loginStatus: localStorage.getItem("token") ? true : false,
      error: '',
      login: {
        email: '',
        password: ''
      },
      register: {
        email: '',
        password: '',
        username : ''
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
        firstName : localStorage.getItem("payload.email")
      },
      successRegister: false,
      showModal: false
    }
  }
}
</script>
