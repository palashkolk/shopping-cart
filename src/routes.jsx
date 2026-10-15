import App from './App.jsx'
import Shop from './pages/Shop.jsx'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'

export const routesConfig = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
    ],
  },
];