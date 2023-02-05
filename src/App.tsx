import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "@/components/layout/layout";
import { PersonalPage } from "@/components/personal-page/personal-page";
import { PlanPage } from "@/components/plan-page/plan-page";
import { AddonPage } from "@/components/addon-page/addon-page";
import { ConfirmPage } from "./components/confirm-page/confirm-page";
import { ThanksPage } from "./components/thanks-page/thanks-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <PersonalPage />,
      },
      {
        path: "/plan",
        element: <PlanPage />,
      },
      {
        path: "/add-on",
        element: <AddonPage />,
      },
      {
        path: "/confirm",
        element: <ConfirmPage />,
      },
      {
        path: "/thanks",
        element: <ThanksPage />,
      },
    ],
  },
]);

function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
