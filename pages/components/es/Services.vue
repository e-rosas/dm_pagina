<template>
  <section id="services" class="section section-lg pt-lg-0">
    <div class="container">
      <div class="row justify-content-center text-center mb-lg">
        <div class="col-lg-8">
          <h2 class="display-3">Nuestros Servicios</h2>
          <p class="lead text-muted">
            Estos son algunos de los servicios que ofrecemos:
          </p>
        </div>
      </div>
      <div class="row justify-content-center mt--100">
        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <card class="border-0" hover shadow body-classes="py-5">
            <div class="px-6">
              <img
                v-lazy="'/img/services/servicio-dentistas-min.jpg'"
                class="rounded-square img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px;"
                alt="Servicio dentistas"
              />
              <div class="pt-4 text-center">
                <h5 class="title">
                  <small class="h6 text-muted">Dentista General</small>
                </h5>
              </div>
            </div>
          </card>
        </div>
        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <card class="border-0" hover shadow body-classes="py-5">
            <div class="px-6">
              <img
                v-lazy="'/img/services/servicio-cirugias-dentales-min.jpg'"
                class="rounded-square img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px;"
                alt="Cirugias dentales"
              />
              <div class="pt-4 text-center">
                <h5 class="title">
                  <small class="h6 text-muted"
                    >Cirugía oral y maxilofacial</small
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
                v-lazy="'/img/services/servicio-implantes-dentales-min.jpg'"
                class="rounded-square img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px;"
                alt="Implantes dentales"
              />
              <div class="pt-4 text-center">
                <h5 class="title">
                  <small class="h6 text-muted">Implantes Dentales</small>
                </h5>
              </div>
            </div>
          </card>
        </div>
        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <card class="border-0" hover shadow body-classes="py-5">
            <div class="px-6">
              <img
                v-lazy="'/img/services/servicio-endodoncistas-min.jpg'"
                class="rounded-square img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px;"
                alt="Endodoncista"
              />
              <div class="pt-4 text-center">
                <h5 class="title">
                  <small class="h6 text-muted">Endodoncistas</small>
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
                v-lazy="'/img/services/servicio-ortodoncista-min.jpg'"
                class="rounded-square img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px;"
                alt="Ortodoncista"
              />
              <div class="pt-4 text-center">
                <h5 class="title">
                  <small class="h6 text-muted">Ortodoncista</small>
                </h5>
              </div>
            </div>
          </card>
        </div>
        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <card class="border-0" hover shadow body-classes="py-5">
            <div class="px-6">
              <img
                v-lazy="'/img/services/servicio-periodoncista-min.jpg'"
                class="rounded-square img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px;"
                alt="Periodoncista"
              />
              <div class="pt-4 text-center">
                <h5 class="title">
                  <small class="h6 text-muted">Periodoncista</small>
                </h5>
              </div>
            </div>
          </card>
        </div>
        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <card class="border-0" hover shadow body-classes="py-5">
            <div class="px-6">
              <img
                v-lazy="'/img/services/servicio-pediatrico-min.jpg'"
                class="rounded-square img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px;"
                alt="Servicio pediatrico"
              />
              <div class="pt-4 text-center">
                <h5 class="title">
                  <small class="h6 text-muted">Servicio pediátrico</small>
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
  name: 'Servicios'
}
</script>
