<template>
  <div class="container p-4">
    <div class="row">
      <img src="@/assets/home.jpg" width="100%" height="500" />
      <div class="top-left">
        <h1 class="background-image">
          The best place <br />
          made you
          <br />
          feel home
        </h1>
      </div>
    </div>
    <br />

    <div class="border">
      <div class="row p-4">
        <div class="col-lg-3 col-md-3 col-sm-12">
          <h4 class="font">YEAR END</h4>
          <h5 class="font font2"><b>SALE OFF</b></h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
            vero quasi volup,
          </p>
        </div>
        <div
          class="col-lg-3 col-md-3 col-sm-12"
          v-for="product in products"
          :key="product.id"
        >
          <div
            class="card"
            style="width: 9rem"
            v-if="product.id > 0 && product.id <= 3"
          >
            <img
              v-bind:src="product.photo"
              class="card-img-top"
              style="height: 140px"
              alt="..."
            />
            <div class="card-body">
              <p class="card-text">{{ product.name }}</p>
              <p class="card-text">
                <strike>{{ product.price }}</strike> {{ product.discount }}
              </p>
              <button class="button">{{ product.salePercentage }}</button>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
    <br />
    <div class="border">
      <div class="row">
        <h2 class="font3">CATEGORIES</h2>
      </div>
      <div class="container p-4">
        <div
          id="carouselExampleDark"
          class="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>

          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <div class="row">
                <div
                  class="col-lg-4"
                  v-for="category in categories"
                  :key="category.id"
                >
                  <div
                    class="card"
                    style="width: 18rem"
                    v-if="category.id > 6 && category.id < 10"
                  >
                    <img
                      v-bind:src="category.image"
                      class="card-img-top"
                      alt="..."
                      style="height: 200px"
                    />
                    <div class="card-body">
                      <p class="card-text">{{ category.title }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item" data-bs-interval="2000">
              <div class="row">
                <div
                  class="col-lg-4"
                  v-for="category in categories"
                  :key="category.id"
                >
                  <div
                    class="card"
                    style="width: 18rem"
                    v-if="category.id > 9 && category.id < 13"
                  >
                    <img
                      v-bind:src="category.image"
                      class="card-img-top"
                      alt="..."
                      style="height: 200px"
                    />
                    <div class="card-body">
                      <p class="card-text">
                        {{ category.title }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    <br />
    <div class="border">
      <div class="row">
        <h2 class="font3">WHY CHOOSE US?</h2>
      </div>
      <div class="row p-4">
        <div
          class="col-lg-4 col-md-4 col-sm-12"
          v-for="feature in features"
          :key="feature.id"
        >
          <div class="card mb-3" style="max-width: 300px">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  v-bind:src="feature.image"
                  class="img-fluid rounded-start"
                  style="height: 100%"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-text">{{ feature.title }}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HomePage",

  data() {
    return {
      products: [],
      categories: [],
      features: [],
    };
  },
  created: function () {
    var that = this;
    axios
      .all([
        axios.get("products"),
        axios.get("features"),
        axios.get("categories"),
      ])
      .then(
        axios.spread(function (product, feature, category) {
          that.products = product.data;
          that.features = feature.data;
          that.categories = category.data;
        })
      );
  },
};
</script>

<style>
.container {
  position: relative;
}

.top-left {
  position: absolute;
  top: 150px;
  left: 60px;
  text-align: left;
}
.border {
  border: 2px solid black;
}
.font {
  text-align: left;
  margin-left: 6px;
}
.font2 {
  color: #e89e00;
}
.button {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 1%;
  left: 60%;
  background-color: #e89e00;
  color: white;
  border: none;
}
.card {
  position: relative;
}
.font3 {
  color: #774936;
}
.background-image {
  background-image: url("@/assets/background_3.jpg");
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}
</style>