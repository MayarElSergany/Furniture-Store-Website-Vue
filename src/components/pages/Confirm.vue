<template>
  <div class="card container p-5">
    <div class="card-body">
      <h3 class="card-title">
        Total :
        <h5 class="card-text d-inline">$ {{ this.total }}</h5>
      </h3>
    </div>

    <ul
      class="list-group list-group-flush"
      v-for="item in itemsCart"
      :key="item.id"
    >
      <li class="list-group-item">
        Name: {{ item.name }} ({{ item.quantity }} items)
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "confirmComp",
  data() {
    return {
      itemsCart: [],
      items: [],
      total: 0,
    };
  },

  created() {
    this.getItems();
  },
  methods: {
    async getItems() {
      await axios
        .get("products")
        .then((res) => {
          //console.log(res.data);
          this.items = res.data;
        })
        .catch((err) => {
          console.log(err);
        });

      await axios
        .get("Cart")
        .then((res) => {
          //console.log(res.data);
          this.itemsCart = res.data;
        })
        .catch((err) => {
          console.log(err);
        });

      for (let i = 0; i < this.itemsCart.length; i++) {
        await axios
          .put("/products/" + this.itemsCart[i].idProduct, {
            name: this.itemsCart[i].name,
            description: this.itemsCart[i].description,
            photo: this.itemsCart[i].photo,
            quantity:
              this.items[this.itemsCart[i].idProduct - 1].quantity -
              this.itemsCart[i].quantity,
            price: this.itemsCart[i].price,

            salePercentage:
              this.items[this.itemsCart[i].idProduct - 1].salePercentage,
            discount: this.items[this.itemsCart[i].idProduct - 1].discount,
            color: this.items[this.itemsCart[i].idProduct - 1].color,
            warranty: this.items[this.itemsCart[i].idProduct - 1].warranty,
            rating: this.items[this.itemsCart[i].idProduct - 1].rating,
            relatedImg1:
              this.items[this.itemsCart[i].idProduct - 1].relatedImg1,
            relatedImg2:
              this.items[this.itemsCart[i].idProduct - 1].relatedImg2,
            relatedImg3:
              this.items[this.itemsCart[i].idProduct - 1].relatedImg3,
          })
          .then(() => console.log("Done Update"))
          .catch(() => console.log("err"));

        await axios
          .delete("Cart/" + this.itemsCart[i].id)
          .then(() => {
            console.log("Done");
          })
          .catch((err) => {
            console.log(err);
          });

        this.total += this.itemsCart[i].total;
      }
      console.log(this.total);
    },
  },
};
</script>

<style scoped>
</style>