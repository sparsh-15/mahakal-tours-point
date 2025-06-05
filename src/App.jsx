import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import PackageDetail from './pages/PackageDetail';
import Home from './pages/Home/Home';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages/:id" element={<PackageDetail />} />
      </Routes>
    </Router>
  )
}

export default App
