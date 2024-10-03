import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { ArchiveItem } from "./ArchiveItem";
import { deleted } from "../../reducers/todoSlice";

export const ArchiveSection = () => {
  const { tasks } = useSelector((state: RootState) => state.todoState);
  const dispatch = useDispatch();

  const handleDelete = (taskId: number) => {
    dispatch(
      deleted({
        id: taskId,
      })
    );
  };
  return (
    <div className="flex flex-col gap-1 ml-3">
      {tasks
        .filter((task) => task.isDone)
        .map((task) => (
          <ArchiveItem
            key={task.id}
            onDelete={handleDelete}
            task={task}
          />
        ))}
    </div>
  );
};
