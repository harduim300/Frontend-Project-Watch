<script setup lang="ts">
import CardsTaks from '../components/ui/CardsTaks.vue';
import EditTaskDialog from '../components/ui/EditTaskDialog.vue';
import CreateTaskDialog from '../components/ui/CreateTaskDialog.vue';
import ButtonAct from '../components/ui/ButtonAct.vue';
import DialogConfirm from '../components/ui/DialogConfirm.vue';
import { taskService, type Task } from '@/services/tasks';
import { ref, onMounted } from 'vue';

const tasks = ref<Task[]>([])
const isCreateDialogOpen = ref(false)
const isEditDialogOpen = ref(false)
const isDeleteDialogOpen = ref(false)
const isAddPeopleDialogOpen = ref(false)
const selectedTaskId = ref<string | null>(null)
const selectedTask = ref<Task | undefined>(undefined)
const deleteError = ref('')
const addPeopleError = ref('')

onMounted(async () => {
  try {
    tasks.value = await taskService.getAllTasks()
  } catch (error) {
    console.error('Erro ao carregar tarefas:', error)
  }
})

const handleCreateSubmit = async (formData: Omit<Task, 'id'>) => {
  try {
    const newTask = await taskService.createTask(formData)
    const formattedTask = {
      ...newTask,
      taskUsers: [],
      _count: {
        taskUsers: 0
      }
    }
    tasks.value.push(formattedTask)
  } catch (error) {
    console.error('Erro ao criar tarefa:', error)
  }
}

const handleEditSubmit = async (formData: Partial<Task>) => {
  if (!selectedTaskId.value) return
  try {
    const updatedTask = await taskService.updateTask(selectedTaskId.value, formData)
    const index = tasks.value.findIndex(t => t.id === selectedTaskId.value)
    if (index !== -1) {
      tasks.value[index] = updatedTask
    }
  } catch (error) {
    console.error('Erro ao atualizar tarefa:', error)
  }
}

const handleDeleteConfirm = async () => {
  if (!selectedTaskId.value) return
  try {
    await taskService.deleteTask(selectedTaskId.value)
    tasks.value = tasks.value.filter(t => t.id !== selectedTaskId.value)
    isDeleteDialogOpen.value = false
    deleteError.value = ''
  } catch (error: any) {
    if (error.response?.status === 403) {
      isDeleteDialogOpen.value = true
      deleteError.value = 'Você não tem permissão para excluir esta tarefa. Apenas o proprietário pode excluí-la.'
    }
  }
}

const handleAddPeopleConfirm = async (data: { email: string }) => {
  if (!selectedTaskId.value) return
  try {
    await taskService.shareTask(selectedTaskId.value, data.email)
    isAddPeopleDialogOpen.value = false
    addPeopleError.value = ''
  } catch (error: any) {
    if (error.response?.status === 403) {
      isAddPeopleDialogOpen.value = true
      addPeopleError.value = 'Você não tem permissão para compartilhar esta tarefa. Apenas o proprietário pode compartilhá-la.'
    } else if (error.response?.status === 404) {
      isAddPeopleDialogOpen.value = true
      addPeopleError.value = 'O email informado não está cadastrado no sistema.'
    } else if (error.response?.status === 409) {
      isAddPeopleDialogOpen.value = true
      addPeopleError.value = 'O email informado já está compartilhando esta tarefa.'
    } else {
      isAddPeopleDialogOpen.value = true
      addPeopleError.value = 'Erro ao compartilhar tarefa.'
    }
  }
}

const openEditDialog = async (taskId: string) => {
  try {
    selectedTaskId.value = taskId
    selectedTask.value = await taskService.getTaskById(taskId)
    isEditDialogOpen.value = true
  } catch (error) {
    console.error('Erro ao carregar tarefa:', error)
  }
}
</script>

<template>
  <div class="d-flex flex-column justify-center align-center h-auto">
    <ButtonAct buttonText="Criar Tarefa" @click="isCreateDialogOpen = true"/>
    <div class="d-flex w-screen flex-wrap justify-center align-center">
      <CardsTaks
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @open="openEditDialog(task.id)"
        @invite="() => {
          selectedTaskId = task.id;
          isAddPeopleDialogOpen = true;
        }"
      />
    </div>

    <CreateTaskDialog
      v-model:isOpen="isCreateDialogOpen"
      title="Criar Nova Tarefa"
      mode="create"
      @submit="handleCreateSubmit"
    />

    <EditTaskDialog
      v-model:isOpen="isEditDialogOpen"
      :task="selectedTask"
      @submit="handleEditSubmit"
      @delete="() => {
        isDeleteDialogOpen = true;
      }"
      @invite="() => {
        isAddPeopleDialogOpen = true;
      }"
    />

    <DialogConfirm
      v-model:isOpen="isDeleteDialogOpen"
      title="Confirmar exclusão"
      message="Tem certeza que deseja excluir esta tarefa?"
      type="delete"
      confirmButtonText="Excluir"
      :error="deleteError"
      @confirm="handleDeleteConfirm"
    />

    <DialogConfirm
      v-model:isOpen="isAddPeopleDialogOpen"
      title="Adicionar pessoa"
      message="Digite o email da pessoa que você deseja adicionar à tarefa:"
      type="add-people"
      confirmButtonText="Adicionar"
      :error="addPeopleError"
      @confirm="handleAddPeopleConfirm"
    />
  </div>
</template>
