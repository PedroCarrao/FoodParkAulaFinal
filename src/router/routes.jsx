import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";
import Taverna from "../pages/Taverna";
import CerealKiller from "../pages/CerealKiller";


const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/taverna", element: <Taverna />},
    {path: "/cereal", element: <CerealKiller />},
])

export default router;
