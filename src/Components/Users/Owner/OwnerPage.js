import React, { useState } from 'react';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SideBar from '../../../utils/sidebars/SideBar';
import './OwnerPage.css'

function OwnerPage() {
  const [navVisible, showNavbar] = useState(false);

  return (
    <div className="OwnerPage">
      <SideBar />
    </div>
  );
}

export default OwnerPage;
