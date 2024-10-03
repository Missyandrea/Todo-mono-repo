import { createContext } from "react";
import { TAction, TState } from "../App";


export const TaskContext = createContext<TState|undefined>(undefined)
export const TaskDispatchContext =  createContext<React.Dispatch<TAction>|undefined>(undefined)

