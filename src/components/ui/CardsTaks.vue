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
          :text="task._count.taskUsers.toString()"
          variant="flat"
          ></v-chip>
        </v-card-title>

        <div class="py-2">
          <div class="text-h6">{{ task.title }}</div>

          <div class="font-weight-light text-medium-emphasis min-w-[360px] w-[360px] text-truncate">
            {{ task.description }}
          </div>
        </div>
        <v-chip class="w-auto max-w-40 text-truncate" color="secondary">
          <div class="text-truncate w-auto max-w-36">
            {{ task.category }}
          </div>
        </v-chip>
      </v-card-item>


      <v-divider></v-divider>

      <div class="pa-4 d-flex align-center">
        <v-chip :color="getStatusColor(task.status)" variant="flat">
          {{ getStatusLabel(task.status) }}
        </v-chip>


        <v-spacer></v-spacer>


        <v-btn
          class="me-2 text-none bg-black"
          prepend-icon="mdi-account-plus"
          variant="flat"
          @click="$emit('invite')"
        >
          Convidar
        </v-btn>

        <v-btn
          class="text-none"
          color="#ff501a"
          prepend-icon="mdi-notebook"
          variant="text"
          border
          @click="$emit('open')"
        >
          Abrir
        </v-btn>
      </div>
    </v-card>
</template>

<script setup lang="ts">
import type { Task } from '@/services/tasks'

interface Props {
  task: Task
}

defineProps<Props>()
defineEmits(['open', 'invite'])

const statusItems = [
  { label: 'Não Iniciado', name: 'NOT_STARTED' },
  { label: 'Em Progresso', name: 'IN_PROGRESS' },
  { label: 'Concluído', name: 'COMPLETED' }
]

const getStatusLabel = (status: string) => {
  const item = statusItems.find(item => item.name === status)
  return item ? item.label : status
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'COMPLETED':
      return 'success'
    case 'IN_PROGRESS':
      return 'warning'
    case 'NOT_STARTED':
      return 'grey'
    default:
      return 'grey'
  }
}
</script>
