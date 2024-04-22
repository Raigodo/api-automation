import { getBooks } from '../../steps/books/get_books.js'
import { generateTestData } from '../../utils/helpers.js'

before(async () => {
    await generateTestData()
})

describe('Get book id', () => {
    describe(`Get first book ID`, () => {
        getBooks()
    })
})
