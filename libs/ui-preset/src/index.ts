import { definePreset } from '@pandacss/dev'

import { recipes } from './recipes'
import { slotRecipes } from './slot-recipes'

export const MagePreset = definePreset({
  theme: {
    extend: {
      recipes: recipes,
      slotRecipes: slotRecipes
    }
  }
})

export default MagePreset
