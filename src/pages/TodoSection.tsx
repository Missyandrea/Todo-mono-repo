import { useParams } from "react-router-dom";
import { TodoItem } from "../Components";
import { archived } from "../state/Task/taskSlice";
import { useAppDispatch, useAppSelector } from "../hooks/useReduxHooks";

export const TodoSection = () => {
  //how to attribute type route params

  const task = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();
  const params = useParams();

  const handleOnchange = (taskId: number) => {
    dispatch(
      archived({
        id: taskId,
      })
    );  
  };

  return (
    <div>
      <h1>Todo Task {params.todoId}</h1>
      {task.taskList?.map((task) => (
        <TodoItem
          task={task}
          key={`${task.taskDescription}_${task.id}`}
          onchange={() => handleOnchange(task.id)}
        ></TodoItem>
      ))}
    </div>
  );
};
