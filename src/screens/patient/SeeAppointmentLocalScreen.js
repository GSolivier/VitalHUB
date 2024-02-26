import React from 'react'
import { Container, Row, Spacing } from '../../components/Container'
import MapView from 'react-native-maps'
import styled from 'styled-components'
import { TextBig, TextSmall, TitleBig } from '../../settings/AppFonts'
import { Flex } from '../../settings/AppEnums'
import AppInput from '../../components/AppInput'
import translate from '../../locale'
import AppLocalizations from '../../settings/AppLocalizations'

const Map = styled(MapView)`
  width: 100%;
  flex: 1;
`

const InputContainer = styled.View`
    flex: 0.4;
`

export default function SeeAppointmentLocalScreen() {
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
        <TitleBig size={20}>Clinica Natureh</TitleBig>
        <Spacing height={8} />
        <TextBig size={14}>São Paulo - SP</TextBig>
        <Spacing height={20} />
        <AppInput isEditable={false} hasLabel={true} lable={translate(AppLocalizations.adress)} hint={'Rua Vicenso Silva, 987'} />
        <Spacing height={24} />
        <Row justifyContent={Flex.justifyContent.spaceBetween} width={'100%'}>
        <InputContainer>
          <AppInput isEditable={false} hasLabel={true} lable={translate(AppLocalizations.number)} />

        </InputContainer>
        <InputContainer>

          <AppInput isEditable={false} hasLabel={true} lable={translate(AppLocalizations.neighborhood)} />

        </InputContainer>
        </Row>
      </Container>
    </>
  )
}