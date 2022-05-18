<template>
  <div class="signup-buttons bg-light">
    <button
      class="btn btn-black-50 w-100"
      @click="handleSignIn"
      :disabled="!Vue3GoogleOauth.isInit || Vue3GoogleOauth.isAuthorized"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        aria-hidden="true"
      >
        <title>Google</title>
        <g fill="none" fill-rule="evenodd">
          <path
            fill="#4285F4"
            d="M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9v3.4814h4.8436c-.2086 1.125-.8427 2.0782-1.7959 2.7164v2.2581h2.9087c1.7018-1.5668 2.6836-3.874 2.6836-6.615z"
          ></path>
          <path
            fill="#34A853"
            d="M9 18c2.43 0 4.4673-.806 5.9564-2.1805l-2.9087-2.2581c-.8059.54-1.8368.859-3.0477.859-2.344 0-4.3282-1.5831-5.036-3.7104H.9574v2.3318C2.4382 15.9832 5.4818 18 9 18z"
          ></path>
          <path
            fill="#FBBC05"
            d="M3.964 10.71c-.18-.54-.2822-1.1168-.2822-1.71s.1023-1.17.2823-1.71V4.9582H.9573A8.9965 8.9965 0 0 0 0 9c0 1.4523.3477 2.8268.9573 4.0418L3.964 10.71z"
          ></path>
          <path
            fill="#EA4335"
            d="M9 3.5795c1.3214 0 2.5077.4541 3.4405 1.346l2.5813-2.5814C13.4632.8918 11.426 0 9 0 5.4818 0 2.4382 2.0168.9573 4.9582L3.964 7.29C4.6718 5.1627 6.6559 3.5795 9 3.5795z"
          ></path>
        </g>
      </svg>
      Google
    </button>
    <button
      class="btn btn-black-50 w-100"
      @click="handleSignOut"
      :disabled="!Vue3GoogleOauth.isAuthorized"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        aria-hidden="true"
      >
        <title>Google</title>
        <g fill="none" fill-rule="evenodd">
          <path
            fill="#4285F4"
            d="M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9v3.4814h4.8436c-.2086 1.125-.8427 2.0782-1.7959 2.7164v2.2581h2.9087c1.7018-1.5668 2.6836-3.874 2.6836-6.615z"
          ></path>
          <path
            fill="#34A853"
            d="M9 18c2.43 0 4.4673-.806 5.9564-2.1805l-2.9087-2.2581c-.8059.54-1.8368.859-3.0477.859-2.344 0-4.3282-1.5831-5.036-3.7104H.9574v2.3318C2.4382 15.9832 5.4818 18 9 18z"
          ></path>
          <path
            fill="#FBBC05"
            d="M3.964 10.71c-.18-.54-.2822-1.1168-.2822-1.71s.1023-1.17.2823-1.71V4.9582H.9573A8.9965 8.9965 0 0 0 0 9c0 1.4523.3477 2.8268.9573 4.0418L3.964 10.71z"
          ></path>
          <path
            fill="#EA4335"
            d="M9 3.5795c1.3214 0 2.5077.4541 3.4405 1.346l2.5813-2.5814C13.4632.8918 11.426 0 9 0 5.4818 0 2.4382 2.0168.9573 4.9582L3.964 7.29C4.6718 5.1627 6.6559 3.5795 9 3.5795z"
          ></path>
        </g>
      </svg>
      Google Sign Out
    </button>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  name: "SocialLoginComp",
  props: {
    msg: String,
  },
  data() {
    return {
      email: "",
      password: "",
      errors: [],
      error: "",
    };
  },
  methods: {
    async handleSignIn() {
      try {
        const googleUser = await this.$gAuth.signIn();
        // console.log(this.$gAuth.signIn);
        if (!googleUser) {
          return null;
        }
        this.user = googleUser.getBasicProfile().getEmail();
      } catch (error) {
        console.log(error);
        return null;
      }
    },
    async handleSignOut() {
      try {
        await this.$gAuth.signOut();
        // console.log(this.$gAuth.signOut);
        this.user = "";
      } catch (error) {
        console.log(error);
      }
    },
  },

  setup() {
    const Vue3GoogleOauth = inject("Vue3GoogleOauth");
    return {
      Vue3GoogleOauth,
    };
  },
};
</script>
<style>
.signup-buttons {
  margin-top: 15px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 3px;
  display: inline-block;
  margin-top: 0;
  padding: 15px;
  text-align: center;
  position: inherit;
}
.signup-buttons a {
  vertical-align: middle;
  text-decoration: none;
}
</style>