import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Movie from './pages/Movie';
import Contact from './pages/Contact';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "react-router-v6-in-reactv19/",
      element: <Home />
    },
    {
      path:"react-router-v6-in-reactv19//about",
      element: <About />
    },
    {
      path:"react-router-v6-in-reactv19/movie",
      element: <Movie />
    },
    {
      path:"react-router-v6-in-reactv19/contact",
      element: <Contact />
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
