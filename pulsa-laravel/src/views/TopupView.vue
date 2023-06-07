<template>
  <!-- <HeaderPage/> -->
  <div class="home">
    <KomponenTopup msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import KomponenTopup from '@/components/KomponenTopup.vue'
// import HeaderPage from '@/components/HeaderPage.vue'

export default {
  name: 'TopupView',
  components: {
    KomponenTopup,
    // HeaderPage
  }
}
</script>
