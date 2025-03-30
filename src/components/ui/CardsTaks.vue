<template>
  <v-card class="ma-4 bg-white shadow"  rounded="lg" variant="flat">
      <v-card-item>
        <v-card-title class="text-body-2 d-flex align-center">
          <v-spacer></v-spacer>
          <v-chip
          class="ms-2 text-medium-emphasis"
          prepend-icon="mdi-account-multiple"
          color="primary"
          size="small"
          text="81"
          variant="flat"
          ></v-chip>
        </v-card-title>

        <div class="py-2">
          <div class="text-h6">Live Q&A</div>

          <div class="font-weight-light text-medium-emphasis">
            Join the Vuetify team for a live Question and Answer session.
          </div>
        </div>
        <v-chip color="secondary" variant="flat">
          Secondary
        </v-chip>
      </v-card-item>


      <v-divider></v-divider>

      <div class="pa-4 d-flex align-center">

        <v-chip color="secondary">
          Secondary
        </v-chip>

        <v-spacer></v-spacer>

        <v-btn icon="mdi-dots-horizontal" variant="text"></v-btn>

        <v-btn
          class="me-2 text-none bg-black"
          prepend-icon="mdi-export-variant"
          variant="flat"
        >
          Share
        </v-btn>

        <v-btn
          class="text-none"
          color="#ff501a"
          prepend-icon="mdi-notebook"
          variant="text"
          border
        >
          Open
        </v-btn>
      </div>
    </v-card>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const taks = ref([]);
</script>