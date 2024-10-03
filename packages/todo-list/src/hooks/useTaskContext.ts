import { useContext } from "react";
import { TaskContext, TaskDispatchContext } from "../contexts/TasksContext";

export function useTaskContext() {
  const state = useContext(TaskContext);
  if (state === undefined) {
    throw new Error("TaskContext must be used with a TaskContextProvider");
  }
  return state;
}
export function useTaskDispatchContext() {
  const dispatch = useContext(TaskDispatchContext);
  if (dispatch === undefined) {
    throw new Error(
      "TaskDispatchContext must be used with a TaskDispatchContextProvider"
    );
  }
  return dispatch;
}
