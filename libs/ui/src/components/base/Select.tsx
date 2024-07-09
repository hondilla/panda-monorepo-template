import {
  Select as HeadlessSelect,
  type SelectProps as SelectPropsBase
} from '@headlessui/react'
import { ReactNode } from 'react'

export type SelectOptionProps = {
  label: string
  value: string
}
const Option = ({ label, value }: SelectOptionProps): ReactNode => (
  <option value={value} key={value}>
    {label}
  </option>
)

export type SelectProps = SelectPropsBase & {
  children: (props: typeof Option) => ReactNode
}
export const Select = ({ children, ...props }: SelectProps): ReactNode => {
  return <HeadlessSelect {...props}>{children(Option)}</HeadlessSelect>
}
