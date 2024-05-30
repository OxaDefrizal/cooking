import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './pages/homePage';
import RecipeMenu from './pages/recipeMenu';
import AboutUs from './pages/aboutUs';
import ContactUs from './pages/contactUs';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import Layout from './Layout';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/recipes',
          element: <RecipeMenu />,
        },
        {
          path: '/about',
          element: <AboutUs />,
        },
        {
          path: '/contact',
          element: <ContactUs />,
        },
        {
          path: '/signin',
          element: <SignIn />,
        },
        {
          path: '/signup',
          element: <SignUp />,
        },
      ],
    },
  ],
  {
    basename: '/cooking',
  }
);

export default function App() {
  return <RouterProvider router={router} />;
}
