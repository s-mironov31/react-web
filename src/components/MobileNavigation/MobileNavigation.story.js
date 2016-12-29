import React from 'react'
import MobileNavigation from './MobileNavigation'

module.exports = ({ storiesOf, action }) => {
  return storiesOf('MobileNavigation', module)
    .add('default', () => {
      return <MobileNavigation />
    })
}
