import React from 'react'
import { TextFieldProps as MuiTextFieldProps } from '@material-ui/core/TextField/TextField';
import MuiTextField from '@material-ui/core/TextField';
import { Control } from 'react-hook-form/dist/types/form'
import { Controller } from 'react-hook-form'

export type TextAreaProps = {
    name: string
    control: Control,
} & MuiTextFieldProps

const TextArea: React.FC<TextAreaProps> = ({
    name,
    control,
    error,
    helperText,
    ...props
}: TextAreaProps) => {
    return (
        <Controller
            name={name}
            control={control}
            as={
                <MuiTextField
                    {...props}
                    multiline={true}
                    error={error}
                    helperText={error ? helperText : ''}
                />
            }
        />
    )
}

export default TextArea