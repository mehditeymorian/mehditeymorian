import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RootLayout } from './components/RootLayout'
import Home from './routes/Home'
import Work from './routes/Work'
import CV from './routes/CV'
import NotFound from './routes/NotFound'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/work', element: <Work /> },
      { path: '/cv', element: <CV /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
