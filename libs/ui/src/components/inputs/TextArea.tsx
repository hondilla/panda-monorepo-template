import { textarea } from '@template/ui-panda/recipes'
import { ReactNode } from 'react'

import {
  TextArea as TextAreaBase,
  type TextAreaProps as TextAreaBaseProps
} from '@/components/base/TextArea'

export type TextAreaProps = TextAreaBaseProps

export const TextArea = ({ className, ...props }: TextAreaProps): ReactNode => {
  return <TextAreaBase className={className || textarea()} {...props} />
}
