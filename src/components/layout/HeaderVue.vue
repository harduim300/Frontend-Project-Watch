<script lang="ts">
  import IconLogo from '../icons/IconLogo.vue';
  import Menu from '../ui/Menu.vue';

  export default {
    components: {
      IconLogo,
      Menu,
    }
  }

</script>
<template>
    <div class="bg-primary-watch w-full flex justify-between items-center px-9">
        <IconLogo class="w-[68px] h-[68px]"/>
        <Menu/>
    </div>
</template>
