import ObjectOperation from './objectOperation'
import Random from './random'
import WindowOperation from './windowOperation'

const objectOperation = new ObjectOperation()
const random = new Random()
const windowOperation = new WindowOperation()

const common = {
  objectOperation,
  random,
  windowOperation
}

export default common
