<template>
  <div id="app">
    <MainSlider></MainSlider>
    <Message></Message>
    <Description></Description>
    <Services></Services>
    <Surgeries></Surgeries>
    <Insurances></Insurances>
    <Tourism></Tourism>
    <Contact></Contact>
  </div>
</template>

<script>
import MainSlider from './components/es/MainSlider'
import Description from './components/es/Description'
import Services from './components/es/Services'
import Surgeries from './components/es/Surgeries'
import Insurances from './components/es/Insurances'
import Contact from './components/es/Contact'
import Tourism from './components/es/Tourism'
import Message from './components/es/Message'
export default {
  layout: 'AppEs',
  name: 'Index',
  components: {
    MainSlider,
    Description,
    Services,
    Surgeries,
    Insurances,
    Contact,
    Tourism,
    Message
  },
  data() {
    return {
      title: 'Dentistas en Tijuana'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'DentiMexico Tijuana',
          name: 'DentiMexico, Tijuana, Hospital México​ Tijuana',
          content:
            'Dentista, Cirugia, Tijuana, México​, Dental, Resinas, Corona, Puentes, Dentaduras'
        }
      ]
    }
  }
}
</script>
