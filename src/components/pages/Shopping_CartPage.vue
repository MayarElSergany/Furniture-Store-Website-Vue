<template>
  <div class="container p-4">
    <div v-for="item in items" :key="item.id" class="p-2">
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              v-bind:src="item.photo"
              class="img-fluid rounded-start"
              alt="item"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ item.name }}</h5>
              <h3 class="card-title">{{ item.total }} $</h3>
              <p class="card-text">{{ item.description }}</p>
              <button class="px-5 mx-5" v-on:click="deleteItem(item.id)">
                <img src="../../assets/icons8-remove-50.png" alt="delete" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="items.length > 0">
      <router-link class="nav-link active" aria-current="page" to="/confirm">
        <button
          class="btn btn-success px-5 mx-5"
          style="background-color: #774936"
        >
          Confirm
        </button>
      </router-link>
    </div>
    <div v-else>
      <img class="m-5" src="../../assets/online-shopping.png" width="250" />
      <h2 style="color: #774936">Your shopping cart looks empty</h2>
      <p>What are you waiting for?</p>
      <router-link class="nav-link active" aria-current="page" to="/shop">
        <button
          class="btn btn-success px-5 mx-5"
          style="background-color: #774936"
        >
          Start shopping
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ShoppingCart",
  data() {
    return {
      items: [],
      total: 0,
    };
  },

  created() {
    this.getItems();
  },
  methods: {
    getItems() {
      axios
        .get("Cart")
        .then((res) => {
          // console.log(res.data);
          this.items = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteItem(id) {
      axios
        .delete("Cart/" + id)
        .then(() => {
          alert("Done");
          this.getItems();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>