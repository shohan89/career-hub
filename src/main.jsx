import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Root from './layouts/Root.jsx'
import AppliedJobs from './Pages/AppliedJobs.jsx'
import Home from './Pages/Home.jsx'
import JobDetails from './Pages/JobDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/applied',
        element: <AppliedJobs />
      },
      {
        path: '/job/:id',
        element: <JobDetails />,
        // loader: () => fetch('../jobs.json')
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
