import { defineStore } from 'pinia'
import DB from "@/utils/db"
const useDB = DB();
let deepClonedArray = structuredClone(useDB.fieldTypes);
export const useFormBuilderStore = defineStore('formBuilderStore',()=>{
  const fieldTypes = ref(deepClonedArray);
  const formFields = ref([]);
  return {
    fieldTypes,
    formFields
  }
})
