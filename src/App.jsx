import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import NavBar from "./components/NavBar"
import Movies from "./pages/Movies"
import MovieDescription from "./pages/MovieDescription"
import { ToastContainer } from "react-toastify"
import NewMovie from "./pages/NewMovie"
function App() {

  const AppLayout=()=>(
    <>
    <ToastContainer/>
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
          element:<NewMovie/>

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
