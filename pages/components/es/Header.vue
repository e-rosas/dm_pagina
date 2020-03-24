<template>
  <div>
    <base-nav type="" transparent effect="" expand>
      <nuxt-link slot="brand" class="navbar-brand mr-lg-5" to="/">
        <img src="/img/brand/Dm-logo.png" alt="logo" />
      </nuxt-link>

      <div slot="content-header" slot-scope="{ closeMenu }" class="row">
        <div class="col-6 collapse-brand">
          <a href="#">
            <img src="/img/brand/Dm-logo.png" />
          </a>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>

      <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
        <base-dropdown class="nav-item">
          <a
            slot="title"
            href="#services"
            class="nav-link"
            data-toggle="dropdown"
            role="button"
          >
            <i class="fa fa-hospital-o d-lg-none"></i>
            <span class="nav-link-inner--text">SERVICIOS</span>
          </a>
          <a class="dropdown-item" href="#services">Dentistas</a>
          <a class="dropdown-item" href="#services"
            >Cirugía Oral y Maxilofacial</a
          >
          <a class="dropdown-item" href="#services">Endodoncistas</a>
          <a class="dropdown-item" href="#services">Ortodoncistas</a>
          <a class="dropdown-item" href="#services">Periodoncistas</a>
          <a class="dropdown-item" href="#services">Dentista Pediátrico</a>
        </base-dropdown>
        <li class="nav-item">
          <a class="nav-link nav-link-icon" href="#insurances">
            Seguros de E.U
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-icon" href="#pricing">
            Precios
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://www.youtube.com/watch?v=rUZd4YgJ9nI"
          >
            ¿Cómo llegar?
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-icon" href="#contact">
            Contacto
          </a>
        </li>
      </ul>
      <ul class="navbar-nav align-items-lg-center ml-lg-auto">
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="mailto:info@dentimexico.org"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="Correo"
          >
            <i class="fa fa-envelope"></i>
            <span class="nav-link-inner--text d-lg-none"
              >info@dentimexico.org</span
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
            title="Llamenos"
          >
            <i class="fa fa-phone"></i>
            <span class="nav-link-inner--text d-lg-none">1 800 315 87 14</span>
          </a>
        </li>
        <li class="nav-item">
          <nuxt-link slot="brand" class="navbar-brand mr-lg-5" to="/">
            <i class="fa fa-globe"></i>
            <span class="nav-link-inner--text d-lg-none">English</span>
          </nuxt-link>
        </li>
      </ul>
    </base-nav>
  </div>
</template>
<script>
import BaseNav from '~/components/BaseNav'
import BaseDropdown from '~/components/BaseDropdown'
import CloseButton from '~/components/CloseButton'

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }
}
</script>
