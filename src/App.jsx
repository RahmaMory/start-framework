
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import Portflio from './Components/Portfolio/Portflio'
import NotFound from './Components/NotFound/NotFound'

function App() {
let routes= createBrowserRouter([{
    path:'',element:<Layout/>,children:[
       {
        index:true,element:<Home/>
      },
      {
        path:'Contact',element:<Contact/>
      },
       {
        path:'About',element:<About/>
      },
       {
        path:'Portfolio',element:<Portflio/>
      },
       
     {
        path:'*' , element:<NotFound/>
      }

    ]
  }])

  return <>
  <RouterProvider router={routes} ></RouterProvider>

  </>
 
}

export default App;
