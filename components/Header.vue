<template>
  <div>
    <base-nav type="" transparent effect="" expand>
      <nuxt-link slot="brand" class="navbar-brand mr-lg-5" to="/">
        <img src="img/brand/Dm-logo.png" alt="DentiMexico Logo" />
      </nuxt-link>

      <div slot="content-header" slot-scope="{ closeMenu }" class="row">
        <div class="col-6 collapse-brand">
          <a href="/" title="DentiMexico">
            <img src="img/brand/Dm-logo-02.png" alt="DentiMexico Logo" />
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
            title="Services"
          >
            <i class="fa fa-hospital-o d-lg-none"></i>
            <span class="nav-link-inner--text">SERVICES</span>
          </a>
          <a class="dropdown-item" title="Dentists" href="#services"
            >Dentists</a
          >
          <a
            class="dropdown-item"
            href="#services"
            title="Oral and Maxillofacial"
            >Oral and Maxillofacial Surgery</a
          >
          <a class="dropdown-item" title="Medical Specialists" href="#services"
            >Medical Specialists</a
          >
          <a class="dropdown-item" title="Endodontists" href="#services"
            >Endodontists</a
          >
          <a class="dropdown-item" title="Orthodontists" href="#services"
            >Orthodontists</a
          >
          <a class="dropdown-item" title="Periodontists" href="#services"
            >Periodontists</a
          >
          <a class="dropdown-item" title="Pediatric Dentist" href="#services"
            >Pediatric Dentist</a
          >
        </base-dropdown>
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="#insurances"
            title="Insurances"
          >
            Insurances
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-icon" href="#pricing" title="Pricing">
            Pricing
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://www.youtube.com/watch?v=rUZd4YgJ9nI"
            title="Directions"
          >
            Directions
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-icon" href="#contact" title="Contact">
            Contact
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
            title="Email Us"
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
            title="Call Us"
          >
            <i class="fa fa-phone"></i>
            <span class="nav-link-inner--text d-lg-none">1 800 315 87 14</span>
          </a>
        </li>
        <li class="nav-item">
          <nuxt-link slot="brand" class="navbar-brand mr-lg-5" to="es">
            <span class="nav-link">Español</span>
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
