<template>
  <Menu></Menu>
  <router-view/>
</template>

<script>
import Menu from "@/components/router/menu/Menu";

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
</style>
