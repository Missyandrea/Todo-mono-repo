import { useDispatch, useSelector } from "react-redux";
import { ArchiveItem } from "../Components";

import { RootState } from "../state/store";
import { deleted } from "../state/Task/taskSlice";

export const ArchivesSection = () => {
  const task = useSelector((state: RootState) => state.task);
  const dispatch = useDispatch();

  const handleDelete = (taskId: number) => {
    dispatch(deleted({ id: taskId }));
  };
  return (
    <div>
      {task.taskList
        ?.filter((task) => task.isDone === true)
        .map((task) => (
          <ArchiveItem
            key={task.id}
            archive={task}
            onDelete={() => handleDelete(task.id)}
          ></ArchiveItem>
        ))}
    </div>
  );
};
