/** Dependencies */
import React from 'react'
import classnames from 'classnames';

/** Style */
import './Button.scss';

type Props = {
    title?: string;
    titleClassName?: string;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button = ({ title, titleClassName, className, ...props }: Props) => {
    return (
        <button className={classnames('app-button', className)} {...props} >
            <span className={classnames('app-button__title', titleClassName)}>{title}</span>
        </button>
    )
}

export default Button