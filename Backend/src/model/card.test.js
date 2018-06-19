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
            url: 'url'
        }

        const cardSaved = await new Card(dummyCard).save()

        expect(cardSaved).toMatchObject({
            _id: expect.any(ObjectId),
            __v: 0,
            year: 2001,
            description: 'Television',
            category: 'Inventions',
            url: 'url'
        })
        expect(await Card.count()).toEqual(1)
    })

    it('should raise an url exception', async () => {
        const dummyCardWithoutUrl = {
            year: 2001,
            description: 'TV',
            category: 'Inventions'
        }

        try {
            await new Card(dummyCardWithoutUrl).save()
            throw new Error('Should fail.')
        } catch (error) {
            expect(error.message).toEqual('Card validation failed: url: Path `url` is required.')
        }

    })

    it('should raise a year exception', async () => {
        const dummyCardWithoutUrl = {
            description: 'TV',
            category: 'Inventions',
            url: 'url'
        }

        try {
            await new Card(dummyCardWithoutUrl).save()
            throw new Error('Should fail.')
        } catch (error) {
            expect(error.message).toEqual('Card validation failed: year: Path `year` is required.')
        }

    })

    it('should raise a category exception', async () => {
        const dummyCardWithoutUrl = {
            year: 2001,
            description: 'TV',
            url: 'url'
        }

        try {
            await new Card(dummyCardWithoutUrl).save()
            throw new Error('Should fail.')
        } catch (error) {
            expect(error.message).toEqual('Card validation failed: category: Path `category` is required.')
        }

    })

    it('find card by year', async () => {

        const dummyCard = {
            year: 2001,
            description: 'Television',
            category: 'Inventions',
            url: 'url'
        }

        await new Card(dummyCard).save()

        expect(await Card.find({ year: dummyCard.year }).count()).toEqual(1)

    })

    it('find card by description', async () => {

        const dummyCard = {
            year: 2001,
            description: 'Television',
            category: 'Inventions',
            url: 'url'
        }

        await new Card(dummyCard).save()

        expect(await Card.find({ description: dummyCard.description }).count()).toEqual(1)

    })

    it('remove card by id', async () => {
        const dummyCard = {
            year: 2001,
            description: 'Television',
            category: 'Inventions',
            url: 'url'
        }

        await new Card(dummyCard).save()

        const cardInDb = await Card.findOne({ description: 'Television' })

        await Card.remove({ _id: cardInDb.id })

        expect(await Card.count()).toEqual(0)
    })
})
