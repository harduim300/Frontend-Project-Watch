<template>
  <v-dialog v-model="dialogOpen" transition="dialog-bottom-transition" fullscreen>
    <v-card>
      <v-toolbar>
        <v-btn icon="mdi-close" @click="handleClose"></v-btn>
        <v-toolbar-title>{{ task?.title || 'Editar Tarefa' }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn
            prepend-icon="mdi-account-plus"
            text="Convidar"
            variant="text"
            @click="$emit('invite')"
          ></v-btn>
          <v-btn
            prepend-icon="mdi-delete"
            text="Excluir"
            variant="text"
            color="error"
            @click="$emit('delete')"
          ></v-btn>
          <v-btn
            prepend-icon="mdi-content-save"
            text="Salvar"
            variant="text"
            color="#ff501a"
            @click="handleSubmit"
          ></v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-list lines="two" class="pa-4">
        <v-list-subheader>Informações da Tarefa</v-list-subheader>

        <v-text-field
          v-model="formData.title"
          label="Título"
          required
          variant="outlined"
          density="comfortable"
        ></v-text-field>

        <v-text-field
          v-model="formData.category"
          label="Categoria"
          variant="outlined"
          density="comfortable"
        ></v-text-field>

        <v-select
          v-model="formData.status"
          label="Status"
          :items="statusItems"
          item-title="label"
          item-value="name"
          variant="outlined"
          density="comfortable"
        ></v-select>

        <v-textarea
          v-model="formData.description"
          label="Descrição"
          variant="outlined"
          density="comfortable"
        ></v-textarea>
      </v-list>

      <v-list>
        <v-list-item
          v-for="taskUser in task?.taskUsers"
          :key="taskUser.id"
          :title="taskUser.user.name"
          :subtitle="taskUser.user.email"
        >
          <template v-slot:prepend>
            <v-avatar color="grey-lighten-1">
              <v-icon color="white">mdi-account</v-icon>
            </v-avatar>
          </template>

          <template v-slot:append>
            <v-chip
              :color="taskUser.permission === 'OWNER' ? 'error' : 'primary'"
              size="small"
            >
              {{ getPermissionLabel(taskUser.permission) }}
            </v-chip>
          </template>
        </v-list-item>
      </v-list>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { Task } from '@/services/tasks'

interface Props {
  isOpen: boolean
  task?: Task
}

const props = defineProps<Props>()
const emit = defineEmits(['update:isOpen', 'submit', 'delete', 'invite'])

const dialogOpen = ref(props.isOpen)
const statusItems = [
  { label: 'Não Iniciado', name: 'NOT_STARTED' },
  { label: 'Em Progresso', name: 'IN_PROGRESS' },
  { label: 'Concluído', name: 'COMPLETED' }
]
const formData = ref({
  title: '',
  category: '',
  status: 'NOT_STARTED',
  description: ''
})

const permissionItems = [
  { label: 'Proprietário', name: 'OWNER' },
  { label: 'Usuário', name: 'USER' }
]

const getPermissionLabel = (permission: string) => {
  const item = permissionItems.find(item => item.name === permission)
  return item ? item.label : permission
}

// Observar mudanças no prop isOpen
watch(() => props.isOpen, (newValue) => {
  dialogOpen.value = newValue
})

// Observar mudanças na ref local
watch(dialogOpen, (newValue) => {
  emit('update:isOpen', newValue)
})

// Observar mudanças no prop task
watch(() => props.task, (newTask) => {
  if (newTask) {
    formData.value = {
      title: newTask.title,
      category: newTask.category,
      status: newTask.status,
      description: newTask.description
    }
  }
}, { immediate: true })

const handleSubmit = () => {
  emit('submit', { ...formData.value })
  handleClose()
}

const handleClose = () => {
  dialogOpen.value = false
}
</script>
