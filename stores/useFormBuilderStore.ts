import { defineStore } from 'pinia'
import DB from "@/utils/db"
const useDB = DB();
let deepClonedArrayFieldType = structuredClone(useDB.fieldTypes);
export const useFormBuilderStore = defineStore('formBuilderStore',()=>{
  const fieldTypes = ref(deepClonedArrayFieldType);
  const formFields = ref([]);
  return {
    fieldTypes,
    formFields
  }
})
