<template>
  <div class="text-center pa-4">
    <v-dialog v-model="dialogOpen" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          {{ title }}
        </v-card-title>

        <v-card-text class="pt-4">
          <v-form @submit.prevent="handleSubmit" ref="form">
            <v-text-field
              v-model="formData.title"
              label="Título"
              required
              :rules="[v => !!v || 'Título é obrigatório']"
              variant="outlined"
              density="comfortable"
            ></v-text-field>

            <v-text-field
              class="my-3"
              v-model="formData.category"
              label="Categoria"
              required
              :rules="[v => !!v || 'Categoria é obrigatória']"
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
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="grey-darken-1"
            variant="text"
            @click="handleClose"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="#ff501a"
            variant="elevated"
            @click="handleSubmit"
            :disabled="!isFormValid"
          >
            {{ mode === 'create' ? 'Criar' : 'Salvar' }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'

interface Props {
  isOpen: boolean
  title: string
  mode: 'create' | 'edit'
}

const props = defineProps<Props>()
const emit = defineEmits(['update:isOpen', 'submit'])

// Criar uma ref local que acompanha o prop isOpen
const dialogOpen = ref(props.isOpen)

// Observar mudanças no prop isOpen
watch(() => props.isOpen, (newValue) => {
  dialogOpen.value = newValue
})

// Observar mudanças na ref local
watch(dialogOpen, (newValue) => {
  emit('update:isOpen', newValue)
})

const statusItems = [
  { label: 'Não Iniciado', name: 'NOT_STARTED' },
  { label: 'Em Progresso', name: 'IN_PROGRESS' },
  { label: 'Concluído', name: 'COMPLETED' }
]

const form = ref<any>(null)
const formData = ref({
  title: '',
  category: '',
  status: 'NOT_STARTED',
  description: '',
  taskUsers: [],
  _count: {
    taskUsers: 0
  }
})

const isFormValid = computed(() => {
  return !!formData.value.title && !!formData.value.category
})

const handleSubmit = async () => {
  const { valid } = await form.value.validate()

  if (!valid) return

  const submitData = {
    title: formData.value.title,
    category: formData.value.category,
    status: formData.value.status,
    description: formData.value.description
  }

  emit('submit', submitData)

  formData.value = {
    title: '',
    category: '',
    status: 'NOT_STARTED',
    description: '',
    taskUsers: [],
    _count: {
      taskUsers: 0
    }
  }
  dialogOpen.value = false
}

const handleClose = () => {
  dialogOpen.value = false
}
</script>
