/* eslint-disable vue/require-default-prop */
<template>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    :data-target="target"
    :aria-controls="target"
    :aria-expanded="toggled"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
</template>
<script>
export default {
  props: {
    target: {
      default: '',
      type: [String, Number],
      description: 'Button target element'
    },
    toggled: {
      type: Boolean,
      default: false,
      description: 'Whether button is toggled'
    }
  }
}
</script>
<style></style>
