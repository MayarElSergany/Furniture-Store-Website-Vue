<template>
  <br />
  <div class="container">
    <div class="row mb-3">
      <div class="col-sm-12 col-md-12 col-lg-12">
        <div class="card mb-3">
          <img v-bind:src="photo" class="card-img-top" alt="..." height="400" />
          <div class="card-body">
            <h3 class="card-title color">
              <b>{{ name }}</b>
            </h3>
            <p class="card-text">
              {{ description }}
            </p>
            <h4 class="card-text">Price: ${{ price }}</h4>
            <h4 class="card-text">Color: {{ color }}</h4>
            <h4 class="card-text">Warranty: {{ warranty }}</h4>
            <select
              class="form-select select"
              aria-label="Default select example"
            >
              <option selected>Colors Available</option>
              <option value="1">Light Green</option>
              <option value="2">Red</option>
              <option value="3">OffWhite</option>
            </select>
            <br />
            <router-link to="/shop" class="btn btn-primary btn-color"
              >BACK TO SHOP PAGE</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <br />
    <div class="border">
      <div class="row">
        <h3 class="font3 line mb-5">Related Items</h3>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-12">
          <img
            v-bind:src="relatedImg1"
            class="card-img-top"
            alt="..."
            height="400"
          />
          <h3 class="color">Price: ${{ price }}</h3>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12">
          <img
            v-bind:src="relatedImg2"
            class="card-img-top"
            alt="..."
            height="400"
          />
          <h3 class="color">Price: ${{ price }}</h3>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12">
          <img
            v-bind:src="relatedImg3"
            class="card-img-top"
            alt="..."
            height="400"
          />
          <h3 class="color">Price: ${{ price }}</h3>
        </div>
      </div>
    </div>

    <div class="row mt-5">
      <hr />
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-4 col-sm-12">
        <h3><b class="color-red"> FREE</b> Home Delivery</h3>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12">
        <h3><b class="color-red"> EASY</b> Returns</h3>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12">
        <h3>Availabilty:<b class="color-gold"> INSTOCK!!</b></h3>
      </div>
    </div>
    <div class="row">
      <hr />
    </div>
    <div class="border mt-5">
      <div class="row">
        <h2 class="font3 line mb-5">REVIEWS</h2>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-12">
          <fa id="user-icon" icon="user"></fa>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12">
          <div class="row align">
            <p><b>Name:</b> Lorem ipsum dolo</p>
          </div>
          <div class="row">
            <p class="margin-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias rem
              exercitationem necessitatibus. Maxime optio fase mollitia saepe et
              in odit accusamus eveniet sit.
            </p>
          </div>
          <div class="row align">
            <p>
              <b> Rating:</b
              ><img v-bind:src="rating" alt="..." height="50" width="200" />
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12">
          <div class="row mt-1">
            <b>YOUR OPINION MATTERS <fa id="flag" icon="flag"></fa></b>
          </div>
          <input
            type="email"
            class="form-control mb-4"
            id="inputEmail4"
            placeholder="Email"
          />
          <input
            type="text"
            class="form-control mb-4"
            placeholder="City"
            id="inputCity"
          />
          <div class="form-group">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Type your message..."
              rows="3"
            ></textarea>
            <button type="button" class="btn btn-primary mt-3">Send</button>
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
  name: "DetailsPage",
  data() {
    return {
      photo: "",
      price: "",
      name: "",
      description: "",
      rating: "",
      color: "",
      warranty: "",
      relatedImg1: "",
      relatedImg2: "",
      relatedImg3: "",
    };
  },
  created() {
    this.getproductbyid();
  },
  methods: {
    getproductbyid() {
      this.id = this.$route.params.id;
      axios
        .get(`products/?id=${this.id}`)
        .then((res) => {
          console.log(res.data);
          for (let i = 0; i < res.data.length; i++) {
            this.name = res.data[i].name;
            this.photo = res.data[i].photo;
            this.price = res.data[i].price;
            this.description = res.data[i].description;
            this.rating = res.data[i].rating;
            this.color = res.data[i].color;
            this.warranty = res.data[i].warranty;
            this.relatedImg1 = res.data[i].relatedImg1;
            this.relatedImg2 = res.data[i].relatedImg2;
            this.relatedImg3 = res.data[i].relatedImg3;
          }
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
.btn-color {
  background-color: #774936;
  border: none;
}
.btn-color:hover {
  background-color: brown;
}
.color {
  color: #774936;
}
.align {
  text-align: left;
}
.margin-left {
  text-align: left;
}
#user-icon {
  font-size: 300px;
}
.color-red {
  color: rgb(230, 82, 82);
}
.color-gold {
  color: rgb(170, 170, 43);
}
.line {
  text-decoration: underline;
}
#flag {
  color: brown;
}
.select {
  font-size: 20px;
  width: 300px;
  margin-left: 500px;
}
/* .card-text{
  text-align: left;
} */
</style>