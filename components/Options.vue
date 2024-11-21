<script setup>
const timeout = ref();
const options = ref([]);
const props = defineProps({
  modelValue: {
    type: Array,
  },
});
watch(
  () => props.modelValue,
  (params) => {
    if (Array.isArray(params)) {
      options.value = JSON.parse(JSON.stringify(params));
    }
  },
  {
    immediate: true,
    deep: true,
  }
);
const emit = defineEmits(["update:model-value"]);
const emitValue = () => {
  clearTimeout(timeout.value)
  timeout.value = setTimeout(()=>{
    emit("update:model-value", options.value);
  },500)
};
const addOptions = () => {
  options.value.push({ label: options.value.length + 1, value: "" });
};
const deleteOption = (index) => {
  options.value.splice(index, 1)
  emitValue()
}
</script>
<template>
  <v-row dense>
    <v-col
      cols="12"
      class="d-flex"
      v-for="(option, index) in options"
      :key="index"
    >
      <v-text-field
        v-model="option.value"
        density="compact"
        variant="outlined"
        placeholder="Option"
        @update:model-value="emitValue"
      >
        <template #prepend> ({{ index+1 }}) </template>
      </v-text-field>
      <v-btn
        size="40"
        variant="outlined"
        color="red"
        :disabled="options.length == 1"
        @click="deleteOption(index)"
      >
        <v-icon>mdi-delete-outline</v-icon>
      </v-btn>
    </v-col>
    <v-col class="d-flex justify-end">
      <v-btn
        class="px-2"
        density="compact"
        rounded
        variant="outlined"
        color="primary"
        @click="addOptions"
      >
        <v-icon>mdi-plus</v-icon>
        Add Option
      </v-btn>
    </v-col>
  </v-row>
</template>

<style></style>
