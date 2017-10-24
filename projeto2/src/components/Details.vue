<template>
  <div id="details">
    <h1>Evento</h1>
    <div class="card">
      <div class="card-header">
        {{ event.title }}
      </div>
      <div class="card-body">
        <p>{{ event.description }}</p>
        <p><small class="text-muted">{{ event.speaker }}</small></p>
        <p><small class="text-muted">{{ event.date }}</small></p>
      </div>
    </div>
    <br>
    <div class="btn-group">
      <router-link class="btn btn-outline-primary" to="/">Voltar</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'details',

  data() {
    return {
      event: {}
    }
  },

  methods: {
    fetchSingleEvent(id) {
      this.$http.get('http://localhost:3000/events/' + id)
        .then(response => {
          this.event = response.body
        })
        .catch(error => {
          console.log('Error: ', error)
        })
    }
  },

  created() {
    this.fetchSingleEvent(this.$route.params.id)
  }
}
</script>

