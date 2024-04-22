import { request } from '../../utils/requests.js'

export async function getBooks() {
    it('Retrieve list of books', async function () {
        await request(this, 'GET', '/books', undefined, true, 
            {
                statusCode : 200,
                expectedFields: [
                    '0.id'
                ],
                expectedValues: [
                                    {path: '0.id', value: 1}
                                ]
            }
        )
    })
}