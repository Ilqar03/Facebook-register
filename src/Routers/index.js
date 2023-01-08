import { createBrowserRouter } from "react-router-dom";
import CreateAccount from "../components/Pages/CreateAccount";
import LogIn from "../components/Pages/LogIn";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LogIn/>,
  },
 
  {
    path: "/createaccount",
    element: <CreateAccount/>,
  }
]);
export default router