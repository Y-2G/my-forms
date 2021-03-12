import TextArea, { TextAreaProps } from '.'
import { Meta, Story } from '@storybook/react/types-6-0'
import { useForm } from 'react-hook-form'

export default {
    title: 'Atoms/TextArea',
    component: TextArea,
    argTypes: {}
} as Meta

const Template: Story<TextAreaProps> = (args: TextAreaProps) => {
    const { control } = useForm();

    return (
        <TextArea
            {...args}
            control={control}
        />
    )
}

export const Default = Template.bind({});
Default.args = {
    name: 'textArea',
    label: 'Text Area',
    rows: 3,
    variant: 'outlined',
    fullWidth: true,
    disabled: false,
    error: false,
    helperText: 'This field is required'
}