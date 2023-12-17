import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import ProfileForm from "./components/ProfileForm/ProfileForm";
import ProfileInfo from "./components/ProfileInfo/ProfileInfo";

const router = createBrowserRouter([
  {
    index: true,
    path: "/",
    element: <ProfileInfo />,
  },
  {
    path: "/form",
    element: <ProfileForm />,
  },
  {
    path: "*",
    element: <Navigate replace to="/" />,
  },
]);

function App() {
  return (
    <div className="main-page-layout">
      <div className="main-page-card">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
