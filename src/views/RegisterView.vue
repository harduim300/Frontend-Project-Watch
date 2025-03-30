<script setup lang="ts">
  import AuthForm from '@/components/ui/AuthForm.vue';
  import { authService } from '@/services/auth'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const onRegisterSubmit = async (data: { name: string, email: string, password: string }) => {
    try {
      console.log(data)
      await authService.register(data)
      router.push('/')
    } catch (error) {
      console.error('Erro ao fazer registro:', error)
    }
  }
</script>

<template>
  <div>
    <AuthForm
    title="Criar Conta"
    :isRegistration="true"
    :showForgotPassword="false"
    submitButtonText="Registrar"
    secondaryActionText="Já tem uma conta? Entre aqui"
    secondaryActionLink="/"
    @submit="onRegisterSubmit"
  />
  </div>
</template>
