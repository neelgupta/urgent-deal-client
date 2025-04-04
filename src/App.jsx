import React from 'react';
import { Routes, Route } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.scss';
import VendorOnboarding from './pages/VendorOnboarding';
import TermsCondition from './pages/TermsCondition';


const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<VendorOnboarding />} />
        <Route path="/terms-condition" element={<TermsCondition />} />
      </Routes>
    </>
  )
}

export default App
