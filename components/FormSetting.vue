<script lang="ts" setup>
const form = ref({
  label: "",
  placeholder: "",
  name: "",
  required: false,
});
const props = defineProps({
  type:{
    type:String,
    default:"",
  },
  setting: {
    type: Object,
    default: () => {
      return {};
    },
  },
});
watch(
  () => props.setting,
  (params) => {
    // console.log({params})
    form.value = JSON.parse(JSON.stringify(params));
  },{
    immediate:true,
    deep:true
  }
);
const emit = defineEmits(["update:setting", "close"]);
const saveSetting = () => {
  emit("update:setting", form.value);
};
</script>
<template>
  <v-card prepend-icon="mdi-cog" title="Settings" rounded>
    <div class="close-dialog-btn cursor-pointer">
      <v-icon @click="$emit('close', true)">mdi-close</v-icon>
    </div>
    <v-card-text>
      <v-row dense>
        <v-col cols="12">
          <v-text-field
            v-model="form.label"
            density="compact"
            variant="outlined"
            label="Label"
          ></v-text-field>
        </v-col>
        <template v-if="!['upload','radio','checkbox'].includes(type )">
          <v-col cols="12">
            <v-text-field
              v-model="form.placeholder"
              density="compact"
              variant="outlined"
              label="Placeholder"
            ></v-text-field>
          </v-col>
        </template>
        <template v-if="['select','radio','checkbox'].includes(type )">
          <v-col cols="12" class="pa-3 border rounded">
            <div class="mb-4 text-h6">Options</div>
            <Options v-model="form.options" />
          </v-col>
        </template>
        <v-col cols="12">
          <v-checkbox
            density="compact"
            v-model="form.required"
            color="primary"
            label="Required"
          ></v-checkbox>
        </v-col>
      </v-row>
      <v-btn color="primary" class="mr-3" min-width="100" @click="saveSetting"
        >Save</v-btn
      >
      <v-btn
        color="grey-darken-3"
        variant="outlined"
        @click="$emit('close', true)"
        >Close</v-btn
      >
    </v-card-text>
  </v-card>
</template>

<style>
.close-dialog-btn {
  position: absolute;
  right: 20px;
  top: 20px;
}
</style>
