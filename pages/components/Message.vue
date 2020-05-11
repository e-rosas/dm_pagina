<template>
  <section id="message" class="section section-lg pt-lg-0">
    <div class="container">
      <div class="alert alert-warning" role="alert">
        <b>COVID-19 Update</b>
      </div>
      <!-- <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="row row-grid align-items-center">
            <div class="col-lg-12">
              <card class="border-0" hover shadow body-classes="py-5">
                <div class="row">
                  <div class="col-md-8">
                    <h6 class="text-primary text-uppercase">
                      Hospital México remains open
                    </h6>
                    <p class="description mt-3">
                      The United States has temporarily limited inbound land
                      border crossings from Canada and México to “essential
                      travel”. This action does not prevent U.S citizens and
                      lawful permanent residents from returning to the United
                      States.
                    </p>
                    <div class="text-right">
                      <a href="https://mx.usembassy.gov/wha-press-guidance/"
                        >U.S. Embassy</a
                      >
                    </div>

                    <p class="description mt-3">
                      Hospital México is taking all the necessary precautions to
                      guarantee your safety and well-being. Please call us at
                      <a
                        href="tel:18003158714"
                        target="_blank"
                        rel="noopener"
                        data-toggle="tooltip"
                        title="Call Us"
                        >1 800 315 87 14</a
                      >
                      for any questions you may have.
                    </p>
                  </div>
                  <div class="col-md-4">
                    <img
                      v-lazy="'/img/covid/covid-19.png'"
                      class="rounded-square img-center img-fluid"
                      style="height:300px"
                    />
                  </div>
                </div>
              </card>
            </div>
          </div>
        </div>
      </div> -->
      <card gradient="warning" no-body shadow-size="lg" class="border-0">
        <div class="p-5">
          <div class="row align-items-center">
            <div class="col-lg-12">
              <h3 class="text-white">
                Hospital México is open
              </h3>
              <p class="lead text-white mt-3 text-justify">
                The United States has temporarily limited inbound land border
                crossings from Canada and México to “essential travel”. This
                action does not prevent U.S citizens and lawful permanent
                residents from returning to the United States.
              </p>
              <div class="text-right">
                <a
                  href="https://mx.usembassy.gov/wha-press-guidance/"
                  style="color: black;"
                  >U.S. Embassy</a
                >
              </div>

              <p class="text-white mt-3 text-justify">
                Hospital México is taking all the necessary precautions to
                guarantee your safety and well-being while visiting our
                facility. Please call us at
                <a
                  href="tel:18003158714"
                  style="color: black;"
                  target="_blank"
                  rel="noopener"
                  data-toggle="tooltip"
                  title="Call Us"
                  >1 800 315 87 14</a
                >
                or
                <a
                  href="tel:18003158714"
                  style="color: black;"
                  target="_blank"
                  rel="noopener"
                  data-toggle="tooltip"
                  title="Call Us"
                  >011 52 664 683 6363
                </a>
                for any questions you may have.
              </p>
            </div>
          </div>
        </div>
      </card>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Message'
}
</script>
