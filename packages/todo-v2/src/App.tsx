import "./App.css";
import { AddTodo, ToDoSection } from "./components";
import { ArchiveSection } from "./components";

function App() {
  return (
    <>
      <h1 className="font-bold font-sans text-center bg-white my-4 p-3 rounded-md">
        To Do List
      </h1>
      <div className="flex justify-center bg-white h-full p-4 rounded-md">
        <div className="flex flex-col gap-3">
          <AddTodo />
          <div className="flex justify-between gap">
            <ToDoSection />
            <ArchiveSection />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
