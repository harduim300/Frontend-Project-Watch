<script setup lang="ts">
  import AuthForm from '@/components/ui/AuthForm.vue';
  import { authService } from '@/services/auth'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const onLoginSubmit = async (data: { email: string, password: string }) => {
    try {
      const response = await authService.login(data)
      console.log(response)
      router.push('/tasks/dashboard')
    } catch (error) {
      console.error('Erro ao fazer login:', error)
    }
  }
</script>

<template>
  <div>
    <AuthForm
      title="Login"
      submitButtonText="Entrar"
      secondaryActionText="Criar conta"
      secondaryActionLink="/register"
      @submit="onLoginSubmit"
    />
  </div>
</template>
