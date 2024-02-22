import React from 'react'
import { useRoute } from '@react-navigation/native';
import styled from 'styled-components/native';
import { Container, Row, Spacing } from '../../components/Container';
import { TextSmall, TitleMedium } from '../../settings/AppFonts';
import { Flex, TextAlign } from '../../settings/AppEnums';
import AppInput from '../../components/AppInput';
import { ScrollView } from 'react-native';
import AppButton, { LinkButton } from '../../components/AppButton';
import { pop } from '../../settings/routes/RouteActions';
import translate from '../../locale';
import AppLocalizations from '../../settings/AppLocalizations';

export const HeaderImage = styled.Image`
    width: 100%;
    height: 30%;
`

export default function InsertMedicalRecord({ navigation }) {
    const { params } = useRoute();
    return (
        <>
            <HeaderImage source={{ uri: params.appointment.imagePath }} />
            <ScrollView>
                <Container justifyContent={Flex.justifyContent.flexStart}>
                    <TitleMedium>{params.appointment.name}</TitleMedium>
                    <Spacing height={10} />
                    <Row justifyContent={Flex.justifyContent.spaceAround} width={'85%'}>

                        <TextSmall textAlign={TextAlign.center}>{params.appointment.age} {translate(AppLocalizations.yearsOld)}</TextSmall>
                        <TextSmall textAlign={TextAlign.center}>{params.appointment.email}</TextSmall>
                    </Row>
                    <Spacing height={24} />
                    <AppInput hasLabel={true} lable={translate(AppLocalizations.appointDescriptionLabel)} hint={translate(AppLocalizations.descriptionHint)} isTextArea={true} onEdit={() => { }} />
                    <Spacing height={20} />
                    <AppInput hasLabel={true} lable={translate(AppLocalizations.patientDiagnosisLabel)} hint={translate(AppLocalizations.diagnosisLabel)} onEdit={() => { }} />
                    <Spacing height={20} />
                    <AppInput hasLabel={true} lable={translate(AppLocalizations.doctorPrescriptionLabel)} hint={translate(AppLocalizations.doctorPrescriptionLabel)} isTextArea={true} onEdit={() => { }} />
                    <Spacing height={30} />
                    <AppButton textButton={translate(AppLocalizations.saveButton).toUpperCase()} />
                    <Spacing height={30} />
                    <AppButton textButton={translate(AppLocalizations.editButton).toUpperCase()} isDisabled={true}/>
                    <Spacing height={25} />
                    <LinkButton text={translate(AppLocalizations.cancel)} onTap={() => pop(navigation)} />
                </Container>
            </ScrollView>
        </>
    )
}