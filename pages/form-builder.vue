<script setup>
const formStore = useFormBuilderStore();
const settingDrawer = ref(false);
const activeFieldIndex = ref(-1);
const activeSettings = ref({});

const fieldSetting = (setting, index) => {
  settingDrawer.value = true;
  activeFieldIndex.value = index;
  activeSettings.value = JSON.parse(JSON.stringify(setting));
};
const copyField = (data,index) => {
  const field = JSON.parse(JSON.stringify(data));
  formStore.formFields.splice(index, 0,field);
};
const deleteField = (index) => {
  formStore.formFields.splice(index, 1);
};
const updateSetting = (data) => {
  let myForm = JSON.parse(JSON.stringify(formStore.formFields));
  myForm[activeFieldIndex.value].defaultSettings = {
    ...myForm[activeFieldIndex.value].defaultSettings,
    ...data,
  };
  formStore.formFields = myForm;
  activeFieldIndex.value = -1;
  settingDrawer.value = false;
};
const closeSetting = () => {
  activeFieldIndex.value = -1;
  settingDrawer.value = false;
};
</script>
<template>
  <v-app-bar class="px-3" color="grey-lighten-3" height="52" flat>
    <h3>Form Builder</h3>
    <v-spacer></v-spacer>

    <v-btn class="mr-3" rounded color="primary" variant="outlined" hide-details
      >Close</v-btn
    >
    <v-btn min-width="100" rounded color="primary" variant="flat" hide-details
      >Save</v-btn
    >
  </v-app-bar>
  <v-navigation-drawer location="left">
    <div class="pa-5">
      <h4 class="mb-4">Toolbox</h4>
      <draggable
        :list="formStore.fieldTypes"
        :group="{ name: 'fields', pull: 'clone', put: false }"
        :sort="false"
      >
        <v-card
          v-for="field in formStore.fieldTypes"
          :key="field.displayName"
          border
          elevation="0"
          class="mb-3 fields-element"
        >
          <div class="d-flex align-center pa-2">
            <v-icon color="primary">{{ field.icon }}</v-icon>
            <div class="ms-3 text-body-2">{{ field.displayName }}</div>
            <v-spacer></v-spacer>
            <v-icon color="grey-darken-2">mdi-drag</v-icon>
          </div>
        </v-card>
      </draggable>
    </div>
  </v-navigation-drawer>
  <v-main class="h-100 d-flex">
    <div class="form-wrapper h-100 flex-grow-1">
      <div class="form-header">
        <h3>
          Form Title
        </h3>
      </div>
      <draggable
        :list="formStore.formFields"
        group="fields"
        class="preview-canvas"
        ghost-class="drop-area"
        draggable=".form-element-input"
        handle=".drag-handle"
      >
        <v-hover
          v-if="formStore.formFields.length"
          v-slot="{ isHovering, props }"
          open-delay="200"
          v-for="(field, index) in formStore.formFields"
          :key="index"
        >
          <div
            v-bind="props"
            class="form-element-input pa-5"
            :class="{ active: isHovering }"
          >
            <div class="form-field-action">
              <v-icon size="22" class="mx-2 drag-handle">mdi-drag</v-icon>
              <v-icon size="22" class="mx-2" @click="fieldSetting(field, index)"
                >mdi-cog-outline</v-icon
              >
              <v-icon size="20" class="mx-2" @click="copyField(field,index)"
                >mdi-content-copy</v-icon
              >
              <v-icon class="mx-2" color="red" @click="deleteField(index)"
                >mdi-delete-outline</v-icon
              >
            </div>

            <label class="mb-1 text-body-2"
              >{{ field.defaultSettings?.label }}
              <span class="text-red" v-if="field.defaultSettings?.required"
                >*</span
              >
            </label>
            <template v-if="field.type == 'select'">
              <v-autocomplete
                variant="outlined"
                density="compact"
                :placeholder="field.defaultSettings?.placeholder"
                :items="field.defaultSettings.options"
                item-title="value"
                item-value="value"
                hide-details
              />
            </template>
            <template v-else-if="field.type == 'number'">
              <v-text-field
                type="number"
                variant="outlined"
                density="compact"
                :placeholder="field.defaultSettings?.placeholder"
                hide-details
              >
              </v-text-field>
            </template>
            <template v-else-if="field.type == 'email'">
              <v-text-field
                type="email"
                variant="outlined"
                density="compact"
                :placeholder="field.defaultSettings?.placeholder"
                hide-details
              >
              </v-text-field>
            </template>
            <template v-else-if="field.type == 'password'">
              <v-text-field
                type="password"
                variant="outlined"
                density="compact"
                :placeholder="field.defaultSettings?.placeholder"
                hide-details
              >
              </v-text-field>
            </template>
            <template v-else-if="field.type == 'radio'">
              <v-radio-group>
                <v-radio
                  v-for="option in field.defaultSettings.options"
                  :label="option.value"
                  :value="option.value"
                  :key="option.value"
                ></v-radio>
              </v-radio-group>
            </template>
            <template v-else-if="field.type == 'checkbox'">
              <v-checkbox
                v-for="option in field.defaultSettings.options"
                :key="option.value"
                :label="option.value"
                :value="option.value"
                hide-details
              ></v-checkbox>
            </template>
            <template v-else-if="field.type == 'date'">
              <v-text-field
                type="date"
                variant="outlined"
                density="compact"
                :placeholder="field.defaultSettings?.placeholder"
                hide-details
              >
              </v-text-field>
            </template>
            <template v-else-if="field.type == 'textarea'">
              <v-textarea
                rows="3"
                auto-grow
                variant="outlined"
                density="compact"
                :placeholder="field.defaultSettings?.placeholder"
                hide-details
              ></v-textarea>
            </template>
            <template v-else-if="field.type == 'upload'">
              <v-file-input
                prepend-icon=""
                prepend-inner-icon="mdi-attachment"
                variant="outlined"
                density="compact"
                :placeholder="field.defaultSettings?.placeholder"
              ></v-file-input>
            </template>
            <template v-else>
              <v-text-field
                variant="outlined"
                density="compact"
                :placeholder="field.defaultSettings?.placeholder"
                hide-details
              >
              </v-text-field>
            </template>
          </div>
        </v-hover>
        <div v-else class="no-fields">
          <div>Drop Here Fields</div>
        </div>
        <div class="ma-5" v-if="formStore.formFields.length">
          <v-btn color="primary">Submit</v-btn>
        </div>
      </draggable>
    </div>
  </v-main>
  <v-dialog origin="center 60px;" v-model="settingDrawer" max-width="600">
    <FormSetting
      :type="activeSettings.type"
      :setting="activeSettings.defaultSettings"
      @close="closeSetting()"
      @update:setting="(event) => updateSetting(event)"
    />
  </v-dialog>
</template>
