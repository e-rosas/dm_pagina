<template>
  <div>
    <b-carousel id="carousel-1" :interval="4000" controls indicators>
      <!-- Text slides with image -->
      <b-carousel-slide
        img-src="/img/slider/main/DM-Slide-1-min.jpg"
        img-fluid
        style="max-height:450px;"
      >
        <h3 style="color: white;">Hospital México está abierto</h3>
        <div class="row d-none d-md-block">
          <h3 style="color: white;">
            Está bien venir a México por tratamiento médico
          </h3>
          <h5 style="color: white;">
            Por favor llámenos al
            <a
              href="tel:18003158714"
              style="color: blue;"
              target="_blank"
              rel="noopener"
              data-toggle="tooltip"
              title="Llámenos"
              >1 800 315 87 14</a
            >
            o al
            <a
              href="tel:18003158714"
              style="color: blue;"
              target="_blank"
              rel="noopener"
              data-toggle="tooltip"
              title="Llámenos"
              >011 52 664 683 6363 </a
            >para cualquier duda o pregunta.
          </h5>
        </div>
      </b-carousel-slide>

      <b-carousel-slide
        img-src="/img/slider/main/DM-Slide-2-min.jpg"
        img-fluid
        style="max-height:450px;"
      >
        <h4 style="color: white;">
          Coronas, puentes, implantes,periodoncia, dentistas pediatricos.
        </h4>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>
<script>
export default {}
</script>
