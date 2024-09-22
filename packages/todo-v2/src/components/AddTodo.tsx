import { useState } from "react";
import { useDispatch } from "react-redux";
import { added } from "../reducers/todoSlice";

export const AddTodo = () => {
  const [todoDescription, setTodoDescription] = useState("");
  const dispatch = useDispatch();
  let isDisabled = todoDescription.trim().length === 0;

  const handleOnKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === "Enter") {
      setTodoDescription("");
      addTodo();
    }
  };
  const handleOnclick = () => {
    setTodoDescription("");
    addTodo();
  };

  const addTodo = () => {
    dispatch(
      added({
        id: Math.random(),
        description: todoDescription,
      })
    );
  };

  return (
    <>
      <div className="">
        <label className="font-serif" htmlFor="Todo-Input">Type in your task below 😊</label>
        <div className="flex justify-between">
          <input
            className="border-2 border-gray-400 rounded-s-md h-10 w-full mr-2 p-2"
            id="Todo-Input"
            type="text"
            value={todoDescription}
            onKeyDown={(evt) => handleOnKeyDown(evt)}
            onChange={(e) => setTodoDescription(e.target.value)}
          />
          <button
            className="disabled:bg-slate-400 bg-green-700 rounded-e-md p-2
             text-white font-bold"
            disabled={isDisabled}
            onClick={handleOnclick}
          >
            ADD
          </button>
        </div>
      </div>
    </>
  );
};
