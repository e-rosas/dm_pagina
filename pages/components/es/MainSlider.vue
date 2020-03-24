<template>
  <div>
    <b-carousel id="carousel-1" :interval="4000" controls indicators>
      <!-- Text slides with image -->
      <b-carousel-slide
        text="No se requiere de cita."
        img-src="/img/slider/main/DM-Slide-1-min.jpg"
        style="height:450px;"
      >
        <h1 style="color: white;">
          Abierto los siete dias de la semana.
        </h1>
      </b-carousel-slide>

      <b-carousel-slide
        img-src="/img/slider/main/DM-Slide-2-min.jpg"
        style="height:450px;"
      >
        <h1 style="color: white;">
          Coronas, puentes, implantes,periodoncia, dentistas pediatricos.
        </h1>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>
<script>
export default {}
</script>
