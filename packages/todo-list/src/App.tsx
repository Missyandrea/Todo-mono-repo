import "./App.css";
import { task } from "./model";
import { NavLink, Outlet } from "react-router-dom";
import { Input } from "./Components/Input";

export type TState = {
  task: task;
  taskList?: task[];
};
export type TAction = {
  type: string;
  id?: number;
  taskDescription?: string;
  isDone?: boolean;
};

function App() {
  return (
    <>
      <div className="">
        <Input />
        <div className="flex space-x-2 mt-4 ">
          <NavLink
            to={"/todo/tasks"}
            className={({ isActive }) => {
              return isActive
                ? "bg-blue-300 ml-4 rounded-md text-white p-2"
                : "bg-green-600 ml-4 rounded-md text-white p-2";
            }}
          >
            Todo
          </NavLink>
          <NavLink
            to={"/todo/archives"}
            className={({ isActive }) => {
              return isActive
                ? "bg-blue-300 ml-4 rounded-md text-white p-2"
                : "bg-green-600 ml-4 rounded-md text-white p-2";
            }}
          >
            Archives
          </NavLink>
        </div>
      </div>
      <div className="p-4">
        <Outlet />
      </div>
    </>
  );
}

export default App;
