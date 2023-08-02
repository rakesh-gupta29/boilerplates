import React from 'react'

const sizeMap = {
  small: 'text-sm',
  base: 'text-base',
  large: ' text-base md:text-lg',
  xl: ' text-base md:text-xl',
  xxl: ' text-xl xl:text-2xl',
  '3xl': ' text-xl md:text-2xl xl:text-3xl',
}

type MasterBtnProps<T extends 'submit' | 'button'> = {
  text: string
  size: keyof typeof sizeMap
  type: T
  isDisabled?: boolean
  onClick?: T extends 'submit' ? never : () => void
}

export function MasterBtn<T extends 'submit' | 'button'>({
  type,
  text,
  size,
  isDisabled,
  ...rest
}: MasterBtnProps<T>) {
  const sizeClass: string = sizeMap[size]
  return (
    <button
      disabled={isDisabled}
      {...rest}
      type={type === 'button' ? 'button' : 'submit'}
      className={`  ${sizeClass} `}
    >
      {text}
    </button>
  )
}
