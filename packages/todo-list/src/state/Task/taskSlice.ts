import { createSlice } from "@reduxjs/toolkit";
import { task } from "../../model";

interface TaskState {
  task: task;
  taskList: task[];
}

const initialState: TaskState = {
  task: { id: 0, taskDescription: "", isDone: false },
  taskList: [],
};

const taskSlice = createSlice({
  name: "taskSlice",
  initialState: initialState,
  reducers: {
    added: (state, action) => {
        state.taskList.push({
            id: action.payload.id,
            taskDescription: action.payload.description,
            isDone: false
        })
    },
    archived:(state, action)=>{
      state.taskList.forEach(task=>{
        task.id === action.payload.id ? task.isDone = !task.isDone:task
      })
    },
    deleted:(state,action)=>{
      const index = state.taskList.findIndex(t=>t.id ===action.payload.id)
      index !== -1  && state.taskList.splice(index,1)
    }
  },
});

export const {added, archived, deleted} = taskSlice.actions
export default taskSlice.reducer;
