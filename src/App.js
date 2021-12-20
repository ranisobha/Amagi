import React from 'react'
import Section from './components/Sections'
import Signin from './components/pages/Signin'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Logout from './components/pages/Logout';
function App() {
  return (
  <Router>
 <div>
  <Routes>
    <Route path="/" exact element={<Section />} />
    <Route path="/signin" element={<Signin />} />
    <Route path="/logout" element={<Logout />} />
  </Routes>
 </div>
    </Router>
  )
}

export default App
