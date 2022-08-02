/** Dependencies */
import React from 'react'
import classnames from 'classnames';

/** Style */
import './Button.scss';

type Props = {
    title?: string;
    size?: 'large' | 'default' | 'small' | 'tiny'
    variant?: 'like' | 'addList'
    icon?: JSX.Element
    iconRight?: JSX.Element
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;


const ButtonGroup = ({ title, className, iconRight, size = 'default', variant = 'like', icon, ...props }: Props) => {

    const classNameListButtonSize: { [key: string]: boolean } = {
        'button-group__section--large': size === 'large',
        'button-group__section--default': size === 'default',
        'button-group__section--small': size === 'small',
        'button-group__section--tiny': size === 'tiny',

    }

    const classNameListButtonVariants: { [key: string]: boolean } = {
        'button-group__section--like , button-group--like': variant === 'like',
        'button-group__section--addlist': variant === 'addList'
    }



    return (
        <div className={classnames("button-group", classNameListButtonVariants)}>
            {icon && <div className={classnames("button-group__section", classNameListButtonSize, classNameListButtonVariants)}>
                {icon}
            </div>}

            <div className={classnames("button-group__section", classNameListButtonSize, classNameListButtonVariants)}>
                {title && <span className="button-group__title" >
                    {title}
                </span>}
                {iconRight && <div className={classnames("button-group__right-icon")}>
                    {iconRight}
                </div>}
            </div>



        </div>
    )
}

export default ButtonGroup