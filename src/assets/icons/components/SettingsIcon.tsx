import * as React from "react"

type Props = {
    color?: string
}

const SettingsIcon = ({ color }: Props) => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.685 10.135 19.63 9.76a1.145 1.145 0 0 1-.65-1.572l.48-1.011a1.98 1.98 0 0 0-2.637-2.638l-1.011.481a1.146 1.146 0 0 1-1.571-.652l-.375-1.054a1.98 1.98 0 0 0-3.73 0L9.76 4.37a1.146 1.146 0 0 1-1.57.651l-1.012-.48a1.98 1.98 0 0 0-2.637 2.637l.48 1.01a1.146 1.146 0 0 1-.65 1.573l-1.055.375a1.98 1.98 0 0 0 0 3.73l1.055.374a1.145 1.145 0 0 1 .65 1.571l-.48 1.011a1.98 1.98 0 0 0 2.637 2.638l1.011-.48a1.144 1.144 0 0 1 1.571.65l.375 1.055a1.98 1.98 0 0 0 3.73 0l.376-1.055a1.145 1.145 0 0 1 1.57-.65l1.012.48a1.98 1.98 0 0 0 2.637-2.638l-.48-1.01a1.145 1.145 0 0 1 .65-1.572l1.055-.376a1.98 1.98 0 0 0 0-3.73Zm-8.684 5.852a4.109 4.109 0 0 1-3.702-2.454A4.011 4.011 0 0 1 10.466 8.3a4.057 4.057 0 0 1 5.235 2.167 4.011 4.011 0 0 1-2.167 5.234c-.486.2-1.008.298-1.534.287Z"
            fill={color || "#fff"}
        />
    </svg>
)

export default SettingsIcon

