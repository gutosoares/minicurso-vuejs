<template>
  <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <span>{{ message }}</span>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'alert',

  props: ['message']
}
</script>
