import { type IconProps } from '../../types'

export const CheckIcon: React.FC<IconProps> = ({ width, height, strokeWidth }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-checks"
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
    <path d="m7 12 5 5L22 7M2 12l5 5m5-5 5-5" />
  </svg>
)
