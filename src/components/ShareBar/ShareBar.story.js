import React from 'react'
import ShareBar from './ShareBar'

module.exports = ({ storiesOf, action }) => {
  return storiesOf('ShareBar', module)
    .add('default', () => {
      return <ShareBar />
    })
}
