<template>
  <v-container>
    <v-card>
      <v-card-title module-value="Tarefa" class="text-h4"> Task </v-card-title>
      <v-card-title class="text-overline">
        Progress

        <div class="text-green-darken-3 text-h3 font-weight-bold">90%</div>
      </v-card-title>
      <br />
      <v-card-text>
        <v-progress-linear
          color="green-darken-3"
          height="22"
          model-value="90"
          rounded="lg"
        >
        </v-progress-linear>
      </v-card-text>

      <v-divider></v-divider>

      <v-list-item
        append-icon="mdi-chevron-right"
        lines="two"
        subtitle="Details and agreement"
        link
      ></v-list-item>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
  const review = '30%'
</script>
