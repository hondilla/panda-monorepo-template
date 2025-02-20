import { defineSlotRecipe } from '@pandacss/dev'

export const select = defineSlotRecipe({
  className: 'select',
  slots: ['label', 'select'],
  base: {
    label: {},
    select: {}
  }
})
