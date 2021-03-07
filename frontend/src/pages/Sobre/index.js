import Main from '../../components/Main'
import MainBanner from '../../components/MainBanner'
import Form from '../../components/Form'
import Shelf from '../../components/Shelf'

const Sobre = () => {
  return (
    <>
      <small>Você está na página Sobre</small>
      <Main>
        <MainBanner />
        <Form />
        <Shelf />
      </Main>
    </>
  )
}

export default Sobre