/** Dependencies */
import React from 'react'
import classnames from 'classnames';

/** Style */
import './Button.scss';

type Props = {
    size?: 'large' | 'default' | 'small' | 'tiny'
    icon: JSX.Element
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const ButtonCircle = ({ className, size = 'default', icon, ...props }: Props) => {

    const classNameListButtonSize: { [key: string]: boolean } = {
        'circle-button--large': size === 'large',
        'circle-button--default': size === 'default',
        'circle-button--small': size === 'small',
        'circle-button--tiny': size === 'tiny',
    }

    return (
        <button className={classnames('circle-button', classNameListButtonSize, className)} {...props}>
            {icon && icon}
        </button>
    )
}

export default ButtonCircle