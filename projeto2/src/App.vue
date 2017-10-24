<template>
  <div id="app">
    <app-header/>
    <main class="container">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Header from './partials/Header'

export default {
  name: 'app',
  components: {
    'app-header': Header
  }
}
</script>

<style scoped>
</style>
