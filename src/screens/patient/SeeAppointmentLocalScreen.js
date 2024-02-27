import React from 'react'
import { Container, Row, Spacing } from '../../components/Container'
import MapView from 'react-native-maps'
import styled from 'styled-components'
import { TextSemiBold, TitleSemiBold } from '../../settings/AppFonts'
import { Flex } from '../../settings/AppEnums'
import AppInput from '../../components/AppInput'
import translate from '../../locale'
import AppLocalizations from '../../settings/AppLocalizations'
import AppButton from '../../components/AppButton'
import { pop } from '../../settings/routes/RouteActions'

const Map = styled(MapView)`
  width: 100%;
  flex: 1;
`

const InputContainer = styled.View`
    flex: 0.5;
`

export default function SeeAppointmentLocalScreen({navigation}) {
  return (
    <>
      <Map
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <Container justifyContent={Flex.justifyContent.flexStart}>
        <Spacing height={10} />
        <TitleSemiBold size={20}>Clinica Natureh</TitleSemiBold>
        <Spacing height={8} />
        <TextSemiBold size={14}>São Paulo - SP</TextSemiBold>
        <Spacing height={20} />
        <AppInput isEditable={false} hasLabel={true} lable={translate(AppLocalizations.adress)} hint={'Rua Vicenso Silva, 987'} />
        <Spacing height={24} />
        <Row justifyContent={Flex.justifyContent.spaceBetween} width={'100%'}>
          <InputContainer>
            <AppInput isEditable={false} hasLabel={true} lable={translate(AppLocalizations.number)} hint={'578'} />
          </InputContainer>
          <Spacing width={32} />
          <InputContainer>
            <AppInput isEditable={false} hasLabel={true} lable={translate(AppLocalizations.neighborhood)} hint={'Moema-SP'} />
          </InputContainer>
        </Row>
        <Spacing height={50} />
        <AppButton textButton={translate(AppLocalizations.back).toUpperCase()} onTap={() => pop(navigation)}/>      
        </Container>
    </>
  )
}