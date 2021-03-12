import Button, { ButtonProps } from '.'
import { Meta, Story } from '@storybook/react/types-6-0'
import { useForm } from 'react-hook-form'

export default {
    title: 'Atoms/Button',
    component: Button,
    argTypes: {}
} as Meta

const Template: Story<ButtonProps> = (args: ButtonProps) => {
    const { control } = useForm();

    return (
        <Button
            {...args}
            control={control}
        />
    )
}

export const Default = Template.bind({});
Default.args = {
    name: 'button',
    label: 'Button',
    href: '',
    size: 'medium',
    color: 'primary',
    variant: 'contained',
    disabled: false,
    fullWidth: false,
}