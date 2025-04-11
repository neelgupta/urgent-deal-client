import React from 'react';
import { Routes, Route } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.scss';
import VendorOnboarding from './pages/VendorOnboarding';
import VendorTermsCondition from './pages/VendorTermsCondition';
import Home from './pages/Home';
import $ from "jquery";


const App = () => {
  $(function () {
    $('.btn')
      .on('mouseenter', function (e) {
        var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
        $(this).find('.btn-bg').css({ top: relY, left: relX })
      })
      .on('mouseout', function (e) {
        var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
        $(this).find('.btn-bg').css({ top: relY, left: relX })
      });
  });

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/vendor-terms-condition" element={<VendorTermsCondition />} />
        <Route path="/become-seller" element={<VendorOnboarding />} />
      </Routes>
    </>
  )
}

export default App
