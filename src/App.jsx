// rrd
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layout
import MainLayout from "./layouts/MainLayout";
// page
import FirstStep from "./pages/FirstStep";
import SecondStep from "./pages/SecondStep";
import ThreeStep from "./pages/ThreeStep";
import FourthStep from "./pages/FourthStep";
import ConfirmPage from "./pages/ConfirmPage";

// action
import { action as FirstAction } from "./pages/FirstStep";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      // errorElement:
      children: [
        {
          index: true,
          element: <FirstStep />,
          action: FirstAction,
        },
        {
          path: "/secondstep",
          element: <SecondStep />,
        },
        {
          path: "/threestep",
          element: <ThreeStep />,
        },
        {
          path: "/fourthstep",
          element: <FourthStep />,
        },
        {
          path: "/confirm",
          element: <ConfirmPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
