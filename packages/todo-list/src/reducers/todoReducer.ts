import { TState, TAction } from "../App";

export const todoReducer = (state: TState, action: TAction) => {
  switch (action.type) {
    case "added": {
      console.log(action.id)
      return {
        ...state,
        taskList: [
          ...state.taskList!,
          {
            id: action.id!,
            isDone: false,
            taskDescription: action.taskDescription,
          },
        ],
        task: { ...state.task, taskDescription: "" },
      };
    }
    case "archived": {
      return {
        ...state,
        taskList: state.taskList?.map((t) =>
          t.id === action.id ? { ...t, isDone: !t.isDone } : t
        ),
      };
    }
    case "deleted": {
      return {
        ...state,
        taskList: state.taskList?.filter((t, _) => t.id !== action.id),
      };
    }

    default:
      return state;
  }
};
