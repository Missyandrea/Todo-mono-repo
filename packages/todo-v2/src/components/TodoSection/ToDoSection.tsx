import { useDispatch, useSelector } from "react-redux";
import { ToDoItem } from "./ToDoItem";
import { RootState } from "../../app/store";
import { archived } from "../../reducers/todoSlice";

export const ToDoSection = () => {
    const {tasks} = useSelector((state : RootState) => state.todoState)
    const dispatch = useDispatch()

    const handleOnChecked = (taskId : number)=> {
        dispatch(
            archived({
                id: taskId
            })
        )
    }
  return (
    <div className="flex flex-col gap-1">
        {tasks.map((task)=>
        <ToDoItem onChecked={handleOnChecked} key={task.id} task={task}/>
        )}
    </div>
  );
};
