<template>
  <div id="app">
    <SimpleHeader />
    <main>
      <fade-transition origin="center" mode="out-in" :duration="250">
        <nuxt />
      </fade-transition>
    </main>
    <Footer />
  </div>
</template>

<script>
import { FadeTransition } from 'vue2-transitions'
import SimpleHeader from '~/pages/components/SimpleHeader'
import Footer from '~/components/Footer'

export default {
  components: {
    FadeTransition,
    SimpleHeader,
    Footer
  }
}
</script>
