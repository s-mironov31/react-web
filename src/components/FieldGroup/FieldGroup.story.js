import React from 'react'
import FieldGroup from './FieldGroup'

module.exports = ({ storiesOf, action }) => {
  return storiesOf('FieldGroup', module)
    .add('input', () => {
      return <FieldGroup id="name" label="Ваше имя" type="text" required />
    })
    .add('textarea', () => {
      return <FieldGroup id="textarea" label="Суть Вашего обращения" textarea required />
    })
}
