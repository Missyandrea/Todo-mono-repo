import { ToDo } from "../../model";

type TProps = {
  task: ToDo;
  onChecked: (id: number) => void;
};

export const ToDoItem = ({ task, onChecked }: TProps) => {
  const handleOnchange = (taskId: number) => {
    onChecked(taskId);
  };
  return (
    <div className="bg-green-100 rounded-md flex gap-2 p-2">
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => handleOnchange(task.id)}
      />
      <p className={`${task.isDone && "line-through text-gray-400"}`}>{task.description}</p>
    </div>
  );
};
