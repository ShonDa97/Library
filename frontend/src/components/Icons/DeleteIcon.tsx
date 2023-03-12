import { type IconProps } from '../../types'

export const DeleteIcon: React.FC<IconProps> = ({ width, height, strokeWidth }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-square-rounded-minus"
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
    <path d="M9 12h6M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9z" />
  </svg>
)
