import {Game} from './Game'

it('should return initial state', ()=>{
    expect(Game(undefined, {})).toEqual({})
})