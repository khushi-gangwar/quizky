import React from 'react';
import Home from './Pages/Home/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Category from './Pages/Category/Category';
import Quiz from './Pages/Quiz/Quiz';
import NonTech from "./Pages/Quiz/NonTech"
import Instructions from "./Pages/Instuctions/Instuctions"
import Aptitude from './Pages/Quiz/Aptitude';

const router=createBrowserRouter([
  {path:'/',element:<Home />},
  {path:'/select',element:<Category/>},
  {path:'/quiz',element:<Quiz/>},
  {path:'/ntquiz',element:<NonTech/>},
  {path:'/instruction',element:<Instructions/>},
  {path:'/aptitude',element:<Aptitude/>}
])

function App() {
  return (
    <RouterProvider router={router}/> );
}

export default App;
