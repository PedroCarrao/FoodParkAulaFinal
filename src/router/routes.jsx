import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";
import Pagina2 from "../pages/Pagina2";
import Pagina3 from "../pages/Pagina3";
import Taverna from "../pages/Taverna";

const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/taverna", element: <Taverna />},
    {path: "/pagina2", element: <Pagina2 />},
    {path: "/pagina3", element: <Pagina3 />},
])

export default router;
