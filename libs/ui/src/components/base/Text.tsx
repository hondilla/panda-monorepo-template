import { AriaTextFieldOptions, useTextField } from '@react-aria/textfield'
import { useObjectRef } from '@react-aria/utils'
import { panda } from '@template/ui-panda/jsx'
import { ComponentPropsWithRef, ReactNode } from 'react'

export type TextProps = ComponentPropsWithRef<'input'> &
  AriaTextFieldOptions<'input'>

export const Text = ({ className, ref, ...props }: TextProps): ReactNode => {
  const { inputProps } = useTextField(
    { ...props, inputElementType: 'input' },
    // @ts-expect-error react-aria needs to update their types
    useObjectRef(ref)
  )
  // @ts-expect-error react-aria needs to update their types
  return <panda.input className={className} {...inputProps} />
}
