import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Courses from './components/Courses'
import Resources from './components/Resources'
import Contact from './components/contact'
function App() {

  return (
    
    <>
     <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
