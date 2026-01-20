/**
 * Brand Icons Component
 * Custom styled icons following the Misaki-inspired design system
 * All icons use the signature pink-blue gradient and maintain visual consistency
 */

import { SVGProps } from 'react'

export interface BrandIconProps extends Omit<SVGProps<SVGSVGElement>, 'size'> {
  size?: number
}

const gradientId = 'brandGradient'
const commonClasses = 'transition-all duration-300'

// Base SVG component with gradient definition
const BaseSVG = ({ children, size = 24, className = '', ...props }: BrandIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${commonClasses} ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF4D94" />
        <stop offset="100%" stopColor="#3399FF" />
      </linearGradient>
    </defs>
    {children}
  </svg>
)

/**
 * Logo Icon - Main brand identifier
 */
export const LogoIcon = (props: BrandIconProps) => (
  <BaseSVG {...props}>
    <path
      d="M6 5Q7 5 7.5 6L10.5 14Q11 16 12 16Q13 16 13.5 14L16.5 6Q17 5 18 5"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="11" r="1.5" fill={`url(#${gradientId})`} />
  </BaseSVG>
)

/**
 * External Link Icon - For outbound links
 */
export const ExternalLinkIcon = (props: BrandIconProps) => (
  <BaseSVG {...props}>
    <path
      d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <polyline
      points="15 3 21 3 21 9"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="10"
      y1="14"
      x2="21"
      y2="3"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </BaseSVG>
)

/**
 * Arrow Right Icon - For CTAs and navigation
 */
export const ArrowRightIcon = (props: BrandIconProps) => (
  <BaseSVG {...props}>
    <line
      x1="5"
      y1="12"
      x2="19"
      y2="12"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <polyline
      points="12 5 19 12 12 19"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseSVG>
)

/**
 * Chevron Down Icon - For accordions and dropdowns
 */
export const ChevronDownIcon = (props: BrandIconProps) => (
  <BaseSVG {...props}>
    <polyline
      points="6 9 12 15 18 9"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseSVG>
)

/**
 * Menu Icon - For mobile navigation
 */
export const MenuIcon = (props: BrandIconProps) => (
  <BaseSVG {...props}>
    <line
      x1="3"
      y1="6"
      x2="21"
      y2="6"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="3"
      y1="12"
      x2="21"
      y2="12"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="3"
      y1="18"
      x2="21"
      y2="18"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </BaseSVG>
)

/**
 * Close Icon - For modals and menus
 */
export const CloseIcon = (props: BrandIconProps) => (
  <BaseSVG {...props}>
    <line
      x1="18"
      y1="6"
      x2="6"
      y2="18"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="6"
      y1="6"
      x2="18"
      y2="18"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </BaseSVG>
)

/**
 * Sun Icon - For light mode toggle
 */
export const SunIcon = (props: BrandIconProps) => (
  <BaseSVG {...props}>
    <circle
      cx="12"
      cy="12"
      r="5"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
    />
    <line
      x1="12"
      y1="1"
      x2="12"
      y2="3"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="12"
      y1="21"
      x2="12"
      y2="23"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="4.22"
      y1="4.22"
      x2="5.64"
      y2="5.64"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="18.36"
      y1="18.36"
      x2="19.78"
      y2="19.78"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="1"
      y1="12"
      x2="3"
      y2="12"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="21"
      y1="12"
      x2="23"
      y2="12"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="4.22"
      y1="19.78"
      x2="5.64"
      y2="18.36"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="18.36"
      y1="5.64"
      x2="19.78"
      y2="4.22"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </BaseSVG>
)

/**
 * Moon Icon - For dark mode toggle
 */
export const MoonIcon = (props: BrandIconProps) => (
  <BaseSVG {...props}>
    <path
      d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseSVG>
)

/**
 * GitHub Icon - Social link
 */
export const GitHubIcon = (props: BrandIconProps) => (
  <BaseSVG {...props}>
    <path
      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseSVG>
)

/**
 * LinkedIn Icon - Social link
 */
export const LinkedInIcon = (props: BrandIconProps) => (
  <BaseSVG {...props}>
    <path
      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="2"
      y="9"
      width="4"
      height="12"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="4"
      cy="4"
      r="2"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseSVG>
)

/**
 * Mail Icon - Contact
 */
export const MailIcon = (props: BrandIconProps) => (
  <BaseSVG {...props}>
    <path
      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <polyline
      points="22,6 12,13 2,6"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseSVG>
)

/**
 * Code Icon - For tech/projects
 */
export const CodeIcon = (props: BrandIconProps) => (
  <BaseSVG {...props}>
    <polyline
      points="16 18 22 12 16 6"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <polyline
      points="8 6 2 12 8 18"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseSVG>
)

/**
 * Folder Icon - For projects
 */
export const FolderIcon = (props: BrandIconProps) => (
  <BaseSVG {...props}>
    <path
      d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseSVG>
)

/**
 * Calendar Icon - For blog/notes
 */
export const CalendarIcon = (props: BrandIconProps) => (
  <BaseSVG {...props}>
    <rect
      x="3"
      y="4"
      width="18"
      height="18"
      rx="2"
      ry="2"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="16"
      y1="2"
      x2="16"
      y2="6"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="8"
      y1="2"
      x2="8"
      y2="6"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="3"
      y1="10"
      x2="21"
      y2="10"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </BaseSVG>
)

/**
 * User Icon - For about section
 */
export const UserIcon = (props: BrandIconProps) => (
  <BaseSVG {...props}>
    <path
      d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="12"
      cy="7"
      r="4"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseSVG>
)

/**
 |* Download Icon - For resume
 */
export const DownloadIcon = (props: BrandIconProps) => (
  <BaseSVG {...props}>
    <path
      d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <polyline
      points="7 10 12 15 17 10"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="12"
      y1="15"
      x2="12"
      y2="3"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </BaseSVG>
)

/**
 * Star Icon - For skills/features
 */
export const StarIcon = (props: BrandIconProps) => (
  <BaseSVG {...props}>
    <polygon
      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      stroke={`url(#${gradientId})`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseSVG>
)
