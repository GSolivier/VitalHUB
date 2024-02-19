
import React from 'react'
import { Dialog, DialogBox, DialogContainer } from './CancelExamDialog'
import { TextMedium, TitleMedium } from '../../../settings/AppFonts'
import { Spacing } from '../../../components/Container'
import AppButton, { LinkButton } from '../../../components/AppButton'
import { Flex, TextAlign, TextDecoration } from '../../../settings/AppEnums'
import translate from '../../../locale'
import styled from 'styled-components/native'

export const ImageModal = styled.Image`
    width: 100%;
    height: 40%;
    border-radius: 10px;
`

export default function SeeMedicalRecordDialog({ visible, onClose, appointment }) {
  return (
    <Dialog
    visible={visible}
    animationType="fade"
    presentationStyle='overFullScreen'
    transparent={true}
>
    <DialogContainer>
        <DialogBox>
        <ImageModal source={{uri: appointment.imagePath}}/>
        <Spacing height={20}/>
            <TitleMedium textAlign={TextAlign.center} size={20}>{appointment.name}</TitleMedium>
            <Spacing height={15} />
            <TextMedium textAlign={TextAlign.center}>{appointment.age} anos</TextMedium>
            <Spacing height={30} />
            <AppButton textButton={"Inserir Prontuário".toUpperCase()} onTap={() => console.log(appointment)} />
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