import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import './style.css'

const MainBanner = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [img, setImg] = useState('https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif')
  const [term, setTerm] = useState('nature')
  const { getRandomImgByTerm } = api.Unsplash

  const imgCallback = url => {
    setImg(url)
    setTimeout(
      setIsLoading(false),
      1500
    )
  }

  const changeTheme = event => {
    event.preventDefault()
    setTerm(prompt('Qual tema deseja?\n\nO termo deve ser escrito em inglês'))
  }

  useEffect(() => {
    getRandomImgByTerm(term, imgCallback)
  }, [getRandomImgByTerm, term])

  return (
    <section className={`main-banner ${isLoading ? 'loading' : ''}`} style={{ backgroundImage: `url(${img}` }}>
      <h1 className="main-banner__title">MAIN BANNER</h1>
      <a href="/produto" className="main-banner__btn" onClick={changeTheme}>Trocar tema</a>
    </section>
  )
}

export default MainBanner
