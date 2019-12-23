import Store from './store'
const MsFeTools = () => {
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
    changeHelloText,
    Store
  }
}

export default MsFeTools()
