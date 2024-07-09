'use client'

import { AriaButtonProps, useButton } from '@react-aria/button'
import { useObjectRef } from '@react-aria/utils'
import { panda } from '@template/ui-panda/jsx'
import { ComponentPropsWithRef, ReactNode } from 'react'

export type ButtonProps = ComponentPropsWithRef<'button'> &
  AriaButtonProps<'button'> & {
    children: ReactNode
  }

export const Button = ({
  className,
  children,
  ref,
  ...props
}: ButtonProps): ReactNode => {
  const { buttonProps } = useButton(
    props,
    // @ts-expect-error react-aria needs to update their types
    useObjectRef(ref)
  )

  return (
    <panda.button className={className} {...buttonProps}>
      {children}
    </panda.button>
  )
}
