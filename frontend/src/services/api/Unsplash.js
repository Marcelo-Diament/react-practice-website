const getRandomImgByTerm = async (term, callback) => {
  const response = await fetch(`https://source.unsplash.com/1600x600/?${term},horizontal`)
  const url = response.url
  callback(url)
}

const Unsplash = {
  getRandomImgByTerm
}

export default Unsplash