import mongoose from 'mongoose'
import { Mockgoose } from 'mockgoose'
import request from 'supertest'
import start from '../server/server'

const mockgoose = new Mockgoose(mongoose)

const Cardmodel = mongoose.model('Card')

const dummyCard = {
    year: 2001,
    description: 'Television',
    category: 'Inventions',
    url: 'url'
}

describe('Routes', () => {
    let app

    beforeEach(() => {
        app = start()
    })

    beforeAll(async () => {
        await mockgoose.prepareStorage()
        await mongoose.connect('mongodb://timeline-ps:timeline-ps1@ds263670.mlab.com:63670/timeline-ps')
    })

    afterEach(async () => {
        mockgoose.helper.reset()
    })

    afterAll(async () => {
        await mongoose.disconnect()
    })

    describe('GET /cards', () => {

        it('obtener todos sin datos en mongo da array vacio', async () => {
            await request(app)
                .get('/cards')
                .expect(200)
                .expect(res =>
                    expect(res.body).toEqual([])
                )
        })

        it('guardo uno y lo obtengo', async () => {
            await Cardmodel.create(dummyCard)

            await request(app)
                .get('/cards')
                .expect(200)
                .expect(res =>
                    expect(res.body).toEqual([{
                        __v: 0,
                        _id: expect.any(String),
                        description: 'Television',
                        category: 'Inventions',
                        year: 2001,
                        url: 'url'
                    }])
                )
        })
    })

    describe('POST /cards', () => {
        it('debe guardar en base', async () => {
            await request(app)
                .post('/cards')
                .send(dummyCard)
                .expect(200)
                .expect(res =>
                    expect(res.body).toEqual({
                        status: 'ok',
                        data: [{
                            __v: 0,
                            _id: expect.any(String),
                            year: 2001,
                            description: 'Television',
                            category: 'Inventions',
                            url: 'url'
                        }]

                    })
                )
            expect(await Cardmodel.count()).toEqual(1)
        })
    })

})
