<template>

  <div id="app">
    <h1 class = 'head'>TO DO LIST</h1>
    <todolist/>
  </div>
</template>

<script>
import todolist from './components/todolist.vue'

export default {
  name: 'App',
  components: {
    todolist
  }
}
</script>

<style>
      .head{
          text-align: center;
      }
</style>
