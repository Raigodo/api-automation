import { request } from '../../utils/requests.js'

export async function getGreetings() {
    it('Retrieve list of books', async function () {
        await request(this, 'GET', '/greetings', undefined, true, 
            {
                statusCode : 200,
                expectedFields: [
                    'greeting'
                ],
                expectedValues: [
                                    {path: 'greeting', value: "Hello from Python App!"}
                                ]
            }
        )
    })
}