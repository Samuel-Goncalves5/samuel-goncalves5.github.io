import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router'
import Publications from './pages/Publications'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/publications" element={<Publications />} />
      </Routes>
    </>
  )
}

export default App
