
import React from 'react'
import { TextSmall, TitleMedium } from '../../../settings/AppFonts'
import { Row, Spacing } from '../../../components/Container'
import AppButton, { LinkButton } from '../../../components/AppButton'
import { Flex, TextAlign, TextDecoration } from '../../../settings/AppEnums'
import translate from '../../../locale'
import styled from 'styled-components/native'
import AppDialog from '../../../components/AppDialog'
import { RouteKeys, push } from '../../../settings/RouteActions'
import AppLocalizations from '../../../settings/AppLocalizations'

export const ImageModal = styled.Image`
    width: 100%;
    height: 40%;
    border-radius: 10px;
`

export default function SeeMedicalRecordDialog({ visible, onClose, appointment, navigation }) {

    if (!appointment) {
        return null;
    }
    const handleInsertMedicalRecord = () => {
        push(navigation, RouteKeys.insertMedicalRecordScreen, { appointment: appointment });
        onClose(); // Fechar o modal imediatamente após o push
    };
    return (
        <AppDialog
            visible={visible}
            flex={0.6}
        >
            <ImageModal source={{ uri: appointment.imagePath }} />
            <Spacing height={20} />
            <TitleMedium textAlign={TextAlign.center} size={20}>{appointment.name}</TitleMedium>
            <Spacing height={15} />
            <Row justifyContent={Flex.justifyContent.spaceAround}>

                <TextSmall textAlign={TextAlign.center}>{appointment.age} {translate(AppLocalizations.yearsOld)}</TextSmall>
                <TextSmall textAlign={TextAlign.center}>{appointment.email}</TextSmall>
            </Row>
            <Spacing height={30} />
            <AppButton textButton={translate(AppLocalizations.insertMedicalRecordButton).toUpperCase()}
                onTap={handleInsertMedicalRecord}/>
            <Spacing height={30} />
            <LinkButton
                text={translate(AppLocalizations.cancel)}
                textDecoration={TextDecoration.underline}
                alignSelf={Flex.alignSelf.center}
                onTap={onClose}
            />
        </AppDialog>
    )
}