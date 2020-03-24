<template>
  <header class="header-global">
    <base-nav class="navbar-main" transparent type="" effect="dark" expand>
      <div slot="brand" class="navbar-brand mr-lg-5">
        <img src="img/brand/Hm-logo-02.png" alt="logo" />
      </div>

      <div slot="content-header" slot-scope="{ closeMenu }" class="row">
        <div class="col-6 collapse-brand">
          <nuxt-link slot="brand" class="navbar-brand mr-lg-5" to="/">
            <img src="img/brand/Hm-logo-02.png" alt="logo" />
          </nuxt-link>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>
      <ul class="navbar-nav align-items-lg-center ml-lg-auto">
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="mailto:info@hospitalmexico.org"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="Email Us"
          >
            <i class="fa fa-envelope"></i>
            <span class="nav-link-inner--text d-lg-none"
              >info@hospitalmexico.org</span
            >
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="tel:18003158714"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="Call Us"
          >
            <i class="fa fa-phone"></i>
            <span class="nav-link-inner--text d-lg-none">1 800 315 87 14</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="http://hospitalmexico.org/es/"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="En Español"
          >
            <i class="fa fa-globe"></i>
            <span class="nav-link-inner--text d-lg-none">Español</span>
          </a>
        </li>
      </ul>
    </base-nav>
  </header>
</template>
<script>
import BaseNav from '~/components/BaseNav'
import CloseButton from '~/components/CloseButton'

export default {
  components: {
    BaseNav,
    CloseButton
  }
}
</script>
