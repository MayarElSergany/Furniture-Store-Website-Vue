<template>
  <NavBar :products="productsTitles" />
  <router-view />
  <FooterBar />
</template>

<script>
import NavBar from "./components/Navbar.vue";
import FooterBar from "./components/Footer.vue";
import axios from "axios";
export default {
  name: "App",

  components: {
    NavBar,
    FooterBar,
  },
  data() {
    return {
      productsTitles: [],
    };
  },
  created: function () {
    axios
      .get("products")
      .then((res) => {
        // for (let i = 0; i<=(res.data).length; i++){
        //   console.log(this.productsTitles);
        //   this.productsTitles.push(res.data[i].name);
        // }
        this.productsTitles = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
