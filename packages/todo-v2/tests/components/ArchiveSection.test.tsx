import { it, expect, describe, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import userEvent from "@testing-library/user-event";
import React from "react";
import { ToDo } from "../../src/model";
import { ArchiveSection } from "../../src/components";
import { Provider } from "react-redux";
import { store } from "../../src/app/store";
import { bulkAdd } from "../../src/reducers/todoSlice";


describe("ArchiveItem component", () => {
  it("should render the task description and the delete button", () => {
    const tasks: ToDo[] = [
      { id: 0, description: "laundry", isDone: true },
      { id: 1, description: "lunchbox", isDone: true },
    ];

    store.dispatch(bulkAdd(tasks));

    render(
      <Provider store={store}>
        <ArchiveSection />
      </Provider>
    );

    tasks.forEach((task) => {
      const paragraph = screen.getByText(`${task.description}`);
      expect(paragraph).toBeInTheDocument();
    });
  });

  it("should remove a task when user clicks on delete", async () => {
    render(
      <Provider store={store}>
        <ArchiveSection />
      </Provider>
    );
    const tasks: ToDo[] = [
      { id: 0, description: "laundry", isDone: true },
      { id: 1, description: "lunchbox", isDone: true },
    ];

    store.dispatch(bulkAdd(tasks));
    const user = userEvent.setup();

    tasks.forEach(async (task, index) => {
      const button = screen.getAllByText(/delete/i)[index];

      await user.click(button);

      expect(button).not.toBeInTheDocument();
    });
  });
});
