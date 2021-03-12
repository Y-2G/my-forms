import TextField, { TextFieldProps } from '.'
import { Meta, Story } from '@storybook/react/types-6-0'
import { useForm } from 'react-hook-form'

export default {
    title: 'Atoms/TextField',
    component: TextField,
    argTypes: {}
} as Meta

const Template: Story<TextFieldProps> = (args: TextFieldProps) => {
    const { control } = useForm();

    return (
        <TextField
            {...args}
            control={control}
        />
    )
}

export const Default = Template.bind({});
Default.args = {
    name: 'textField',
    label: 'Text Field',
    variant: 'outlined',
    fullWidth: true,
    disabled: false,
}