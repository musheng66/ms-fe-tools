import store from './store'
import Tree from './tree'
import Common from './common'
import Validator from './validator'

const common = new Common()
const validator = new Validator()

const MsFeTools = () => {
  return {
    Tree,
    store,
    validator,
    common
  }
}

export default MsFeTools()

export {
  Tree,
  store,
  common,
  validator
}