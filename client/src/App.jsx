import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { 
  HomePage, 
  CreatePage
} from "./pages/exportPages.js";
import Navbar from "./components/Navbar.jsx";

function App() {

    return (
      <div className="">
        <BrowserRouter>
        <Navbar />
          <div className="Pages px-62 py-20">
            <Routes>
              <Route path="/" element={<HomePage />} />  
              <Route path="/create" element={<CreatePage />} />  
            </Routes>    
          </div>
        </BrowserRouter>
      </div>
    )
}

export default App;