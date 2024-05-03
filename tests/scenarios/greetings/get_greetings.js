import { getGreetings } from '../../steps/greetings/get_greetings.js'
import { generateTestData } from '../../utils/helpers.js'

before(async () => {
    await generateTestData()
})

describe('Greetings', () => {
    describe(`Get greetings`, () => {
        getGreetings()
    })
})
