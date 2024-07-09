import { text } from '@template/ui-panda/recipes'
import { ReactNode } from 'react'

import {
  Text as TextBase,
  type TextProps as TextBaseProps
} from '@/components/base/Text'

export type TextProps = TextBaseProps

export const Text = ({ className, ...props }: TextProps): ReactNode => {
  return <TextBase className={className || text()} {...props} />
}
