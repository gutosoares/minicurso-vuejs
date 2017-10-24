<template>
  <div id="create">
    <h1>Adicionar novo Evento</h1>
    <form @submit.prevent="createEvent()">
      <div class="form-group">
        <label for="title">Título</label>
        <input type="text" class="form-control" id="title" placeholder="Entre titulo" v-model="event.title">
      </div>

      <div class="form-group">
        <label for="speaker">Palestrante</label>
        <input type="text" class="form-control" id="speaker" placeholder="Entre palestrante" v-model="event.speaker">
      </div>

      <div class="form-group">
        <label for="date">Data</label>
        <input type="text" class="form-control" id="date" placeholder="Entre data" v-model="event.date">
      </div>

      <div class="form-group">
        <label for="category">Categoria</label>
        <select class="form-control" id="category" v-model="event.category">
          <option disabled value="">Escolha uma opção</option>
          <option v-for="(category, index) in categories" :value="category.name" :key="index">{{ category.name }}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="description">Descrição</label>
        <textarea class="form-control" id="description" rows="5" placeholder="Descrição" v-model="event.description"></textarea>
      </div>
      <button class="btn btn-primary">Adicionar</button>
      <router-link class="btn btn-outline-primary" to="/">Voltar</router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: 'add',

  data() {
    return {
      categories: [],
      event: {}
    }
  },

  methods: {
    fetchCategories() {
      this.$http.get('http://localhost:3000/categories')
        .then(response => {
          this.categories = response.body
        })
        .catch(error => {
          console.log('Error: ', error)
        })
    },

    createEvent() {
      if(!this.event.title || !this.event.speaker || !this.event.category || !this.event.description || !this.event.date) {
        console.log('Entre com os dados!')
      } else {
        let newEvent = {
          title: this.event.title,
          speaker: this.event.speaker,
          category: this.event.category,
          date: this.event.date,
          description: this.event.description
        }

        this.$http.post('http://localhost:3000/events', newEvent)
          .then(response => {
            console.log('Evento criado com sucesso')
            this.$router.push({ path: '/' })
          })
          .catch(error => {
            console.log('Error', error)
          })
      }
    }
  },

  created() {
    this.fetchCategories()
  }
}
</script>

