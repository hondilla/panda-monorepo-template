import { AriaTextFieldOptions, useTextField } from '@react-aria/textfield'
import { useObjectRef } from '@react-aria/utils'
import { panda } from '@template/ui-panda/jsx'
import { ComponentPropsWithRef, ReactNode } from 'react'

export type TextAreaProps = ComponentPropsWithRef<'textarea'> &
  AriaTextFieldOptions<'textarea'>

export const TextArea = ({
  className,
  ref,
  ...props
}: TextAreaProps): ReactNode => {
  const { inputProps } = useTextField(
    { ...props, inputElementType: 'textarea' },
    // @ts-expect-error react-aria needs to update their types
    useObjectRef(ref)
  )
  // @ts-expect-error react-aria needs to update their types
  return <panda.textarea className={className} {...inputProps} />
}
