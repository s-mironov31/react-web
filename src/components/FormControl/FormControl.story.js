import React from 'react'
import FormControl from './FormControl'

module.exports = ({ storiesOf, action }) => {
  return storiesOf('FormControl', module)
    .add('input', () => {
      return <FormControl type="text" required />
    })
    .add('textarea', () => {
      return <FormControl textarea />
    })

}
