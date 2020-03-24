<template>
  <div>
    <b-carousel id="carousel-1" :interval="4000" controls indicators>
      <!-- Text slides with image -->
      <b-carousel-slide
        img-src="img/slider/main/DM-Slide-1-min.jpg"
        style="height:450px;"
      >
        <h1 style="color: white;">Open 24 hours, Monday through Sunday.</h1>
      </b-carousel-slide>

      <b-carousel-slide
        caption=""
        text="No appointment needed."
        img-src="img/slider/main/DM-Slide-2-min.jpg"
        style="height:450px;"
      >
        <h1 style="color: white;">
          Crowns, bridges, implants and periodontics.
        </h1>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>
<script>
export default {}
</script>
