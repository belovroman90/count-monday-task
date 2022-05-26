import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from 'react';

type DefaultButtonType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Button: FC<DefaultButtonType> = ({...restProps}) => {

    return (
        <div>
            <button
                {...restProps}
            >{restProps.children}</button>
        </div>
    );
};