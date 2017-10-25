<template>
  <div class="events">
    <div class="jumbotron">
      <h1 class="display-3">Eventos Cadastrados</h1>
    </div>
    <alert v-if="alert" :message="alert"></alert>
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
            <button class="btn btn-danger" @click="deleteEvent(event.id)">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Alert from '@/components/Alert'

export default {
  name: 'events',

  components: {
    'alert': Alert
  },

  data () {
    return {
      events: [],
      alert: ''
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
    },

    deleteEvent(id) {
      this.$http.delete('http://localhost:3000/events/' + id)
        .then(response => {
          console.log('Evento deletado com sucesso', response)
        })
        .catch(error => {
          console.log('Error: ', error)
        })
    }
  },

  created() {
    if(this.$route.query.alert) {
      this.alert = this.$route.query.alert
    }
    this.fetchEvents()
  },

  updated() {
    this.fetchEvents()
  }
}
</script>

<style scoped>
</style>
