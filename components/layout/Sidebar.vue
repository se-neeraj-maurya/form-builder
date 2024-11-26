<template>
  <v-navigation-drawer color="primary" width="230" :rail="false">
      <div>
      <v-avatar
        class="d-block text-center mx-auto mt-4"
        color="grey-darken-1"
        size="46"
      >
        <v-img src="~/assets/images/logo.png"></v-img>
      </v-avatar>
    </div>
      <v-divider class="mx-3 my-5"></v-divider>
      <ul class="side-menu w-100">
        <li 
          @click="goToRoute(menu.route)" 
          class="d-flex align-center" 
          v-for="menu in menuList" 
          :key="menu.name"
          :class="{
            'active-menu':isActiveRoute(menu.route)
          }"  
        >
          <v-avatar
            class="d-flex"
            size="33"
            @click="goToRoute(menu.route)"
          >
            <v-icon color="white" class="menu-icon">{{ menu.icon }}</v-icon>
          </v-avatar>
          <div>{{ menu.name }}</div>
        </li>
      </ul>
    </v-navigation-drawer>
</template>

<script setup>
const router = useRouter();
const route = useRoute();
const menuList = ref([
  {
    icon: "mdi-view-dashboard-outline",
    name: "Dashboard",
    route: "index",
  },
  {
    icon: "mdi-form-select",
    name: "Form Builder",
    route: "form-builder",
  },
  {
    icon: "mdi-calendar-check",
    name: "Gantt Chart",
    route: "gantt-chart",
  },
  {
    icon: "mdi-form-select",
    name: "Kanban Board",
    route: "kanban-board",
  },
]);
const goToRoute = (route) => {
  router.push({ name: route });
};
const isActiveRoute = (path) => {
  const currenctPath = route.path;
  if(path == 'index' && currenctPath == '/'){
    return true;
  }
  if(currenctPath.includes(path)){
    return true;
  }
  return false
}
</script>

<style>

</style>