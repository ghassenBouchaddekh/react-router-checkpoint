import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import NavBar from "./components/NavBar"
import Movies from "./pages/Movies"
import MovieDescription from "./pages/MovieDescription"
function App() {

  const AppLayout=()=>(
    <>
    <NavBar/>
    <Outlet/>
    </>
  )

  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      children:[
        {
          path:"/",
          element:<Movies/>
        },
        {
          path:"movies/:id",
          element:<MovieDescription/>

        },
        {
          path:"/add",
          element:<MovieDescription/>

        }
      ]
    }
  ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
