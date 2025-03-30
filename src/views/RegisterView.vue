<script setup lang="ts">
  import AuthForm from '../components/ui/AuthForm.vue';

  const onRegisterSubmit = () => {
    console.log('onRegisterSubmit');
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
