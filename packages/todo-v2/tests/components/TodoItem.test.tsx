import { it, expect, describe, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import userEvent from "@testing-library/user-event"
import React from "react";
import { ToDoItem } from "../../src/components";
import { ToDo } from "../../src/model";

afterEach(() => cleanup());
describe("ToDoItem component", () => {
  it("should render a check box and the description of the task", () => {
    const task : ToDo = { id: 0, description: "laundry", isDone: false }
    render(
      <ToDoItem onChecked={()=>{}} task={task} />
    );
    
    const checkbox = screen.getByRole("checkbox")

    expect(checkbox).toBeInTheDocument()
    expect(checkbox).not.toBeChecked()
    expect(screen.getByRole('paragraph')).toHaveTextContent(`${task.description}`)
  });

  it("should check or uncheck the checkbox when a user clicks", async () => {
    const task : ToDo = { id: 0, description: "laundry", isDone: false }
    render(
      <ToDoItem onChecked={()=>{}} task={task} />
    );
    const user = userEvent.setup()
    
    const checkbox = screen.getByRole("checkbox")
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
    
  });
});
