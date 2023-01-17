import { Link } from 'react-router-dom'
import { ReactNode } from 'react'
import chevronDown from 'assets/icons/chevron-down.svg'
import chevronRight from 'assets/icons/chevron-right.svg'
import { Image } from 'atoms/image'
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
const NavOption = ({
  to,
  ariaLabel,
  children,
  title,
  className,
}: AnchorProps) => {
  return (
    <Link to={to} aria-label={ariaLabel} title={title} className={className}>
      {children}
    </Link>
  )
}

const ExternalLink = ({
  to,
  ariaLabel,
  children,
  title,
  referrerPolicy = 'no-referrer-when-downgrade',
  rel = 'author',
  target = '_blank',
}: ExternalAnchorProps) => {
  return (
    <a
      href={to}
      rel={rel}
      referrerPolicy={referrerPolicy}
      aria-label={ariaLabel}
      title={title}
      target={target}
    >
      {children}
    </a>
  )
}

const MasterNav = ({
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
}: ExternalAnchorProps & MasterNavProps) => {
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
      {withIcon && !showRightChevron && (
        <Image
          className="h-8 w-8 group-hover:scale-105 duration-300 transition-all ease-in-out"
          src={chevronDown}
          alt="chevron down"
        />
      )}
      {withIcon && showRightChevron && (
        <Image
          className="h-8 w-8 group-hover:scale-105 duration-300 transition-all ease-in-out"
          src={chevronRight}
          alt="chevron down"
        />
      )}
    </a>
  )
}
export { NavOption, ExternalLink, MasterNav }
