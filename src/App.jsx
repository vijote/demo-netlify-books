import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Home</div>,
    },
    {
      path: "/test",
      element: <div>Test Page</div>,
    },
  ]);
  
  return (
    <RouterProvider router={router} />
  )
}

export default App
