<script setup lang="ts">
  import BottomBar from '../components/ui/BottomBar.vue';
  import CardsTaks from '../components/ui/CardsTaks.vue';
</script>

<template>
  <div class="d-flex flex-column justify-center align-center h-auto">
    <BottomBar/>
    <div class="d-flex w-screen flex-wrap justify-center align-center">
      <CardsTaks/>
      <CardsTaks/>
      <CardsTaks/>
      <CardsTaks/>
      <CardsTaks/>

    </div>
  </div>
</template>
