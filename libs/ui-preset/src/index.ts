import { definePreset } from '@pandacss/dev'

import { buttons } from './recipes/button'

export const MagePreset = definePreset({
  theme: {
    extend: {
      recipes: buttons
    }
  }
})

export default MagePreset
