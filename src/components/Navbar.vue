<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link to="/" class="nav"
          ><img src="@/assets/logo-2.png"
        /></router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link
                to="/home"
                class="nav nav-margin"
                role="button"
                aria-expanded="false"
              >
                HOME
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/about"
                class="nav nav-margin"
                role="button"
                aria-expanded="false"
              >
                ABOUT US
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/shop"
                class="nav nav-margin"
                role="button"
                aria-expanded="false"
              >
                SHOP
              </router-link>
            </li>
            <li class="nav-item">
              <fa
                id="searchIcon"
                icon="search"
                class="nav nav-margin"
                role="button"
                aria-expanded="false"
                @click="searchIcon"
              ></fa>
              <div class="autocomplete">
                <input
                  type="text"
                  @input="onChange"
                  v-model="search"
                  @keydown.down="onArrowDown"
                  @keydown.up="onArrowUp"
                  @keydown.enter="onEnter"
                  id="search"
                  autocomplete="off"
                />
                <ul
                  id="autocomplete-results"
                  v-show="isOpen"
                  class="autocomplete-results"
                >
                  <li class="loading" v-if="isLoading">Loading results...</li>
                  <li
                    v-else
                    v-for="(result, i) in results"
                    :key="i"
                    @click="setResult(result)"
                    class="autocomplete-result"
                    :class="{ 'is-active': i === arrowCounter }"
                  >
                    {{ result.name }}
                  </li>
                </ul>
              </div>
              <fa id="clear" icon="remove" @click="clear"></fa>
            </li>
            <li class="nav-item">
              <router-link
                to="/shopping"
                class="nav nav-margin"
                role="button"
                aria-expanded="false"
                ><fa icon="shopping-cart"
              /></router-link>
            </li>
            <li class="nav-item topnav">
              <router-link
                to="/login"
                class="nav nav-margin"
                role="button"
                aria-expanded="false"
                ><button
                  class="btnn"
                  v-show="this.isLoggedIn === 0"
                  @click="LoggedIn"
                >
                  lOGIN
                </button></router-link
              >
            </li>
            <li class="nav-item topnav">
              <button
                class="btnn"
                v-show="this.isLoggedIn === 1"
                @click="handleSignOut"
              >
                lOGOUT
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  name: "NavBar",
  props: {
    products: {
      type: Array,
      required: false,
      default: () => [],
    },
    isAsync: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      isOpen: false,
      results: [],
      search: "",
      isLoading: false,
      arrowCounter: -1,
      isLoggedIn: 0,
    };
  },
  watch: {
    products: function (value, oldValue) {
      if (value.length !== oldValue.length) {
        this.results = value;
        this.isLoading = false;
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  unmounted() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    LoggedIn() {
      return (this.isLoggedIn = 1);
    },
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
        this.isLoggedIn = 0;
        // console.log(this.$gAuth.signOut);
        this.user = "";
      } catch (error) {
        console.log(error);
      }
    },
    searchIcon() {
      document.getElementById("search").style.display = "block";
      document.getElementById("clear").style.display = "block";
      document.getElementById("search").focus();
      document.getElementById("searchIcon").style.display = "none";
    },
    clear() {
      document.getElementById("searchIcon").style.display = "block";
      document.getElementById("search").style.display = "none";
      document.getElementById("clear").style.display = "none";
    },
    setResult(result) {
      this.search = result.name;
      this.isOpen = false;
      //this.$router.push(`/shop`);
      this.$router.push(`/products/${result.id}`);
    },
    filterResults() {
      this.results = this.products.filter((product) => {
        return (
          product.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      });
    },
    onChange() {
      this.$emit("input", this.search);

      if (this.isAsync) {
        this.isLoading = true;
      } else {
        this.filterResults();
        this.isOpen = true;
      }
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false;
        this.arrowCounter = -1;
      }
    },
    onArrowDown() {
      if (this.arrowCounter < this.results.length) {
        this.arrowCounter = this.arrowCounter + 1;
      }
    },
    onArrowUp() {
      if (this.arrowCounter > 0) {
        this.arrowCounter = this.arrowCounter - 1;
      }
    },
    onEnter() {
      this.search = this.results[this.arrowCounter];
      this.isOpen = false;
      this.arrowCounter = -1;
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
.btnn {
  background-color: #774936;
  color: white;
  border-radius: 40px;
  width: 100px;
  height: 30px;
  border: none;
}
#searchIcon {
  font-size: 1em;
  color: #774936;
}
#searchIcon:hover {
  color: brown;
}

#search {
  color: rgb(97, 89, 89);
  background-color: white;
  border: solid 3px #774936;
  border-radius: 10px;
  width: 100%;
  font-size: 1em;
  display: none;
  outline: none;
  cursor: text;
}
.nav-margin {
  margin-left: 40px;
}
.nav {
  text-decoration: none;
  color: #774936;
}
.nav:hover {
  color: brown;
}
.btnn:hover {
  background-color: brown;
}

#clear {
  text-align: right;
  width: 7%;
  margin-top: -1.5em;
  margin-left: 90%;
  display: none;
  color: #774936;
}

#clear:hover {
  cursor: pointer;
}

.autocomplete {
  position: relative;
}

.autocomplete-results {
  padding: 0;
  margin: 0;
  border: 1px solid #eeeeee;
  height: 120px;
  overflow: auto;
}

.autocomplete-result {
  list-style: none;
  text-align: left;
  padding: 4px 2px;
  cursor: pointer;
}

.autocomplete-result.is-active,
.autocomplete-result:hover {
  background-color: #774936;
  color: white;
}
</style>