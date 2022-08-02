import React from 'react'

type Props = {
    color?: string
}

const DownArrowIcon = ({ color }: Props) => {
    return (
        <svg width="20" height="18" viewBox="0 0 20 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.7072 15.293C12.3167 15.6836 11.6835 15.6836 11.293 15.293L7.70721 11.7073C7.07724 11.0773 7.52341 10.0002 8.41431 10.0002L15.5859 10.0002C16.4768 10.0002 16.923 11.0773 16.293 11.7073L12.7072 15.293Z" fill={color || "#8C8C8C"} />
        </svg>

    )
}

export default DownArrowIcon