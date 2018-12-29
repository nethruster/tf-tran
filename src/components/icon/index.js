import { h } from 'preact'

import icons from 'icons'

export default function Icon({ name, size = '20', marginRight, color = 'var(--color-secondary)' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={`min-width: ${size}; min-height: ${size}`}
    >
      <path d={icons[name]} fill={color} />
    </svg>
  )
}
