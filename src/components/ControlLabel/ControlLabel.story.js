import React from 'react'
import ControlLabel from './ControlLabel'

module.exports = ({ storiesOf, action }) => {
  return storiesOf('ControlLabel', module)
    .add('label', () => {
      return <ControlLabel styleName="field-label">label</ControlLabel>
    })

}
