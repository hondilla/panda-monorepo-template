import { defineRecipe } from '@pandacss/dev'

export const buttons = {
  button: defineRecipe({
    className: 'mage-button',
    base: {
      color: 'black',
      backgroundColor: 'red'
    },
    variants: {
      primary: {
        solid: {
          backgroundColor: 'yellow',
          color: 'white'
        }
      }
    }
  })
}
