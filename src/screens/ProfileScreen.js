import React from 'react'
import { Container, Row, Spacing } from '../components/Container'
import styled from 'styled-components/native'
import { USER_LOGGED } from '../settings/AppUtils'
import { TextMedium, TitleSemiBold } from '../settings/AppFonts'
import { AppColors } from '../settings/AppColors'
import AppInput from '../components/AppInput'
import { Flex, JustifyContent } from '../settings/AppEnums'
import translate from '../locale'
import AppLocalizations from '../settings/AppLocalizations'
import { ScrollView } from 'react-native'
import AppButton from '../components/AppButton'

const HeaderImage = styled.Image`
    width: 100%;
    height: 40%;
`

const InfoBox = styled.View`
    width: 80%;
    padding: 25px;
    elevation: 5px;
    align-items: center;
    background-color: ${AppColors.white};
    border-radius: 5px;
    position: absolute;
    z-index: 9999;
    top: 270px;
    align-self: center;
`

const InputContainer = styled.View`
    flex: 0.5;
`

export default function ProfileScreen({ user, navigation }) {
    return (
        <>
            <HeaderImage source={{ uri: USER_LOGGED.imagePath }}/>            
            <InfoBox>
                <TitleSemiBold size={16}>{USER_LOGGED.name}</TitleSemiBold>
                <Spacing height={10} />
                <TextMedium size={14}>{USER_LOGGED.email}</TextMedium>
            </InfoBox>
            <ScrollView>
                <Container justifyContent={Flex.flexStart}>
                    <Spacing height={80} />
                    <AppInput
                        isEditable={false}
                        hasLabel={true}
                        lable={translate(AppLocalizations.dateOfBirth)}
                        textValue={USER_LOGGED.date} />
                    <Spacing height={24} />
                    <AppInput
                        isEditable={false}
                        hasLabel={true}
                        lable={translate(AppLocalizations.cpf)}
                        textValue={'426********'} />
                    <Spacing height={20} />
                    <AppInput
                        isEditable={false}
                        hasLabel={true}
                        lable={translate(AppLocalizations.adress)}
                        textValue={'Rua Vicenzo da Silva, 181'} />
                    <Spacing height={24} />
                    <Row justifyContent={Flex.spaceBetween} width={'100%'}>
                        <InputContainer>
                            <AppInput isEditable={false} hasLabel={true} lable={translate(AppLocalizations.cep)} hint={'09586-754'} />
                        </InputContainer>
                        <Spacing width={32} />
                        <InputContainer>
                            <AppInput isEditable={false} hasLabel={true} lable={translate(AppLocalizations.city)} hint={'Moema-SP'} />
                        </InputContainer>
                    </Row>
                    <Spacing height={32} />
                    <AppButton textButton={translate(AppLocalizations.saveButton).toUpperCase()}/>
                    <Spacing height={30} />
                    <AppButton textButton={translate(AppLocalizations.editButton).toUpperCase()}/>
                    <Spacing height={30} />
                    <AppButton textButton={translate(AppLocalizations.logOut).toUpperCase()} mainColor={AppColors.red}/>
                </Container>
            </ScrollView>
        </>
    )
}