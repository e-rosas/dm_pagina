<template>
  <section id="insurances" class="section mt--100">
    <div class="container">
      <div class="row justify-content-center text-center mb-lg">
        <div class="col-lg-12">
          <div class="card bg-default shadow border-0">
            <img
              v-lazy="'img/insurances/Background-Aseguranza-2.jpg'"
              class="card-img-top"
            />
            <blockquote class="card-blockquote">
              <svg
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 583 95"
                class="svg-bg"
              >
                <polygon
                  points="0,52 583,95 0,95"
                  class="fill-default"
                ></polygon>
                <polygon
                  points="0,42 583,95 683,0 0,95"
                  opacity=".2"
                  class="fill-default"
                ></polygon>
              </svg>
              <h4 class="display-3 font-weight-bold text-white">
                We accept USA insurance with PPO plan.
              </h4>
              <p class="lead text-italic text-white">
                Contact us to find out if your plan has coverage in Hospital
                México
              </p>
            </blockquote>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <div class="px-4">
            <img
              v-lazy="'img/insurances/aetna.png'"
              class="rounded-square img-center img-fluid shadow shadow-lg--hover"
              style="width: 200px;"
            />
            <div class="pt-4 text-center">
              <h5 class="title">
                <span class="d-block mb-1">Aetna</span>
              </h5>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <div class="px-4">
            <img
              v-lazy="'img/insurances/bcbs.png'"
              class="rounded-sqaure img-center img-fluid shadow shadow-lg--hover"
              style="width: 92px;"
            />
            <div class="pt-4 text-center">
              <h5 class="title">
                <span class="d-block mb-1">BlueCross BlueShield</span>
              </h5>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <div class="px-4">
            <img
              v-lazy="'img/insurances/RFK_MEdical_Plan.png'"
              class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
              style="width: 80px;"
            />
            <div class="pt-4 text-center">
              <h5 class="title">
                <span class="d-block mb-1">R.F.K. Medical Plan</span>
              </h5>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <div class="px-4">
            <img
              v-lazy="'img/insurances/tw.png'"
              class="rounded-sqaure img-center img-fluid shadow shadow-lg--hover"
              style="width: 200px;"
            />
            <div class="pt-4 text-center">
              <h5 class="title">
                <span class="d-block mb-1">Transwestern</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
