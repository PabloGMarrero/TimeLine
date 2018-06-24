import { generate as generateCardKey } from 'shortid'
import {
    isEmpty,
    head,
    lte,
    equals,
    tail,
    length,
    update,
    indexOf,
    map,
    find,
    and
} from 'ramda'

import beethovenImage from '../../assets/images/cards/beethoven.jpg'
import monaLisaImage from '../../assets/images/cards/mona-lisa.jpg'
import statueOfLibertyImage from '../../assets/images/cards/The-Statue-Of-Liberty.jpg'
import discoveryOfAmericaImage from '../../assets/images/cards/columbus-discovers-america.jpg'
import telephoneImage from '../../assets/images/cards/telephone.jpg'
import abrahamLincolnImage from '../../assets/images/cards/abraham-lincoln.jpg'
import adolfHitlerImage from '../../assets/images/cards/adolf-hitler.jpg'
import stephenHawkingImage from '../../assets/images/cards/stephen-hawking-simon-kregar.jpg'
import jimiHendrixImage from '../../assets/images/cards/jimi-hendrix.jpg'
import atariImage from '../../assets/images/cards/atari.jpg'
import cellularPhoneImage from '../../assets/images/cards/cellular_phone.jpg'
import christTheRedeemerImage from '../../assets/images/cards/christ-the-redeemer.jpg'
import eiffelTowerImage from '../../assets/images/cards/eiffel-tower.jpg'
import frenchRevolutionImage from '../../assets/images/cards/french-revolution.jpg'
import gramophoneImage from '../../assets/images/cards/gramophone.jpg'
import obeliskImage from '../../assets/images/cards/obelisco.jpg'
import radioImage from '../../assets/images/cards/radio.jpg'
import tajMahalImage from '../../assets/images/cards/taj-mahal.jpg'
import theExorcistImage from '../../assets/images/cards/the_exorcist.jpg'
import theScreamImage from '../../assets/images/cards/the-scream.jpg'
import theThreeStoogesImage from '../../assets/images/cards/the-three_stooges.jpg'
import twinTowersAttackImage from '../../assets/images/cards/twin-towers-attack.jpg'
import worldWarTwoImage from '../../assets/images/cards/world-war-II.jpg'
import zorroImage from '../../assets/images/cards/zorro.jpg'
import titanicImage from '../../assets/images/cards/titanic.jpg'
import televisionImage from '../../assets/images/cards/tv.jpg'

export const categories = {
    people: 'p',
    artAndLiterature: 'A',
    monunents: 'M',
    historyEvents: 'H',
    inventions: 'I'
}

export const beethoven = {
    category: categories.people,
    description: 'Ludwig van Beethoven',
    image: beethovenImage,
    year: 1770
}

export const monaLisa = {
    category: categories.artAndLiterature,
    description: 'Mona Lisa',
    image: monaLisaImage,
    year: 1503
}

export const statueOfLiberty = {
    category: categories.monunents,
    description: 'Statue of Liberty',
    image: statueOfLibertyImage,
    year: 1886
}

export const discoveryOfAmerica = {
    category: categories.historyEvents,
    description: 'Discovery of America',
    image: discoveryOfAmericaImage,
    year: 1492
}

export const telephone = {
    category: categories.inventions,
    description: 'Telephone',
    image: telephoneImage,
    year: 1876
}

export const abrahamLincoln = {
    category: categories.people,
    description: 'Abraham Lincoln',
    image: abrahamLincolnImage,
    year: 1809
}

export const adolfHitler = {
    category: categories.people,
    description: 'Adolf Hitler',
    image: adolfHitlerImage,
    year: 1889
}

export const stephenHawking = {
    category: categories.people,
    description: 'Stephen Hawking',
    image: stephenHawkingImage,
    year: 1942
}

export const jimiHendrix = {
    category: categories.people,
    description: 'Jimi Hendrix',
    image: jimiHendrixImage,
    year: 1970
}

export const atari = {
    category: categories.historyEvents,
    description: 'Foundation of Atari',
    image: atariImage,
    year: 1972
}

export const cellularPhone = {
    category: categories.inventions,
    description: 'Cellular Phone',
    image: cellularPhoneImage,
    year: 1973
}

export const christTheRedeemer = {
    category: categories.monunents,
    description: 'Christ The Redeemer',
    image: christTheRedeemerImage,
    year: 1931
}

export const eiffelTower = {
    category: categories.monunents,
    description: 'Eiffel Tower',
    image: eiffelTowerImage,
    year: 1889
}

export const frenchRevolution = {
    category: categories.historyEvents,
    description: 'French Revolution',
    image: frenchRevolutionImage,
    year: 1789
}

export const gramophone = {
    category: categories.inventions,
    description: 'Gramophone',
    image: gramophoneImage,
    year: 1887
}

export const obelisk = {
    category: categories.monunents,
    description: 'Obelisk (Argentine)',
    image: obeliskImage,
    year: 1936
}

export const radio = {
    category: categories.inventions,
    description: 'Commercial Radio',
    image: radioImage,
    year: 1897
}

export const tajMahal = {
    category: categories.monunents,
    description: 'Taj Mahal',
    image: tajMahalImage,
    year: 1653
}

export const theExorcist = {
    category: categories.artAndLiterature,
    description: 'The Exorcist',
    image: theExorcistImage,
    year: 1973
}

export const theScream = {
    category: categories.artAndLiterature,
    description: 'The Scream',
    image: theScreamImage,
    year: 1893
}

export const theThreeStooges = {
    category: categories.artAndLiterature,
    description: 'The Three Stooges',
    image: theThreeStoogesImage,
    year: 1922
}

export const twinTowersAttack = {
    category: categories.historyEvents,
    description: 'Twin Towers Attack',
    image: twinTowersAttackImage,
    year: 2001
}

export const worldWarTwo = {
    category: categories.historyEvents,
    description: 'World War 2',
    image: worldWarTwoImage,
    year: 1939
}

export const zorro = {
    category: categories.artAndLiterature,
    description: 'Zorro',
    image: zorroImage,
    year: 1957
}

export const titanic = {
    category: categories.historyEvents,
    description: 'The sinking of the titanic',
    image: titanicImage,
    year: 1912
}

export const television = {
    category: categories.inventions,
    description: 'Television',
    image: televisionImage,
    year: 1926
}

export const cards = () =>
    [
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
        television
    ].map(card => ({
        ...card,
        key: generateCardKey(),
        flipped: false,
        selected: false,
        visible: false
    }))

const updateProps = (card, props) => ({ ...card, ...props })

const updateCard = (card, props, cards) =>
    update(indexOf(card, cards), updateProps(card, props), cards)

export const keyOf = ({ key }) => key

export const isSelected = ({ selected }) => selected

export const isRevelated = ({ visible }) => visible

export const reveal = (card, cards) =>
    updateCard(card, { visible: true }, cards)

export const deselectCards = cards =>
    map(_ => ({ ..._, selected: false }), cards)

export const selectCard = (card, cards) =>
    updateCard(card, { selected: true }, deselectCards(cards))

export const selectedCard = cards => find(_ => isSelected(_), cards)

export const findCard = (cardkey, cards) =>
    find(_ => equals(keyOf(_), cardkey), cards)

export const flipCard = (card, cards) =>
    updateCard(findCard(keyOf(card), cards), { flipped: true }, cards)

const evaluateCards = ({ year: left }, { year: right }) => lte(left, right)

export const timelineHasAValidPeriod = cards =>
    isEmpty(cards)
        ? true
        : equals(size(cards), 1)
            ? true
            : and(
                  evaluateCards(head(cards), head(tail(cards))),
                  timelineHasAValidPeriod(tail(cards))
              )

export const size = cards => length(cards)
