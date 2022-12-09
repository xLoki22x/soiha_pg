import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
  useParams
} from "react-router-dom";
import Home from '../src/pages/Home'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/error';
import Register from './pages/register'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Dashboard/:id" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/Dashboard" >
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
