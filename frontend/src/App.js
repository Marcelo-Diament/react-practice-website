import React, { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import './App.css';

function App() {
  const lightAsDefault = new Date().getHours() > 8 && new Date().getHours() < 18
  const [isLight, setIsLight] = useState(lightAsDefault)
  const toggleTheme = () => setIsLight(!isLight)
  return (
    <div className={`App${!isLight ? ' dark' : ''}`}>
      <Header themeClick={toggleTheme} />
      <Home />
      <Footer />
    </div>
  )
}

export default App
