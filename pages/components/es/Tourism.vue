<template>
  <section id="tourism" class="section section-lg pt-lg-0">
    <div class="container">
      <div class="row justify-content-center text-center mb-lg mt--50">
        <div class="col-lg-8">
          <h2 class="display-3">Turismo médico en Tijuana</h2>
        </div>
      </div>
      <div class="row justify-content-center mt--100">
        <div class="col-lg-12">
          <div class="row row-grid align-items-center">
            <div class="col-lg-12">
              <card class="border-0" hover shadow body-classes="py-5">
                <div class="row">
                  <div class="col-md-8">
                    <h6 class="text-primary text-uppercase">
                      Cada vez más personas se atienden fuera de Estados Unidos
                    </h6>
                    <p class="description mt-3">
                      De acuerdo a la “Encuesta 2017 de los tiempos de espera de
                      citas médicas y las tasas de aceptación de Medicare y
                      Medicaid”, los pacientes esperan un promedio de 24 días
                      para programar una cita de primera vez con un médico; esto
                      representa un incremento de 30% comparado con el año 2014.
                    </p>
                  </div>
                  <div class="col-md-4">
                    <img
                      v-lazy="'/img/tourism/hm-tijuana.jpg'"
                      class="rounded-square img-center img-fluid shadow"
                      style="height:300px"
                    />
                  </div>
                </div>
              </card>
            </div>
          </div>
          <div class="row row-grid align-items-center">
            <div class="col-lg-12">
              <card class="border-0" hover shadow body-classes="py-5">
                <div class="row">
                  <div class="col-md-8">
                    <h6 class="text-primary text-uppercase">
                      Menor tiempo de espera
                    </h6>
                    <p class="description mt-3">
                      En caso de cirugías se debe esperar aún más tiempo después
                      de ver al médico, por ejemplo, para una cirugía de
                      ortopedia se puede agregar en promedio 12 días más.
                      Tijuana se ha convertido en una opción muy importante para
                      los pacientes que no desean esperar tanto tiempo, o para
                      quienes los recursos económicos no son suficientes para
                      cubrir un gasto promedio de una cirugía de histerectomía
                      (extracción del útero) que llega a más de 15 mil dólares.
                      En Hospital México una histerectomía se puede programar en
                      48 horas y el costo promedio inicia desde los 4,300
                      dólares.
                    </p>
                  </div>
                  <div class="col-md-4">
                    <img
                      v-lazy="'/img/tourism/cirugias-tijuana.jpg'"
                      class="rounded-square img-center img-fluid shadow"
                      style="height:190"
                    />
                  </div>
                </div>
              </card>
            </div>
          </div>
          <div class="row row-grid align-items-center">
            <div class="col-lg-12">
              <card class="border-0" hover shadow body-classes="py-5">
                <div class="row">
                  <div class="col-md-8">
                    <h6 class="text-primary text-uppercase">
                      Beneficios
                    </h6>
                    <p class="description mt-3">
                      El turismo médico en Tijuana se ha detonado en los últimos
                      años, aprovechando los inconvenientes del servicio de
                      salud en Estados Unidos, pero sobre todo por la calidad en
                      los servicios que ofrece, la cercanía con San Diego,
                      rápidas vías de acceso y comunicación, su aeropuerto
                      internacional y las demás bondades que pueda encontrar en
                      la ciudad como su historia, gastronomía, vida nocturna y
                      de aventura.
                    </p>
                  </div>
                  <div class="col-md-4">
                    <img
                      v-lazy="'/img/tourism/panoramica-tijuana.jpg'"
                      class="rounded-square img-center img-fluid shadow"
                      style="height:400"
                    />
                  </div>
                </div>
              </card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
