import React, { ButtonHTMLAttributes, FC } from 'react';
import css from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    className?: string;
}

export const Button: FC<ButtonProps> = ({ children, className, ...otherProps }) => {
    return (
        <button className={css.root} {...otherProps}>
            {children}
        </button>
    );
};
