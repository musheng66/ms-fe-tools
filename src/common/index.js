import ObjectOperation from './objectOperation'
import Random from './random'
import WindowOperation from './windowOperation'
import DateTime from './dateTime'

const objectOperation = new ObjectOperation()
const random = new Random()
const windowOperation = new WindowOperation()
const dateTime = new DateTime()

const common = {
  object: objectOperation,
  random,
  window: windowOperation,
  dateTime
}

export default common
