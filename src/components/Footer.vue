<template>
  <footer class="bg-grey">
    <div class="container py-5">
      <div class="row py-4">
        <div class="col-lg-6 col-md-6 mb-5 mt-3">
          <h1 class="font-color align mb-4">HOMEY</h1>
          <br />
          <p class="font-color align">Lorem ipsum dolor sit amet,</p>
          <p class="font-color align">consectetur adipisicing elit,</p>
          <p class="font-color align">sed do eiusmod</p>
          <br />
          <div class="row div-icons">
            <div class="col-lg-2 col-md-2">
              <li class="list-inline-item">
                <a href="#" target="_blank" title="facebook">
                  <fa :icon="['fab', 'facebook']" class="icons icons-color"
                /></a>
              </li>
            </div>
            <div class="col-lg-2 col-md-2">
              <li class="list-inline-item">
                <a href="#" target="_blank" title="instagram"
                  ><fa
                    :icon="['fab', 'instagram']"
                    class="icons2 icons-color"
                  />
                </a>
              </li>
            </div>
            <div class="col-lg-2 col-md-2">
              <li class="list-inline-item">
                <a href="#" target="_blank" title="linkedin">
                  <fa :icon="['fab', 'linkedin']" class="icons3 icons-color" />
                </a>
              </li>
            </div>
            <div class="col-lg-2 col-md-2">
              <li class="list-inline-item">
                <a href="#" target="_blank" title="twitter"
                  ><fa :icon="['fab', 'twitter']" class="icons4 icons-color"
                /></a>
              </li>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <h2 class="font-weight-bold mb-4 color-orange">COMPANY</h2>
          <ul class="list-unstyled mb-0">
            <li><a href="#" class="font-color">Profile</a></li>
            <li><a href="#" class="font-color">About Us</a></li>
            <li><a href="#" class="font-color">Contact</a></li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6">
          <h2 class="font-weight-bold mb-4 color-orange">RETURNS</h2>
          <ul class="list-unstyled mb-0">
            <li>
              <a href="#" class="font-color">FAQs</a>
            </li>
            <li>
              <a href="#" class="font-color">Size Guide</a>
            </li>
            <li>
              <a href="#" class="font-color">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterBar",
};
</script>

<style>
.bg-grey {
  background-color: #373737;
}
.font-color {
  color: white;
  text-decoration: none;
}
.align {
  text-align: left;
  line-height: 0%;
}
.color-orange {
  color: #e89e00;
}
.icons-color {
  color: white;
}
.icons {
  margin-left: -80px;
}
.icons2 {
  margin-left: -60px;
}
.icons3 {
  margin-left: -40px;
}
.icons4 {
  margin-left: -20px;
}
</style>