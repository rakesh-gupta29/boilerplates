import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const sizeMap = {
  small: 'text-sm',
  base: 'text-base',
  large: ' text-base md:text-lg',
  xl: ' text-base md:text-xl',
  xxl: ' text-xl xl:text-2xl',
  '3xl': ' text-xl md:text-2xl xl:text-3xl',
}

const colorMap = {
  dark: 'text-black',
  light: 'text-white',
}
type MasterAnchorProps = {
  size?: keyof typeof sizeMap
  text: string
  href: string
  target?: '_self' | '_blank'
}

export function TextAnchor({
  text,
  target,
  href,
  color = 'dark',
  size = 'base',
  ...rest
}: MasterAnchorProps & { color?: 'dark' | 'light' }) {
  const sizeClass: string = sizeMap[size]
  const colorClass: string = colorMap[color]
  return (
    <Link
      target={target}
      to={href}
      {...rest}
      className={`${sizeClass}  ${colorClass}`}
    >
      {text}
    </Link>
  )
}
export function TextNavAnchor({
  text,
  target,
  href,
  color = 'dark',
  size = 'base',
  ...rest
}: MasterAnchorProps & { color?: 'dark' | 'light' }) {
  const sizeClass: string = sizeMap[size]
  const colorClass: string = colorMap[color]
  return (
    <NavLink
      target={target}
      to={href}
      {...rest}
      className={(navData) => {
        return `${navData.isActive ? '' : ''}  ${sizeClass}  ${colorClass}`
      }}
    >
      {text}
    </NavLink>
  )
}

export function MasterAnchor({
  text,
  size = 'base',
  href,
  target,
  ...rest
}: MasterAnchorProps) {
  const sizeClass: string = sizeMap[size]
  return (
    <Link to={href} target={target} {...rest} className={`${sizeClass} `}>
      {text}
    </Link>
  )
}
