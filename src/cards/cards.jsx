import React from 'react'
import { generate as generateCardKey } from 'shortid'

import { Card } from "../components/card/Card";

export const categories =
    {
        people: 'p',
        artAndLiterature: 'A',
        monunents: 'M',
        historyEvents: 'H',
        inventions: 'I'
    }

export const beethoven =
    {
        category: categories.people,
        description: 'Ludwig van Beethoven',
        image: '../assets/images/cards/beethoven.jpg',
        year: 1770,
    }

export const monaLisa =
    {
        category: categories.artAndLiterature,
        description: 'Mona Lisa',
        image: '../assets/images/cards/mona-lisa.jpg',
        year: 1503,
    }

export const statueOfLiberty =
    {
        category: categories.monunents,
        description: 'Statue of Liberty',
        image: '../assets/images/cards/The-Statue-Of-Liberty.jpg',
        year: 1886,
    }

export const discoveryOfAmerica =
    {
        category: categories.historyEvents,
        description: 'Discovery of America',
        image: '../assets/images/cards/columbus-discovers-america.jpg',
        year: 1492,
    }

export const telephone =
    {
        category: categories.inventions,
        description: 'Telephone',
        image: '../assets/images/cards/telephone.jpg',
        year: 1876,
    }

export const abrahamLincoln =
    {
        category: categories.people,
        description: 'Abraham Lincoln',
        image: '../assets/images/cards/abraham-lincoln.jpg',
        year: 1809,
    }


export const adolfHitler =
    {
        category: categories.people,
        description: 'Adolf Hitler',
        image: '../assets/images/cards/adolf-hitler.jpg',
        year: 1889,
    }

export const stephenHawking =
    {
        category: categories.people,
        description: 'Stephen Hawking',
        image: '../assets/images/cards/stephen-hawking-simon-kregar.jpg',
        year: 1942,
    }

export const jimiHendrix =
    {
        category: categories.people,
        description: 'Jimi Hendrix',
        image: '../assets/images/cards/jimi-hendrix.jpg',
        year: 1970,
    }

export const atari =
    {
        category: categories.historyEvents,
        description: 'Foundation of Atari',
        image: '../assets/images/cards/atari.jpg',
        year: 1972,
    }

export const cellularPhone =
    {
        category: categories.inventions,
        description: 'Cellular Phone',
        image: '../assets/images/cards/cellular_phone.jpg',
        year: 1973,
    }

export const christTheRedeemer =
    {
        category: categories.monunents,
        description: 'Christ The Redeemer',
        image: '../assets/images/cards/christ-the-redeemer.jpg',
        year: 1931,
    }

export const eiffelTower =
    {
        category: categories.monunents,
        description: 'Eiffel Tower',
        image: '../assets/images/cards/eiffel-tower.jpg',
        year: 1889,
    }

export const frenchRevolution =
    {
        category: categories.historyEvents,
        description: 'French Revolution',
        image: '../assets/images/cards/french-revolution.jpg',
        year: 1789,
    }

export const gramophone =
    {
        category: categories.inventions,
        description: 'Gramophone',
        image: '../assets/images/cards/gramophone.jpg',
        year: 1887,
    }

export const obelisk =
    {
        category: categories.monunents,
        description: 'Obelisk (Argentine)',
        image: '../assets/images/cards/obelisco.jpg',
        year: 1936,
    }

export const radio =
    {
        category: categories.inventions,
        description: 'Commercial Radio',
        image: '../assets/images/cards/radio.jpg',
        year: 1897,
    }

export const tajMahal =
    {
        category: categories.monunents,
        description: 'Taj Mahal',
        image: '../assets/images/cards/taj-mahal.jpg',
        year: 1653,
    }

export const theExorcist =
    {
        category: categories.artAndLiterature,
        description: 'The Exorcist',
        image: '../assets/images/cards/the_exorcist.jpg',
        year: 1973,
    }

export const theScream =
    {
        category: categories.artAndLiterature,
        description: 'The Scream',
        image: '../assets/images/cards/the-scream.jpg',
        year: 1893,
    }

export const theThreeStooges =
    {
        category: categories.artAndLiterature,
        description: 'The Three Stooges',
        image: '../assets/images/cards/the-three_stooges.jpg',
        year: 1922,
    }

export const twinTowersAttack =
    {
        category: categories.historyEvents,
        description: 'Twin Towers Attack',
        image: '../assets/images/cards/twin-towers-attack.jpg',
        year: 2001,
    }

export const worldWarTwo =
    {
        category: categories.historyEvents,
        description: 'World War 2',
        image: '../assets/images/cards/world-war-II.jpg',
        year: 1939,
    }

export const zorro =
    {
        category: categories.artAndLiterature,
        description: 'Zorro',
        image: '../assets/images/cards/zorro.jpg',
        year: 1957,
    }

export const titanic =
    {
        category: categories.historyEvents,
        description: 'The sinking of the titanic',
        image: '../assets/images/cards/titanic.jpg',
        year: 1912,
    }

export const television =
    {
        category: categories.inventions,
        description: 'Television',
        image: '../assets/images/cards/tv.jpg',
        year: 1926,
    }

export const cards = () => [
    beethoven,
    monaLisa,
    statueOfLiberty,
    discoveryOfAmerica,
    telephone,
    abrahamLincoln,
    adolfHitler,
    stephenHawking,
    jimiHendrix,
    atari,
    cellularPhone,
    christTheRedeemer,
    eiffelTower,
    frenchRevolution,
    gramophone,
    obelisk,
    radio,
    tajMahal,
    theExorcist,
    theScream,
    theThreeStooges,
    twinTowersAttack,
    worldWarTwo,
    zorro,
    titanic,
    television,
]

const loadStateOnCard = ({ category, description, image, year }) => (
    {
        key: generateCardKey(),
        category,
        description,
        image,
        year,
        flipped: false,
        selected: false,
        visible: true
    })

export const loadDeck = () => cards().map(card => loadStateOnCard(card))