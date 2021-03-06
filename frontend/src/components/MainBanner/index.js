import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import './style.css'

const MainBanner = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [img, setImg] = useState({})
  const { getRandomImgByTerm } = api.Unsplash

  const imgCallback = url => {
    setImg(url)
    setIsLoading(false)
  }
  useEffect(() => getRandomImgByTerm('nature', imgCallback), [])

  return (
    <section className="main-banner" style={{ backgroundImage: isLoading ? '' : `url(${img}` }}>
      <h1 className="main-banner__title">MAIN BANNER</h1>
      <a href="/produto" className="main-banner__btn">Ver mais</a>
    </section >
  )
}

export default MainBanner
