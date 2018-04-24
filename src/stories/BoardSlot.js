import React from 'react'

import { storiesOf } from '@storybook/react'
import { BoardSlot } from '../components/board-slot/Board-Slot';

storiesOf('Board Slot', module).add('Slot view', () => (<BoardSlot cardSlot={{ card: undefined, index: 0 }}
    isShowingCardChoices={true} placeCardHandler={(index) => console.log("handled")}></BoardSlot>))