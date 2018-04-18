import React from "react"
import { shallow } from 'enzyme'

//import beethoven from "./cards.jsx"

it("beethoven creacion", ()=>{

    const beethoven =
    {
        category: 'p',
        description: 'Ludwig van Beethoven',
        image: '../assets/images/cards/beethoven.jpg',
        year: 1770,
    }

    expect(beethoven.year).toEqual(1770)
})