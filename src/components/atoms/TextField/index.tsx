import React from 'react'
import { TextFieldProps as MuiTextFieldProps } from '@material-ui/core/TextField/TextField';
import MuiTextField from '@material-ui/core/TextField';
import { Control } from 'react-hook-form/dist/types/form'
import { Controller } from 'react-hook-form'

export type TextFieldProps = {
    name: string
    control: Control,
} & MuiTextFieldProps

const TextField: React.FC<TextFieldProps> = ({
    name,
    control,
    ...props
}: TextFieldProps) => {
    return (
        <Controller
            name={name}
            control={control}
            as={<MuiTextField {...props} />}
        />
    )
}

export default TextField