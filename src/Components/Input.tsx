import { useState } from "react";
import { added } from "../state/Task/taskSlice";
import { useAppDispatch } from "../hooks/useReduxHooks";

export const Input = () => {
  const dispatch = useAppDispatch();
  const [todoText, setTodoText] = useState("");
  const isDisabled = todoText.trim().length == 0;
  // const InputRef = useRef(null);

  const handleKeyPressed = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key==="Enter"){
      handleOnAdd()
    }
  };

  const handleOnAdd = () => {
    dispatch(
      added({
        id: Math.random(),
        description: todoText.trim(),
      })
    );
    setTodoText("");
  };

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  return (
    <div className="flex space-x-2">
      <input
        type="text"
        className="border-blue-100 border-solid p-3"
        value={todoText}
        onChange={(e) => handleOnchange(e)}
        onKeyDown={(e)=>handleKeyPressed(e)}
        placeholder="Enter task here"
      />
      <button
        disabled={isDisabled}
        className={`bg-green-600 ml-4 rounded-md text-white p-2 ${
          isDisabled && "disabled:bg-gray-400"
        }`}
        onClick={() => handleOnAdd()}
      >
        Add
      </button>
    </div>
  );
};
