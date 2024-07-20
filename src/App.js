import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './DEFAULTS/Layout'
import Home from "./COMPONENTS/Home/Home";
import Profile from "./COMPONENTS/Profile/Profile";
import Invest from "./COMPONENTS/Investors/Investor";
import ContactUs from './COMPONENTS/ContactUs/ContactUs';
import NoPage from './COMPONENTS/NoPage/NoPage'

// *** Dashboard
import Login from './Admin/Login/Login';
import Dashboard from './Admin/Dashboard/Home/Dashboard';
import AddNew from './Admin/Dashboard/Home/AddNew/AddNew';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='profile' element={<Profile />} />
          <Route path='invest' element={<Invest />} />
          <Route path='contact' element={<ContactUs />} />
          <Route path='*' element={<NoPage />} />

          {/* *** Dashboard *** */}
          <Route path="admin" element={<Login />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='upload-document' element={<AddNew />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);