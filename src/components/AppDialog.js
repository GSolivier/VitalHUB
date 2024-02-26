import React from 'react'
import styled from 'styled-components/native'
import { AppColors } from '../settings/AppColors'
import { Flex } from '../settings/AppEnums'

export const Dialog = styled.Modal`
`

export const DialogContainer = styled.View`
    justify-content: ${({ justifyContentContainer = Flex.justifyContent.center, isFaded = false }) => isFaded ? Flex.justifyContent.flexEnd : justifyContentContainer};
    flex: 1;
    background-color: rgba(0,0,0,0.5);
    padding: ${({ padding = 30 }) => `${padding}px`};
`

export const DialogBox = styled.View`
    padding: 27px;
    background-color: ${AppColors.white};
    border-radius: 10px;
    flex: ${({ flex = '0 1 auto' }) => flex};
    justify-content: ${({ justifyContentBox = Flex.justifyContent.center }) => justifyContentBox};
    align-items: ${({alignItemsBox = Flex.alignItems.center}) => alignItemsBox};
`

export default function AppDialog({
    visible, onClose, children, animationType = "fade", justifyContentContainer, justifyContentBox, flex, padding, isFaded
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
                justifyContent={justifyContentContainer}
                isFaded={isFaded}
            >
                <DialogBox justifyContentBox={justifyContentBox} flex={flex}>
                    {children}
                </DialogBox>
            </DialogContainer>
        </Dialog>
    )
}