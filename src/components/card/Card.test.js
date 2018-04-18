import React from "react"
import { shallow } from 'enzyme'
import { mount } from 'enzyme'

import {Card} from "./Card.jsx"
import { not } from "glamor";

it("renderiza campos base de carta", ()=> {
    const beethoven =
    {
        category: 'p',
        description: 'Ludwig van Beethoven',
        image: '../assets/images/cards/beethoven.jpg',
        year: 1770,
        visible: true
    }
    const result = mount(<Card {...beethoven}/>)
    expect(result.find('.back div.category').text()).toEqual("p")
    expect(result.find('.back div.description').text()).toEqual("Ludwig van Beethoven") 
    expect(result.find('.back div.year').text()).toEqual("1770")
})

it("renderiza cardsleeve", ()=>{
    const beethoven =
    {
        category: 'p',
        description: 'Ludwig van Beethoven',
        image: '../assets/images/cards/beethoven.jpg',
        year: 1770,
        visible: false
    }

    const mountCard = mount(<Card{...beethoven}/>)

    const divsSleeveContainer = mountCard.find('div.sleeve-container')
    expect(divsSleeveContainer.length).toEqual(1)

    const divsSleeveView = mountCard.find('div.sleeve-view')
    expect(divsSleeveView.length).toEqual(1)

})

it("card recibe 5 props", ()=>{
    const beethoven =
    {
        category: 'p',
        description: 'Ludwig van Beethoven',
        image: '../assets/images/cards/beethoven.jpg',
        year: 1770,
        visible: false
    }

    const sleeveCard = mount(<Card {...beethoven}/>)
    expect(Object.keys(sleeveCard.props()).length).toBe(5)

})