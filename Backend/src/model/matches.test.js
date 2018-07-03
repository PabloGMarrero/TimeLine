import mongoose from 'mongoose'
import { Mockgoose } from 'mockgoose'
import './matches'

const { ObjectId } = mongoose.Types

const mockgoose = new Mockgoose(mongoose)
const Match = mongoose.model('Match')

describe('Matchmodel', () => {

    beforeAll(async () => {
        await mockgoose.prepareStorage()
        await mongoose.connect('mongodb://timeline-ps:timeline-ps1@ds263670.mlab.com:63670/timeline-ps')
    })

    afterEach(async () => {
        await mockgoose.helper.reset()
    })

    describe('Errors test', () => {
        it('should raise a name exception', async () => {
            const dummyMatchWithoutName = {
                size: 2,
                players: [{}, {}],
                cards: [{}]
            }

            try {
                await new Match(dummyMatchWithoutName).save()
                throw new Error('Should fail')
            } catch (error) {
                expect(error.message).toEqual('Match validation failed: name: Path `name` is required.')
            }
        })

        it('should raise a size exception', async () => {
            const dummyMatchWithoutSize = {
                name: 'Match',
                players: [{}, {}],
                cards: [{}]
            }

            try {
                await new Match(dummyMatchWithoutSize).save()
                throw new Error('Should fail')
            } catch (error) {
                expect(error.message).toEqual('Match validation failed: size: Path `size` is required.')
            }
        })
    })

    describe('Functional test', () => {
        it('Update match', async () => {
            const dummyMatch = {
                name: 'Match',
                size: 2,
                players: [{}],
                cards: [{}]
            }

            const saved = await new Match(dummyMatch).save()
            expect(await Match.findOne({ name: dummyMatch.name }).count()).toEqual(1)

            saved.name = 'Match piola'
            await saved.save()

            const matchInDB = await Match.findOne({ name: saved.name })
            expect(matchInDB.name).toEqual('Match piola')
        })
    })
})
