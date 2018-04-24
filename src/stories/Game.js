import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Game } from '../components/game/Game';

storiesOf('Game', module).add('Gameplay', () => <Game></Game>)