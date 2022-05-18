<template>
  <div class="row my-3 box-container">
    <div class="col-md-6 mx-auto box-container">
      <div class="pt-3">
        <h3>Login</h3>
        <hr />
      </div>
      <div class="alert alert-danger" v-if="error">
        {{ error }}
      </div>
      <form @submit.prevent="onLogin()">
        <div class="form-group">
          <label>Email</label>
          <input type="email" class="form-control" v-model.trim="email" />
          <div class="error" v-if="errors.email">
            {{ errors.email }}
          </div>
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" v-model.trim="password" />
          <div class="error" v-if="errors.password">
            {{ errors.password }}
          </div>
        </div>

        <div class="my-3">
          <button type="submit" class="btn btn-primary w-100">Login</button>
        </div>
        <div class="login-choice"><span>or Sign In with</span></div>
        <SocialLoginComp />
      </form>
      <div class="footer">
        <p>Don't have an account? <a href="/signup"> Create one now</a></p>
      </div>
      <div v-for="user in users" :key="user.id">
        <div
          class="alert alert-success"
          v-if="user.email == email && user.password == password"
        >
          <div>you're logged-in successfully</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SocialLoginComp from "@/components/SocialLogin.vue";
import axios from "axios";

export default {
  name: "LoginPage",
  components: {
    SocialLoginComp,
  },
  isLoggedIn: {
    type: Boolean,
  },

  data() {
    return {
      email: "",
      password: "",
      errors: [],
      error: "",
    };
  },

  created() {
    this.isLoggedIn = false;
    console.log(this.isLoggedIn + "In Login Page");
    this.getUsers();
  },
  methods: {
    getUsers() {
      axios
        .get("users")
        .then((res) => {
          console.log(res.data);
          this.users = res.data;
        })
        .catch((err) => {
          this.error = err;
        });
    },

    async onLogin() {
      this.isLoggedIn = true;
      console.log(this.isLoggedIn);
      this.$router.push(`/home`);
    },
  },
};
</script>
<style >
.box-container {
  margin: 0 auto;
  width: 400px;
  box-shadow: beige;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #fff;
}
.login-choice span {
  color: #5b6987;
  display: -ms-grid;
  display: grid;
  font-size: 16px;
  width: 100%;
  line-height: 40px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
  -ms-grid-columns: minmax(20px, 1fr) auto minmax(20px, 1fr);
  grid-template-columns: minmax(20px, 1fr) auto minmax(20px, 1fr);
  grid-gap: 19px;
}
.login-choice span:after,
.login-choice span:before {
  content: "";
  border-top: 1px solid #e5e8ed;
}
.footer,
.footer a {
  text-align: center;
}
</style>