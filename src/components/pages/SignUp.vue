<template>
  <div class="row my-3 box-container">
    <div class="col-md-6 mx-auto box-container">
      <div>
        <div class="pt-3">
          <h3>Create Your Account</h3>
          <hr />
        </div>
        <form @submit.prevent="onSignup()">
          <div class="form-group">
            <label>Fullname</label>
            <input type="text" class="form-control" v-model.trim="fullname" />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="text" class="form-control" v-model.trim="email" />
            <div class="error" v-if="errors.email">
              {{ errors.email }}
            </div>
          </div>
          <div class="form-group">
            <label>Password</label>
            <input
              type="password"
              class="form-control"
              v-model.trim="password"
            />
            <div class="error" v-if="errors.password">
              {{ errors.password }}
            </div>
          </div>

          <div class="my-3">
            <button type="submit" class="btn btn-primary w-100">Signup</button>
          </div>
          <div class="login-choice"><span>or sign up with</span></div>
          <SocialLoginComp />
          <div>
            <p class="center">
              By signing up you agree to the
              <a href="#">Terms of Service</a>.
            </p>
          </div>
        </form>
      </div>
      <div class="footer">
        <p>Already have an account? <a href="/login"> Sign In</a></p>
      </div>
    </div>
  </div>
</template>
<script>
import SignupValidations from "../validations/SignupValidations";
import SocialLoginComp from "@/components/SocialLogin";
import axios from "axios";
export default {
  name: "SignUpComp",
  components: {
    SocialLoginComp,
  },
  data() {
    return {
      fullname: "",
      email: "",
      password: "",
      errors: [],
      error: "",
    };
  },
  methods: {
    async onSignup() {
      let validations = new SignupValidations(
        this.fullname,
        this.email,
        this.password
      );

      this.errors = validations.checkValidations();
      if ("email" in this.errors || "password" in this.errors) {
        return false;
      }
      axios
        .post("users", validations)
        .then((res) => {
          console.log(res.data);
          alert("User is added Successfully");
          document.getElementsByTagName("input").innerHTML = "";
        })
        .catch((error) => {
          this.error = error;
          console.log(error);
        });
    },
  },
};
</script>
<style>
.box-container {
  margin: 0 auto;
  width: 400px;
  box-shadow: beige;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #fff;
}
</style>