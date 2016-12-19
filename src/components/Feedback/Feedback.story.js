import React from 'react'
import Feedback from './Feedback'

module.exports = ({ storiesOf, action }) => {
  return storiesOf('Feedback', module)
    .add('default', () => {
      return <Feedback />
    })
}
