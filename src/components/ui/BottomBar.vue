<template>
  <div class="pa-8 text-center">
    <v-btn
      class="ma-auto"
      size="x-large"
      text="Click me"
      @click="sheet = !sheet"
    ></v-btn>

    <v-bottom-sheet v-model="sheet">
      <v-card class="text-center" height="200">
        <v-card-text>
          <v-btn
            text="Close"
            variant="text"
            @click="sheet = !sheet"
          ></v-btn>

          <br>
          <br>

          <div>
            This is a bottom sheet using the controlled by v-model instead of activator
          </div>
        </v-card-text>
      </v-card>
    </v-bottom-sheet>
  </div>
</template>
<script setup lang="ts">
  import { shallowRef } from 'vue'

  const sheet = shallowRef(false)
</script>