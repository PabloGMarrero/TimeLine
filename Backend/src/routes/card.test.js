import mongoose from 'mongoose'
import { Mockgoose } from 'mockgoose'
import request from 'supertest'
import start from '../server/server'

const mockgoose = new Mockgoose(mongoose)

describe('Routes - Card', () => {
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

    describe('GET /cards', () => {

        it('obtener todos sin datos en mongo da array vacio', async () => {
            await request(app)
                .get('/cards')
                .expect(200)
                .expect(res =>
                    expect(res.body).toEqual([])
                )
        })
    })
})
