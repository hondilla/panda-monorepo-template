import { LabelAriaProps, useLabel } from '@react-aria/label'
import { panda } from '@template/ui-panda/jsx'
import { ComponentPropsWithRef, ReactNode } from 'react'

export type LabelProps = ComponentPropsWithRef<'label'> & LabelAriaProps

export const Label = ({
  id,
  className,
  children,
  ...props
}: LabelProps): ReactNode => {
  const { labelProps } = useLabel(props)
  return (
    <panda.label htmlFor={id} className={className} {...labelProps}>
      {children}
    </panda.label>
  )
}
