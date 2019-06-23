<template>
  <div id="login" class="primary-container">
    <p style="text-align: center" id="successAlert" v-show="successRegister === true" class="primary-container">Success created an account {{register.email}} !</p>
    <div id="login-page" v-if="!loginStatus">
        <h4 style="text-align: center">Login</h4>
        <h6 v-show="errorLogin.status === true"> {{ errorLogin.msg }}</h6>
        <form class="form-login" @submit.prevent="loginUser">
          <label for="login-email">Email</label>
          <input type="text" name="login-email" id="login-email" v-model="login.email" required>
          <label for="login-password">Password</label>
          <input type="password" name="login-password" id="login-password" v-model="login.password" required>
          <button v-on:click="loginUser" type="submit" class="btn amber lighten-1" style="margin-top: 10px;">Sign In</button>
        </form>
      </div>
      <div id="register" class="primary-container">
        <h4 style="text-align: center">Register</h4>
        <h6 v-show="errorRegister.status === true" v-if="!loginStatus"> {{ errorRegister.msg }}</h6>
        <form class="form-login" @submit.prevent="registerUser">
          <label for="register-email">Email</label>
          <input type="text" name="register-email" id="register-id" v-model="register.email" required>
          <label for="register-password">Password</label>
          <input type="password" name="register-password" id="register-password" v-model="register.password" required>
          <button v-on:click="registerUser" type="submit" class="btn amber lighten-1">Register</button>
        </form>
      </div>
    </div>
</template>