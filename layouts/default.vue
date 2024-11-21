<script setup>
// const route = useRoute()
const router = useRouter()
const menuList = ref([
  {
    icon:'mdi-view-dashboard',
    name:'Dashboard',
    route:'index',
  },
  {
    icon:'mdi-form-select',
    name:'Form Builder',
    route:'form-builder',
  },
  {
    icon:'mdi-calendar-check',
    name:'gantt',
    route:'gantt',
  },
  {
    icon:'mdi-form-select',
    name:'Builder',
    route:'form-builder',
  },
])
const goToRoute = (route) => {
    router.push({name:route})
}
</script>
<template>
  <v-app>
    <v-navigation-drawer color="grey-lighten-3" rail>
      <v-avatar
        class="d-block text-center mx-auto mt-4"
        color="grey-darken-1"
        size="46"
      ></v-avatar>

      <v-divider class="mx-3 my-5"></v-divider>

      <v-avatar
        v-for="menu in menuList"
        :key="menu.name"
        class="d-flex text-center mx-auto mb-9 cursor-pointer"
        size="33"
        @click="goToRoute(menu.route)"
      >
        <v-icon>{{ menu.icon }}</v-icon>
        <v-tooltip activator="parent" :text="menu.name"></v-tooltip>
      </v-avatar>
    </v-navigation-drawer>
    <div class="h-100">
      <slot />
    </div>
  </v-app>
</template>