import { ToDo } from "../../model";

type TProps = {
  task: ToDo;
  onDelete: (id: number) => void;
};

export const ArchiveItem = ({ task, onDelete }: TProps) => {
  return (
    <div
      className="flex justify-between bg-green-100 rounded-md p-2"
    >
      <p className="">{task.description}</p>
      <button 
        className="text-red-500 ml-3 font-bold"
        onClick={() => onDelete(task.id)}
      >
        DELETE
      </button>
    </div>
  );
};
