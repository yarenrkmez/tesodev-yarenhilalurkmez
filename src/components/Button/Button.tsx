/** Dependencies */
import React from 'react'
import classnames from 'classnames';

/** Style */
import './Button.scss';

type Props = {
    title?: string;
    titleClassName?: string;
    variant?: 'primary' | 'secondary' | 'primaryBordered'
    | 'variant' | 'defaultBordered' | 'primaryGhost'
    | 'defaultGhost' | 'success' | 'danger' | 'defaultSolid'
    size?: 'large' | 'default' | 'small' | 'tiny'
    icon?: JSX.Element
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button = ({ title, titleClassName, className, variant = 'primary', size = 'default', icon, ...props }: Props) => {

    const classNameListButtonVariant: { [key: string]: boolean } = {
        'app-button--primary': variant === 'primary',
        'app-button--variant': variant === 'variant',
        'app-button--secondary': variant === 'secondary',
        'app-button--bordered-primary': variant === 'primaryBordered',
        'app-button--bordered-default': variant === 'defaultBordered',
        'app-button--ghost-primary': variant === 'primaryGhost',
        'app-button--ghost-default': variant === 'defaultGhost',
        'app-button--success': variant === 'success',
        'app-button--danger': variant === 'danger',
        'app-button--solid-default': variant === 'defaultSolid'

    }

    const classNameListButtonSize: { [key: string]: boolean } = {
        'app-button--large': size === 'large',
        'app-button--default': size === 'default',
        'app-button--small': size === 'small',
        'app-button--tiny': size === 'tiny',

    }

    return (
        <button className={classnames('app-button', classNameListButtonVariant, classNameListButtonSize, className)} {...props}>
            {title && <span className={classnames('app-button__title', titleClassName, icon && 'app-button__title--right')}>
                {title}
            </span>}
            {icon && icon}
        </button>
    )
}

export default Button