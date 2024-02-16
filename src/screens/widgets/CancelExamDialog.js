import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Dialog from "react-native-dialog";
import AppButton, { LinkButton } from '../../components/AppButton';
import { Flex, TextAlign, TextDecoration } from '../../settings/AppEnums';
import { Spacing } from '../../components/Container';
import styled from 'styled-components/native';
import { TextMedium, TitleMedium } from '../../settings/AppFonts';
import translate from '../../locale';
import AppLocalizations from '../../settings/AppLocalizations';

export const DialogBox = styled.View`
    padding: 17px;
    border-radius: 10px;
`

export const DialogContainer = styled(Dialog.Container)`
    
    
`

export default function CancelExamDialog({ visible, onClose }) {

    return (
        <DialogContainer visible={visible} onBackdropPress={onClose}>
            <DialogBox>
                <TitleMedium textAlign={TextAlign.center} size={20}>{translate(AppLocalizations.cancelExam)}</TitleMedium>
                <Spacing height={15} />
                <TextMedium textAlign={TextAlign.center}>{translate(AppLocalizations.cancelExamHint)}</TextMedium>
                <Spacing height={30} />
                <AppButton textButton={translate(AppLocalizations.confirm).toUpperCase()} />
                <Spacing height={30} />
                <LinkButton
                    text={translate(AppLocalizations.cancel)}
                    textDecoration={TextDecoration.underline}
                    alignSelf={Flex.alignSelf.center}
                    onTap={onClose}
                />
            </DialogBox>
        </DialogContainer>
    )
}