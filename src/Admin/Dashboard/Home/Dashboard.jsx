import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, useLocation } from 'react-router-dom';
import TopNav from '../../Defaults/Navs/TopNav';
import SideNav from '../../Defaults/Navs/SideNav';
import DashView from './DashView';
import Footer from './DashFooter';

function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  // Replace this with your actual authentication check
  const isAuthenticated = true;

  useEffect(() => {
    if (!isAuthenticated) {
      // If not authenticated, redirect to admin login with the return path
      navigate(`/admin?returnPath=${location.pathname}`);
    }
  }, [isAuthenticated, location, navigate]);

  if (!isAuthenticated) {
    return null; // Don't render the dashboard until authenticated
  }

  return (
    <>
      <Helmet>
        <title>Dashboard ~ Algoquant</title>
      </Helmet>
      <div className="wrapper">
        <TopNav />
        <SideNav />
        <DashView />
        <Footer />
      </div>
    </>
  );
}

export default Dashboard;
