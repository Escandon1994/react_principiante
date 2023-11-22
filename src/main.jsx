import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './assets/paginas/Home.jsx'
import Acerca from './assets/paginas/Acerca.jsx'
import Frontend from './componet/Frontend.jsx'
import Rutas from './assets/paginas/Rutas.jsx'
import Rutaspath from './assets/paginas/Rutaspath.jsx'
import RutasQueriString from './assets/paginas/RutasQueriString.jsx'
import ErrorPerzonalizado from './assets/paginas/ErrorPerzonalizado.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import './../public/css/blog.css'
import './componet/StyleComponet'

import Error440 from './assets/paginas/Error440.jsx'
import StyleComponet from './componet/StyleComponet'
import Hooks from './componet/Hooks.jsx'
import HooksEventoclick from './assets/paginas/HooksEventoclick.jsx'
import HookState from './assets/paginas/HookState.jsx'
import HooksEventoOnchain from './assets/paginas/HooksEventoOnchain.jsx'
import HooksEventosVarios from './assets/paginas/HooksEventosVarios.jsx'
import HooksUseEfeck from './assets/paginas/HooksUseEfeck.jsx'
import HooksCustom from './assets/paginas/HooksCustom.jsx'
import HookUseLoader, {loader as paisesLoader} from './assets/paginas/HookUseLoader.jsx'
import HooksUseNavigate from './assets/paginas/HooksUseNavigate.jsx'
import { HooksLocation } from './assets/paginas/HooksLocation.jsx'
import HooksUseRef from './assets/paginas/HooksUseRef.jsx'
import Formularios from './assets/paginas/Formularios.jsx'
import FormularioSimple from './assets/paginas/FormularioSimple.jsx'
import FormularioUseActionData, {action as procesarFormulario} from'./assets/paginas/FormularioUseActionData.jsx'
import FormulariosFormilk from './assets/paginas/FormulariosFormilk.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Frontend/>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/sobre-nosotros',
        element: <Acerca />
      },
      {
        path: '/rutas',
        element: <Rutas />
      },
      {
        path: '/rutas/path/:id/:slug',
        element: <Rutaspath />
      },
      {
        path: '/rutas/query-string',
        element: <RutasQueriString />,
        errorElement: <ErrorPerzonalizado/>
      },
      {
        path:'/style',
        element: <StyleComponet/>
      },
      {
        path:'/hooks',
        element: <Hooks/>
      },
      {
        path:'/hooks/evento-click',
        element: <HooksEventoclick/>
      },
      {
        path:'/hooks/usestate',
        element: <HookState/>
      },
      {
        path:'/hooks/onchain',
        element: <HooksEventoOnchain/>
      },
      {
        path:'/hooks/varios',
        element: <HooksEventosVarios/>
      },
      {
        path:'/hooks/useEffect',
        element: <HooksUseEfeck/>
      },
      {
        path:'/hooks/custom',
        element: <HooksCustom/>
      },
      {
        path:'/hooks/navigate',
        element: <HooksUseNavigate/>
      },
      {
        path:'/hooks/location',
        element: <HooksLocation/>
      },
      {
        path:'/hooks/ref',
        element: <HooksUseRef/>
      },
      {
        path:'/formularios',
        element: <Formularios/>
      },
      {
        path:'/formularios/simple',
        element: <FormularioSimple/>
      },
      {
        path:'/formularios/data',
        element: <FormularioUseActionData/>,
        action: procesarFormulario
      },
      {
        path:'/formularios/milk',
        element: <FormulariosFormilk/>,
       
      },
      {
        path:'/hooks/load',
        loader:paisesLoader,
        element: <HookUseLoader/>
      },
      {
        path:'*',
        element: <Error440/>
      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}> </RouterProvider>
  </React.StrictMode>
)
