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
import MainSlider from './components/MainSlider'
import Description from './components/Description'
import Services from './components/Services'
import Surgeries from './components/Surgeries'
import Insurances from './components/Insurances'
import Contact from './components/Contact'
import Tourism from './components/Tourism'
import Message from './components/Message'
export default {
  layout: 'App',
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
      title: 'DentiMéxico​ in Tijuana, providing affordable dental care.',
      description:
        'DentiMexico is the Dental Center integrated to Hospital México, providing affordable dental care for everyone. Call now for any questions you may have.',
      structuredData: {
        '@context': 'http://schema.org',
        '@type': 'MedicalBusiness',
        name: 'DentiMéxico',
        currenciesAccepted: 'USD, MXN',
        paymentAccepted: 'Cash, Credit Card',
        image: 'https://hospitalmexico.org/img/brand/Hm-logo-02.png',
        telephone: '1 800 315 87 14',
        email: 'info@hospitalmexico.org',
        openingHours: ['Mo-Su all day'],
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Hospital México 9077 De la Amistad Av.',
          addressLocality: 'Colonia Federal',
          addressRegion: 'Tijuana, B.C',
          addressCountry: 'Mexico',
          postalCode: '22010'
        },
        url: 'https://dentimexico.com/'
      }
    }
  },
  head() {
    return {
      title: this.title,
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.description
        }
      ],
      script: [{ type: 'application/ld+json', json: this.structuredData }]
    }
  }
}
</script>
