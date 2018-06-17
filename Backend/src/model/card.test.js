import mongoose from 'mongoose'
import { Mockgoose } from 'mockgoose'
import './card'

const { ObjectId } = mongoose.Types

const mockgoose = new Mockgoose(mongoose)
const Card = mongoose.model('Card')

describe('CardModel', () => {
    beforeAll(async () => {
        await mockgoose.prepareStorage()
        await mongoose.connect('mongodb://timeline-ps:timeline-ps1@ds263670.mlab.com:63670/timeline-ps')
    })
    afterEach(async () => {
        await mockgoose.helper.reset()
    })

    it('card created', async () => {
        const dummyCard = {
            year: 2001,
            description: 'Television',
            category: 'Inventions',
            url: ''
        }

        const cardSaved = await new Card(dummyCard).save()

        expect(cardSaved).toMatchObject({
            _id: expect.any(ObjectId),
            __v: 0,
            year: 2001,
            description: 'Television',
            category: 'Inventions',
            url: ''
        })
        expect(await Card.count()).toEqual(1)
    })
})
