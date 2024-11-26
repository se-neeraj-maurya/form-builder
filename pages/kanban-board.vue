<script lang="ts" setup>
const knStore = useTaskStore();
const updateList = () => {
  knStore.knColumns.pop();
};
</script>
<template>
  <v-app-bar class="px-3" color="grey-lighten-3" height="52" flat>
    <h3 @click="updateList">Task Page</h3>
    <v-spacer></v-spacer>

    <!-- <v-btn class="mr-3" rounded color="primary" variant="outlined" hide-details
      >Close</v-btn
    >
    <v-btn min-width="100" rounded color="primary" variant="flat" hide-details
      >Save</v-btn
    > -->
  </v-app-bar>
  <v-main>
    <div class="kanban-wrapper px-4">
      <div class="d-flex overflow-auto kanban-overflow-container">
        <div
          class="py-2 px-2"
          v-for="(column, index) in knStore.knColumns"
          :key="index + 'kanban-column'"
        >
          <div class="kanban--column" :style="`border-color:${column.color}`">
            <div class="kn-header">
              <div
                class="status-chip"
                :style="`background-color:${column.color}`"
              >
                {{ column.name }} (30)
              </div>
              <div class="spacer"></div>
              <v-icon size="20px">mdi-dots-vertical</v-icon>
            </div>
            <div class="kn-body">
              <div v-for="i in 10" :key="i" class="kn-card mb-3">
                <div class="d-flex mb-2">
                  <div class="kn-id-chip">#0005</div>
                  <div class="kn-progress-chip ml-2">0%</div>
                  <VIcon size="16px" class="text-blue-darken-3 ml-1"
                    >mdi-bug</VIcon
                  >
                  <VIcon size="15px" class="text-orange ml-1"
                    >mdi-alert-octagon</VIcon
                  >
                  <VIcon size="15px" class="text-red ml-1">mdi-replay</VIcon>
                </div>
                <div class="todo--title mb-2">Web > Live > Other monitor</div>
                <div class="todo--group-name mb-2">
                  <VIcon size="14px" class="mr-1"
                    >mdi-format-list-bulleted</VIcon
                  >
                  Oct 2024 Production development
                </div>
                <div class="border-t pt-2 avatar-group">
                  <v-avatar size="28" color="primary">AM</v-avatar>
                  <v-avatar size="28" color="secondary">NE</v-avatar>
                  <v-avatar size="28" color="cyan">RA</v-avatar>
                  <v-avatar size="28" color="grey">+12</v-avatar>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-main>
</template>
<style lang="scss">
@use "~/assets/scss/kanban.scss";
</style>
