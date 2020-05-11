<template>
  <section id="services" class="section section-lg pt-lg-0">
    <div class="container">
      <div class="row justify-content-center text-center mb-lg">
        <div class="col-lg-8">
          <h2 class="display-3">Our Services</h2>
          <p class="lead text-muted">
            These are some of the services we offer:
          </p>
        </div>
      </div>
      <div class="row justify-content-center mt--100">
        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <card class="border-0" hover shadow body-classes="py-5">
            <div class="px-6">
              <img
                v-lazy="'img/services/service-dentists-min.jpg'"
                class="rounded-square img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px;"
                alt="Dental Service"
              />
              <div class="pt-4 text-center">
                <h5 class="title">
                  <small class="h6 text-muted">General Dentist</small>
                </h5>
              </div>
            </div>
          </card>
        </div>
        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <card class="border-0" hover shadow body-classes="py-5">
            <div class="px-6">
              <img
                v-lazy="'img/services/service-maxillofacial-min.jpg'"
                class="rounded-square img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px;"
                alt="Oral and Maxillofacial Service"
              />
              <div class="pt-4 text-center">
                <h5 class="title">
                  <small class="h6 text-muted"
                    >Oral and Maxillofacial Surgery</small
                  >
                </h5>
              </div>
            </div>
          </card>
        </div>
        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <card class="border-0" hover shadow body-classes="py-5">
            <div class="px-6">
              <img
                v-lazy="'img/services/service-implants-min.jpg'"
                class="rounded-square img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px;"
                alt="Dental implants"
              />
              <div class="pt-4 text-center">
                <h5 class="title">
                  <small class="h6 text-muted">Dental Implants</small>
                </h5>
              </div>
            </div>
          </card>
        </div>
        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <card class="border-0" hover shadow body-classes="py-5">
            <div class="px-6">
              <img
                v-lazy="'img/services/service-endodontist-min.jpg'"
                class="rounded-square img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px;"
                alt="Endodontics service"
              />
              <div class="pt-4 text-center">
                <h5 class="title">
                  <small class="h6 text-muted">Endodontics</small>
                </h5>
              </div>
            </div>
          </card>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <card class="border-0" hover shadow body-classes="py-5">
            <div class="px-6">
              <img
                v-lazy="'img/services/service-orthodontist-min.jpg'"
                class="rounded-square img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px;"
                alt="Orthodontics service"
              />
              <div class="pt-4 text-center">
                <h5 class="title">
                  <small class="h6 text-muted">Orthodontics</small>
                </h5>
              </div>
            </div>
          </card>
        </div>
        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <card class="border-0" hover shadow body-classes="py-5">
            <div class="px-6">
              <img
                v-lazy="'img/services/service-periodontists-min.jpg'"
                class="rounded-square img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px;"
                alt="Periodontics"
              />
              <div class="pt-4 text-center">
                <h5 class="title">
                  <small class="h6 text-muted">Periodontics</small>
                </h5>
              </div>
            </div>
          </card>
        </div>
        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <card class="border-0" hover shadow body-classes="py-5">
            <div class="px-6">
              <img
                v-lazy="'img/services/service-pediatric-min.jpg'"
                class="rounded-square img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px;"
                alt="Pediatric Dentist"
              />
              <div class="pt-4 text-center">
                <h5 class="title">
                  <small class="h6 text-muted">Pediatric Dentist</small>
                </h5>
              </div>
            </div>
          </card>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Services'
}
</script>
