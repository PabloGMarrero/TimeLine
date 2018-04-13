import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import * as cardsModule from '../cards/cards'
import { RockPaperScissors } from '../components/rock-paper-scissors/rock-paper-scissors';

storiesOf('Rock-Paper-Scissors', module).add('Rock-paper-scissors selection', () => <RockPaperScissors> </RockPaperScissors>)