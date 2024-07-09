import { select } from '@template/ui-panda/recipes'
import { ReactNode, useId } from 'react'

import { Label } from '@/components/base/Label'
import {
  Select as SelectBase,
  type SelectOptionProps as SelectOptionPropsBase,
  type SelectProps as SelectPropsBase
} from '@/components/base/Select'

export type SelectOptionProps = SelectOptionPropsBase
export type SelectProps = SelectPropsBase & {
  label: string
}

export const Select = ({ label, ...props }: SelectProps): ReactNode => {
  const id = useId()
  const styles = select()
  return (
    <>
      <Label id={id} className={styles.label}>
        {label}
      </Label>
      <SelectBase id={id} className={styles.select} {...props} />
    </>
  )
}
