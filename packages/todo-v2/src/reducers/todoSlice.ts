import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToDo } from "../model";

type TState={
  tasks : ToDo[]
}

const initialState: TState = {
  tasks: []
};

type TPayload ={
  id?:number,
  description?:string,
  isDone?:boolean
}

export const todoSlice = createSlice({
  name : "todoSlice",
  initialState: initialState,
  reducers: {
    bulkAdd: (state, action: PayloadAction<ToDo[]>) => {
      state.tasks = action.payload
    },
    added : (state, action: PayloadAction<TPayload>)=>{
      state.tasks.push({
        id: action.payload.id!,
        description: action.payload.description!,
        isDone: false
      })
    },
    archived : (state, action: PayloadAction<TPayload>)=>{
      state.tasks.forEach((t)=>{
        t.id === action.payload.id ? t.isDone = !t.isDone : t
      })
    },
    deleted : (state, action: PayloadAction<TPayload>)=>{
      let index = state.tasks.findIndex(t=>t.id ===action.payload.id)
      state.tasks.splice(index, 1)
    }
  }
})

export const {added, archived, deleted, bulkAdd } = todoSlice.actions
export default todoSlice.reducer;