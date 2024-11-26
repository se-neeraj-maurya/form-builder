import { defineStore } from 'pinia'
import DB from "@/utils/db"
const useDB = DB();
let deepClonedArraytaskCol = structuredClone(useDB.taskColumns);
export const useTaskStore = defineStore('taskStore',()=>{
  const knColumns = ref(deepClonedArraytaskCol);
  return {
    knColumns,
  }
})
