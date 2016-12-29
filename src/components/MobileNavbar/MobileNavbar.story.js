import React from 'react'
import MobileNavbar from './MobileNavbar'

module.exports = ({ storiesOf, action }) => {
  return storiesOf('MobileNavbar', module)
    .add('default', () => {
      return <MobileNavbar />
    })
}
