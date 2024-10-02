import { task } from "../model";

type Tprops = {
  archive: task;
  onDelete: (deleted: number) => void;
};

export const ArchiveItem = ({ onDelete, archive }: Tprops) => {
  const handleDelete = () => {
    onDelete(archive.id!);
  };
  return (
    <div className="m-5">
      <hr className="p-1" />
      <div className="flex space-x-3 items-center">
        <p className="ml-2">{archive.taskDescription}</p>
        <button
          onClick={handleDelete}
          className="bg-red-500 ml-4 rounded-md text-white p-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
