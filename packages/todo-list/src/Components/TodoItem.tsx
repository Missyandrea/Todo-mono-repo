
import { task } from "../model";

type TProps = {
  task: task;
  onchange: (taskId: number) => void;
};

export const TodoItem = ({ onchange, task }: TProps) => {
  const handleOnChange = (taskId: number) => {
    onchange(taskId);
  };
  return (
  <>
    <div className="m-5">
        <hr className="p-1" />
        <div className="flex space-x-1">
          <input
            type="checkbox"
            onChange={() => handleOnChange(task.id)}
            checked={task.isDone}
          />
          <p className={`${task.isDone && "line-through"}`}>
            {task.taskDescription}
          </p>
        </div>
      </div>
  </>
);
};
