import { it, expect, describe, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import React from "react";
import { ToDo } from "../../src/model";
import { ArchiveItem } from "../../src/components";

afterEach(() => cleanup());
describe("ArchiveItem component", () => {
  it("should render the task description and the delete button", () => {
    const task: ToDo = { id: 0, description: "laundry", isDone: true };
    render(<ArchiveItem onDelete={() => {}} task={task} />);

    //screen.debug()

    expect(screen.getByRole("paragraph")).toBeInTheDocument();
    expect(screen.getByRole("paragraph")).toHaveTextContent(
      `${task.description}`
    );

    expect(screen.getByRole("button")).toBeInTheDocument()
  });
});
