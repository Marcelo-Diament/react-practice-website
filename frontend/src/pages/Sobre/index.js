import Main from '../../components/Main'
import MainBanner from '../../components/MainBanner'
import Form from '../../components/Form'
import Shelf from '../../components/Shelf'
import { content } from '../../Helpers'

const Sobre = () => {
  const { categories, posts } = content
  const renderCategories = () => categories.map((category) => {
    const { id, title } = category
    const catPosts = posts.filter(post => post.cat_id === id)
    return (
      <Shelf title={title} posts={catPosts} key={id} />
    )
  })
  return (
    <>
      <small>Você está na página Sobre</small>
      <Main>
        <MainBanner title="SOBRE" />
        <Form />
        {renderCategories()}
      </Main>
    </>
  )
}

export default Sobre