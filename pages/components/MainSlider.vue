<template>
  <div>
    <b-carousel id="carousel-1" :interval="4000" controls indicators>
      <!-- Text slides with image -->
      <b-carousel-slide
        img-src="img/slider/main/DM-Slide-1-min.jpg"
        img-fluid
        style="max-height:450px;"
        img-alt="DM Slide"
      >
        <h2 style="color: white;">Hospital México remains open</h2>
        <div class="row d-none d-md-block">
          <div class="col-lg-12">
            <h3 style="color: white;">
              It is okay to come to México for medical treatment
            </h3>
            <h5 style="color: white;">
              Please call us at
              <a
                href="tel:18003158714"
                style="color: blue;"
                target="_blank"
                rel="noopener"
                data-toggle="tooltip"
                title="Call Us"
                >1 800 315 87 14</a
              >
              or
              <a
                href="tel:18003158714"
                style="color: blue;"
                target="_blank"
                rel="noopener"
                data-toggle="tooltip"
                title="Call Us"
                >011 52 664 683 6363 </a
              >for any questions.
            </h5>
          </div>
        </div>
      </b-carousel-slide>

      <b-carousel-slide
        caption=""
        text="No appointment needed."
        img-src="img/slider/main/DM-Slide-2-min.jpg"
        img-fluid
        style="max-height:450px;"
        img-alt="DM Slide 2"
      >
        <h2 style="color: white;">
          Crowns, bridges, implants and periodontics.
        </h2>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>
<script>
export default {
  name: 'Slider'
}
</script>
