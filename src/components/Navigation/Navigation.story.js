import React from 'react'
import Navigation from './Navigation'

module.exports = ({ storiesOf, action }) => {
  return storiesOf('Navigation', module)
    .add('default', () => {
      return <Navigation />
    })
}
