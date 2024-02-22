import React from 'react'
import styled from 'styled-components/native'
import { AppColors } from '../settings/AppColors'
import { Flex } from '../settings/AppEnums'

export const Dialog = styled.Modal`
`

export const DialogContainer = styled.View`
    justify-content: ${({justifyContent = Flex.justifyContent.center}) => justifyContent};
    flex: 1;
    background-color: rgba(0,0,0,0.5);
    padding: ${({padding = 30}) => `${padding}px`};
`

export const DialogBox = styled.View`
    padding: 27px;
    background-color: ${AppColors.white};
    border-radius: 10px;
    flex: ${({flex = '0 1 auto'}) => flex};
    justify-content: ${({justifyContent = Flex.justifyContent.center}) => justifyContent};
`

export default function AppDialog({
    visible, onClose, children, animationType = "fade", justifyContent, flex, padding
}) {
    return (
        <Dialog
        visible={visible}
        animationType={animationType}
        transparent={true}
        onRequestClose={() => onClose}
        >
            <DialogContainer
            padding={padding}
            justifyContent={justifyContent}
            >
                <DialogBox justifyContent={justifyContent} flex={flex}>
                    {children}
                </DialogBox>
            </DialogContainer>
        </Dialog>
    )
}