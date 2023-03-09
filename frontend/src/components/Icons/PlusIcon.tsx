import { type IconProps } from '../../types'

export const PlusIcon: React.FC<IconProps> = ({ width, height, strokeWidth }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-plus"
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
    <path d="M12 5v14M5 12h14" />
  </svg>
)
