import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App.tsx";
import "./index.css";
import { ErrorPage } from "./pages/ErrorPage.tsx";
import { TodoSection } from "./pages/TodoSection.tsx";
import { ArchivesSection } from "./pages/ArchivesSection.tsx";
import { store } from "./state/store.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/todo/tasks",
        element: <TodoSection />,
      },
      {
        path: "/todo/tasks/:todoId",
        element: <TodoSection />,
      },
      {
        path: "/todo/archives",
        element: <ArchivesSection />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
    
  </StrictMode>
);
