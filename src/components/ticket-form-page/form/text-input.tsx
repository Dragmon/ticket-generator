import { useId } from 'react'
import type { ComponentProps } from 'react'

export interface InputProps extends Omit<
  ComponentProps<'input'>,
  'className' | 'style'
> {
  label: string
  name: string
  placeholder: string
  type?: 'text' | 'email'
}

export const TextInput = ({ label, type = 'text', ...rest }: InputProps) => {
  const idInput = useId()
  return (
    <div className="flex flex-col">
      <label className="mb-3 text-xl" htmlFor={idInput}>
        {label}
      </label>
      <input
        type={type}
        {...rest}
        className="h-10 rounded-xl border border-neutral-300 bg-neutral-700/50 px-4 text-xl hover:bg-neutral-700"
        id={idInput}
      />
    </div>
  )
}
