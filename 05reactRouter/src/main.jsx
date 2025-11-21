import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Outlet, RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/pages/About.jsx'
import Menu from './components/pages/Menu.jsx'
import Section from './components/pages/Section.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: 'menu',
        element: <Menu />
      },
      {
        path: 'section',
        element: <Section />
      }
    ]


  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
