import React from 'react'
import AppButton, { LinkButton } from '../../../components/AppButton';
import { Flex, TextAlign, TextDecoration } from '../../../settings/AppEnums';
import { Spacing } from '../../../components/Container';
import styled from 'styled-components/native';
import { TextMedium, TitleMedium } from '../../../settings/AppFonts';
import translate from '../../../locale';
import AppLocalizations from '../../../settings/AppLocalizations';
import { AppColors } from '../../../settings/AppColors';

export const DialogBox = styled.View`
    padding: 27px;
    background-color: ${AppColors.white};
    border-radius: 10px;
    justify-content: space-evenly;
`

export const Dialog = styled.Modal`
`

export const DialogContainer = styled.View`
    justify-content: center;
    flex: 1;
    background-color: rgba(0,0,0,0.5);
    padding: 30px;
`

export default function CancelExamDialog({ visible, onClose, appointment }) {

    return (
        <Dialog
            visible={visible}
            animationType="fade"
            presentationStyle='overFullScreen'
            transparent={true}
        >
            <DialogContainer>
                <DialogBox>
                    <TitleMedium textAlign={TextAlign.center} size={20}>{translate(AppLocalizations.cancelExam)}</TitleMedium>
                    <Spacing height={15} />
                    <TextMedium textAlign={TextAlign.center}>{translate(AppLocalizations.cancelExamHint)}</TextMedium>
                    <Spacing height={30} />
                    <AppButton textButton={translate(AppLocalizations.confirm).toUpperCase()} onTap={() => console.log(appointment)} />
                    <Spacing height={30} />
                    <LinkButton
                        text={translate(AppLocalizations.cancel)}
                        textDecoration={TextDecoration.underline}
                        alignSelf={Flex.alignSelf.center}
                        onTap={onClose}
                    />
                </DialogBox>
            </DialogContainer>
        </Dialog>
    )
}