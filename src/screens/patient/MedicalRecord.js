import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Container, Row, Spacing } from '../../components/Container'
import styled from 'styled-components/native'
import { useRoute } from '@react-navigation/native'
import { TextMedium, TextSmall, TitleMedium } from '../../settings/AppFonts'
import { Flex, TextDecoration } from '../../settings/AppEnums'
import AppInput from '../../components/AppInput'
import translate from '../../locale'
import AppLocalizations from '../../settings/AppLocalizations'
import AppButton, { LinkButton } from '../../components/AppButton'
import { AppColors } from '../../settings/AppColors'
import SvgIcon, { Icon } from '../../assets/icons/Icons'
import { pop } from '../../settings/routes/RouteActions'

const HeaderImage = styled.Image`
    width: 100%;
    height: 40%;
`

const ButtonContainer = styled.View`
    flex: 0.5;
    justify-content: center;
`

const Line = styled.View`
    width: 100%;
    height: 2px;
    background-color: ${AppColors.grayV4};
`

export default function MedicalRecord({ navigation }) {
    const { params } = useRoute();
    return (
        <>
            <HeaderImage source={{ uri: params.appointment.imagePath }} />
            <ScrollView>
                <Container justifyContent={Flex.justifyContent.flexStart}>
                    <TitleMedium>{params.appointment.name}</TitleMedium>
                    <Spacing width={6} />
                    <Row>
                        <TextSmall>{params.appointment.specialty}</TextSmall>
                        <Spacing width={20} />
                        <TextSmall>CRM-{params.appointment.crm}</TextSmall>
                    </Row>
                    <Spacing height={28} />
                    <AppInput
                        isEditable={false}
                        hasLabel={true}
                        lable={translate(AppLocalizations.appointDescriptionLabel)}
                        isTextArea={true}
                        textValue={'O paciente possuí uma infecção noouvido. Necessário repouse de 2 diase acompanhamento médico constante'} />
                    <Spacing height={20} />
                    <AppInput
                        isEditable={false}
                        hasLabel={true}
                        lable={translate(AppLocalizations.patientDiagnosisLabel)}
                        textValue={'Infecção no ouvido'} />
                    <Spacing height={20} />
                    <AppInput
                        isEditable={false}
                        hasLabel={true}
                        lable={translate(AppLocalizations.appointDescriptionLabel)}
                        isTextArea={true}
                        textValue={'O paciente possuí uma infecção noouvido. Necessário repouse de 2 diase acompanhamento médico constante'} />
                    <Spacing height={20} />
                    <AppInput
                        isEditable={false}
                        hasLabel={true}
                        lable={translate(AppLocalizations.appointDescriptionLabel)}
                        isTextArea={true}
                        textValue={'Nenhuma foto informada'} />
                    <Spacing height={10} />
                    <Row>
                        <ButtonContainer>
                            <AppButton
                                textButton={translate(AppLocalizations.send)}
                                mainColor={AppColors.primary}
                                SvgIcon={<SvgIcon name={Icon.cameraPlus} color={AppColors.white} />}

                            />
                        </ButtonContainer>
                        <ButtonContainer>
                            <LinkButton
                                textDecoration={TextDecoration.none}
                                text={translate(AppLocalizations.cancel)}
                                color={AppColors.red} />
                        </ButtonContainer>
                    </Row>
                    <Spacing height={20} />
                    <Line />
                    <Spacing height={20} />
                    <AppInput
                        isEditable={false}
                        lable={translate(AppLocalizations.appointDescriptionLabel)}
                        isTextArea={true}
                        textValue={'Resultado do exame de sangue: tudo normal'} />
                    <Spacing height={30} />
                    <LinkButton text={translate(AppLocalizations.back)} onTap={() => pop(navigation)}/>
                </Container>
            </ScrollView>
        </>
    )
}