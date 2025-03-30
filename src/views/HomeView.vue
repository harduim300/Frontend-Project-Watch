<script setup lang="ts">
  import AuthForm from '@/components/ui/AuthForm.vue';

  const onLoginSubmit = () => {
    console.log('onLoginSubmit');
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
