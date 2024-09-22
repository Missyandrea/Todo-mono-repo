import { it, expect, describe, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import "@testing-library/jest-dom/vitest";
import { AddTodo } from "../../src/components";
import { Provider } from "react-redux";
import { store } from "../../src/app/store";

afterEach(() => cleanup());
describe("AddToDo component", () => {
  it("should render an input and a button", () => {
    render(
      <Provider store={store}>
        <AddTodo />
      </Provider>
    );
    expect(screen.getByLabelText(/type || enter/i)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should clear the input when the button is clicked ", async () => {
    render(
      <Provider store={store}>
        <AddTodo />
      </Provider>
    );
    const user = userEvent.setup();

    await user.type(screen.getByLabelText(/type || enter/i), "Laundry");
    await user.click(screen.getByRole("button"));

    expect(screen.getByLabelText(/type || enter/i)).not.toHaveValue();
  });

  it("should clear the input when the enter key is pressed ", async () => {
    render(
      <Provider store={store}>
        <AddTodo />
      </Provider>
    );
    const user = userEvent.setup();

    await user.type(screen.getByLabelText(/type || enter/i), "laundry");
    await user.keyboard("{Enter}");

    expect(screen.getByLabelText(/type || enter/i)).not.toHaveValue();
  });

  it("should render a disabled button if the user types spaces", async () => {
    render(
      <Provider store={store}>
        <AddTodo />
      </Provider>
    );
    const user = userEvent.setup();

    await user.type(screen.getByLabelText(/type || enter/i), "  ");

    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("should render an enabled button if the user types letters", async () => {
    render(
      <Provider store={store}>
        <AddTodo />
      </Provider>
    );
    const user = userEvent.setup();

    await user.type(screen.getByLabelText(/type || enter/i), "laundry");

    expect(screen.getByRole("button")).not.toBeDisabled();
  });
});
