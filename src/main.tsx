import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Link,
  HashRouter,
} from "react-router-dom";
import Home from '../src/pages/Home'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/error';
import Register from './pages/register'
import Report from './pages/report';
import Tagging from './pages/tagging';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Dashboard/:id" element={<Dashboard />}/>
        <Route path="report" element={<Report />} />
        <Route path="register" element={<Register />} />
        <Route path="tagging" element={<Tagging />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  
    </BrowserRouter>
  </React.StrictMode>
)
