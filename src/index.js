const HelloWorld = () => {
  let helloText = 'World'
  const hello = () => {
    console.log('Hello')
  }
  const world = () => {
    console.log(helloText)
  }
  const changeHelloText = (newText) => {
    helloText = newText
  }
  return {
    hello,
    world,
    changeHelloText
  }
}

export default HelloWorld()
