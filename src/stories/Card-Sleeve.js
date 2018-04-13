import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { CardSleeve } from '../components/card-sleeve/Card-Sleeve';

storiesOf('Card Sleeve', module).add('Sleeve', () => (<CardSleeve></CardSleeve>))