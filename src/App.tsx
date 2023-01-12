import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Blog from "./Components/Blog";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";

function App() {
  const AppLayout = () => {
    <>
      <Outlet />
    </>;
  };

  let router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* <Route element={<AppLayout />}> */}
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/blog" element={<Blog />} />
        {/* </Route> */}
      </>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
