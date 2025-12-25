import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoadingSpinner from './components/LoadingSpinner'
import ScrollToTop from './components/ScrollToTop'

// Lazy load components for better performance
const Home = lazy(() => import('./pages/Home'))

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />

        <main>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App
