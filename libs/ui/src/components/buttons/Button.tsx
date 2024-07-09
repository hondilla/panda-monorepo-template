import { button } from '@template/ui-panda/recipes'
import { ReactNode } from 'react'

import {
  Button as BaseButton,
  type ButtonProps as BaseButtonProps
} from '@/components/base/Button'

export type ButtonProps = BaseButtonProps

export const Button = ({
  children,
  className,
  ...props
}: ButtonProps): ReactNode => {
  return (
    <BaseButton className={className || button()} {...props}>
      {children}
    </BaseButton>
  )
}
