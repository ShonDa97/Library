import { type IconProps } from '../../types'

export const StatsIcon: React.FC<IconProps> = ({ width, height, strokeWidth }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-device-desktop-analytics"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    strokeWidth={strokeWidth}
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M0 0h24v24H0z" stroke="none" />
    <path d="M3 5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM7 20h10M9 16v4M15 16v4M9 12V8M12 12v-1M15 12v-2M12 12v-1" />
  </svg>
)
