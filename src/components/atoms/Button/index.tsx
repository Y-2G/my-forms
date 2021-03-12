import React from 'react'
import { ButtonProps as MuiButtonProps } from '@material-ui/core/Button/Button';
import MuiButton from '@material-ui/core/Button';
import { Control } from 'react-hook-form/dist/types/form'
import { Controller } from 'react-hook-form'

export type ButtonProps = {
    name: string
    label: string
    control: Control
} & MuiButtonProps

const Button: React.FC<ButtonProps> = ({
    name,
    label,
    control,
    ...props
}: ButtonProps) => {
    return (
        <Controller
            name={name}
            control={control}
            as={
                <MuiButton {...props}>
                    {label}
                </MuiButton>
            }
        />
    )
}

export default Button