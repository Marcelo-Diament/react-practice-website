import Main from '../../components/Main'
import MainBanner from '../../components/MainBanner'
import Shelf from '../../components/Shelf'

const Home = () => {
  return (
    <>
      <small>Você está na página Home</small>
      <Main>
        <MainBanner title="HOME" />
        <Shelf />
      </Main>
    </>
  )
}

export default Home