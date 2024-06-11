import React from 'react'
import ReactDom from 'react-dom/client'
import Home from './views/Home/Home'
import About from './views/About/About'
import Contact from './views/Contact/Contact'
import Services from './views/Services/Services'
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom'
const root = ReactDom.createRoot(document.getElementById('root'))

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/About',
        element: <About/>
    },
    {
        path: '/Contact',
        element: <Contact/>
    },
    {
        path: '/Services',
        element: <Services/>
    }
])

root.render(<RouterProvider router={router}/>)



