<template>
  <div class="container p-4">
    <div v-for="item in items" :key="item.id" class="p-2">
      <div class="card col">
        <img
          style="width: 50%"
          v-bind:src="item.photo"
          class="card-img m-auto"
          alt="..."
        />
        <div class="card-body">
          <h2 class="card-title">{{ item.name }}</h2>
          <p class="card-title">{{ item.description }}</p>
          <h3 class="card-title">${{ item.price }}</h3>
          <div v-if="item.quantity > 0">
            <img
              src="../../assets/icons8-minus-30.png"
              alt="Minus"
              class="px-2"
              v-on:click="minusitem()"
            />
            <h3 class="card-title d-inline">{{ quantityCart }}</h3>
            <img
              src="../../assets/icons8-add-30.png"
              alt="Add"
              class="px-2"
              v-on:click="additem(item.id)"
            />
          </div>
          <div v-else>
            <h3 class="card-title" style="color: #774936">Sold out</h3>
          </div>

          <div>
            <div v-if="item.quantity > 0" class="d-inline">
              <button class="px-5 mx-5" v-on:click="createItem(item.id)">
                <fa icon="shopping-cart" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ShopPage",
  data() {
    return {
      items: [],
      quantityCart: 1,
      total: 0,
    };
  },

  created() {
    this.getItems();
  },
  methods: {
    getItems() {
      axios
        .get("products")
        .then((res) => {
          //console.log(res.data);
          this.items = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    async createItem(id) {
      const index = id - 1;

      await axios
        .get("Cart")
        .then((res) => {
          this.itemsCart = res.data;
        })
        .catch((err) => {
          console.log(err);
        });

      this.flag = this.itemsCart.find((currentVal) => {
        return currentVal.idProduct === id;
      });
      if (!this.flag) {
        axios
          .post("Cart", {
            name: this.items[index].name,
            description: this.items[index].description,
            price: this.items[index].price,
            photo: this.items[index].photo,
            idProduct: id,
            quantity: this.quantityCart,
            total: this.quantityCart * this.items[index].price,
          })
          .then(() => {
            alert("Done Add");
          })
          .catch((err) => {
            console.log(err);
          });
        this.quantityCart = 1;
      } else {
        alert("you are already added this item");
      }
    },

    additem(id) {
      if (this.quantityCart < this.items[id - 1].quantity) this.quantityCart++;
      else alert(`available ${this.quantityCart} items only`);
    },
    minusitem() {
      if (this.quantityCart > 1) this.quantityCart--;
    },
  },
};
</script>

<style>
</style>