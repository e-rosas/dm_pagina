<template>
  <div id="app">
    <Header />
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
import Header from '~/pages/components/es/Header'
import Footer from '~/pages/components/es/Footer'

export default {
  components: {
    FadeTransition,
    Header,
    Footer
  }
}
</script>
