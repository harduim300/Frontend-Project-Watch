<template>
  <v-menu class="position absolute right-0">
    <template v-slot:activator="{ props }">
      <v-btn icon="mdi-dots-vertical" variant="text" v-bind="props" color="#fff"></v-btn>
    </template>

    <v-list>
      <v-list-item v-for="(item, i) in items" :key="i" :value="i">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
  const items = [
    { title: 'Click Me' },
    { title: 'Click Me' },
    { title: 'Click Me' },
    { title: 'Click Me 2' },
  ]
</script>
