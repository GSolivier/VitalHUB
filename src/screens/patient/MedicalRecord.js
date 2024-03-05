import { ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Container, Row, Spacing } from '../../components/Container'
import styled from 'styled-components/native'
import { useRoute } from '@react-navigation/native'
import { TextMedium, TitleSemiBold } from '../../settings/AppFonts'
import { Flex, TextDecoration } from '../../settings/AppEnums'
import AppInput from '../../components/AppInput'
import t from '../../locale'
import AppLocalizations from '../../settings/AppLocalizations'
import AppButton, { LinkButton } from '../../components/AppButton'
import { AppColors } from '../../settings/AppColors'
import SvgIcon, { Icon } from '../../assets/icons/Icons'
import { RouteKeys, pop, push } from '../../settings/routes/RouteActions'
import PhotoSelector from './widgets/PhotoSelector'

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
    const [photoList, setPhotoList] = useState([])

    useEffect(() => {
        if (params.image) {

            setPhotoList([...photoList, params.image])
        }
    }, [params])

    return (
        <>
            <HeaderImage source={{ uri: params.appointment.imagePath }} />
            <ScrollView nestedScrollEnabled={true}>
                <Container justifyContent={Flex.flexStart}>
                    <TitleSemiBold>{params.appointment.name}</TitleSemiBold>
                    <Spacing width={6} />
                    <Row>
                        <TextMedium size={14}>{params.appointment.specialty}</TextMedium>
                        <Spacing width={20} />
                        <TextMedium size={14}>CRM-{params.appointment.crm}</TextMedium>
                    </Row>
                    <Spacing height={28} />
                    <AppInput
                        isEditable={false}
                        label={t(AppLocalizations.appointDescriptionLabel)}
                        isTextArea={true}
                        textValue={'O paciente possuí uma infecção noouvido. Necessário repouse de 2 diase acompanhamento médico constante'} />
                    <Spacing height={20} />
                    <AppInput
                        isEditable={false}
                        label={t(AppLocalizations.patientDiagnosisLabel)}
                        textValue={'Infecção no ouvido'} />
                    <Spacing height={20} />
                    <AppInput
                        isEditable={false}
                        label={t(AppLocalizations.appointDescriptionLabel)}
                        isTextArea={true}
                        textValue={'O paciente possuí uma infecção noouvido. Necessário repouse de 2 diase acompanhamento médico constante'} />
                    <Spacing height={20} />
                    <PhotoSelector
                        label={t(AppLocalizations.medicalExams)}

                        photoList={photoList}
                    />
                    <Spacing height={10} />
                    <Row>
                        <ButtonContainer>
                            <AppButton
                                textButton={t(AppLocalizations.send)}
                                mainColor={AppColors.primary}
                                SvgIcon={<SvgIcon name={Icon.cameraPlus} color={AppColors.white} />}
                                onTap={() => {
                                    push(
                                        navigation, RouteKeys.scanExamsScreen
                                    )
                                }}
                            />
                        </ButtonContainer>
                        <ButtonContainer>
                            <LinkButton
                                onTap={() => setPhotoList([])}
                                textDecoration={TextDecoration.none}
                                text={t(AppLocalizations.cancel)}
                                color={AppColors.red} />
                        </ButtonContainer>
                    </Row>
                    <Spacing height={20} />
                    <Line />
                    <Spacing height={20} />
                    <AppInput
                        isEditable={false}
                        label={t(AppLocalizations.appointDescriptionLabel)}
                        isTextArea={true}
                        textValue={'Resultado do exame de sangue: tudo normal'} />
                    <Spacing height={30} />
                    <LinkButton text={t(AppLocalizations.back)} onTap={() => pop(navigation)} />
                </Container>
            </ScrollView>
        </>
    )
}