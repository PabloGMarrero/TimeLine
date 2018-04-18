import React from "react"
import { shallow } from 'enzyme'
import { mount } from 'enzyme'

import {Card} from "./Card.jsx"

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

})