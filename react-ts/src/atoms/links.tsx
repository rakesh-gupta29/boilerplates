import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface AnchorProps {
  to: string
  ariaLabel?: string
  title?: string
  children: ReactNode
  className?: string
}
interface ExternalAnchorProps extends AnchorProps {
  referrerPolicy?:
    | 'no-referrer'
    | 'no-referrer'
    | 'no-referrer-when-downgrade'
    | 'unsafe-url'
  rel?: 'author' | 'next' | 'alternate' | 'nofollow' | 'noopener'
  target?: '_blank' | '_top' | '_self' | '_parent'
}

interface MasterNavProps {
  withIcon: boolean
  showRightChevron: boolean
}
export function NavOption({
  to,
  ariaLabel,
  children,
  title,
  className,
}: AnchorProps) {
  return (
    <Link to={to} aria-label={ariaLabel} title={title} className={className}>
      {children}
    </Link>
  )
}

export function ExternalLink({
  to,
  ariaLabel,
  children,
  title,
  referrerPolicy = 'no-referrer-when-downgrade',
  rel = 'author',
  target = '_blank',
  className,
}: ExternalAnchorProps) {
  return (
    <a
      href={to}
      rel={rel}
      referrerPolicy={referrerPolicy}
      aria-label={ariaLabel}
      title={title}
      target={target}
      className={className}
    >
      {children}
    </a>
  )
}

export function MasterNav({
  to,
  ariaLabel,
  children,
  title,
  referrerPolicy = 'no-referrer-when-downgrade',
  rel = 'author',
  target = '_blank',
  withIcon = false,
  showRightChevron,
  className,
}: ExternalAnchorProps & MasterNavProps) {
  return (
    <a
      href={to}
      rel={rel}
      referrerPolicy={referrerPolicy}
      aria-label={ariaLabel}
      title={title}
      target={target}
      className={`${className} flex flex-nowrap font-normal gap-3  text-blue  group items-center rounded-md bg-white font-bold text-lg`}
    >
      {children}
    </a>
  )
}
