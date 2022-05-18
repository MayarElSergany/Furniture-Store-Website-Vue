<template>
  <div>
    <div class="border">
      <div class="row">
        <h2 class="font3 line">ABOUT US</h2>
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
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AboutUs",

  data() {
    return {
      categories: [],
    };
  },
  created() {
    this.getCategories();
  },
  methods: {
    getCategories() {
      axios
        .get("categories")
        .then((res) => {
          //console.log(res.data);
          this.categories = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
.line {
  text-decoration: underline;
}
</style>