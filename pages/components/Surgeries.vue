<template>
  <section id="pricing" class="section mt--100">
    <div class="container">
      <div class="row row-grid align-items-center">
        <div class="col-md-4 order-md-1">
          <div class="pr-md-5">
            <icon
              name="fa fa-usd"
              class="mb-5"
              size="lg"
              type="success"
              shadow
              rounded
            ></icon>
            <h3>Cost comparison</h3>
            <p>Compare dental procedures cost.</p>
          </div>
        </div>
        <div class="col-md-8 order-md-2">
          <b-table
            responsive
            head-variant="light"
            hover
            :items="services"
          ></b-table>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      services: [
        {
          procedure: 'White Fillings',
          hospital_méxico: '$45 dlls.',
          USA: '$90 - $250 dlls.'
        },
        {
          procedure: 'Crown (porcelain)',
          hospital_méxico: '$280 dlls.',
          USA: '$875 - $1400 dlls.'
        },
        {
          procedure: 'Crown (zirconia)',
          hospital_méxico: '$500 dlls.',
          USA: '$900 - $1,800 dlls.'
        },
        {
          procedure: 'Bridge (1 Tooth)',
          hospital_méxico: '$480 dlls.',
          USA: '$600 - $1,200 dlls.'
        },
        {
          procedure: 'Complete dentures',
          hospital_méxico: '$550 - $600 dlls.',
          USA: '$2,000 - $18,000 dlls.'
        }
      ]
    }
  }
}
</script>
