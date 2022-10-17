import { TextInput, TextInputInputProps, TextInputRootProps } from "./TextInput";
import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'

export default {
    title: 'Components/textInput',
    component: TextInput.Root,
    args: {
        children: (
            [
                <TextInput.Icon>
                    <Envelope/>
                </TextInput.Icon>,
                <TextInput.Input placeholder="Digite Alguma Coisa"/>
            
            ]
        ),
    },
    
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
    }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
    args: {
        children: <TextInput.Input placeholder="Digite Alguma Coisa"/>
    }
}
