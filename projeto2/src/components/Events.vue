<template>
  <div class="events">
    <div class="jumbotron">
      <h1 class="display-3">Eventos Cadastrados</h1>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Palestrante</th>
          <th>Categoria</th>
          <th>Data</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="event in events" :key="event.id">
          <td>{{ event.title }}</td>
          <td>{{ event.speaker }}</td>
          <td>{{ event.category }}</td>
          <td>{{ event.date }}</td>
          <td>
            <router-link class="btn btn-primary" :to="'/details/' + event.id">Detalhes</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'events',

  data () {
    return {
      events: []
    }
  },

  methods: {
    fetchEvents() {
      this.$http.get('http://localhost:3000/events')
        .then(response => {
          this.events = response.body
        })
        .catch(error => {
          console.log('Error: ', error)
        })
    }
  },

  created() {
    this.fetchEvents()
  }
}
</script>

<style scoped>
</style>
