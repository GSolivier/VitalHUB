import React from 'react'
import { useRoute } from '@react-navigation/native';
import styled from 'styled-components/native';
import { Container, Row, Spacing } from '../../components/Container';
import { TextSmall, TitleMedium } from '../../settings/AppFonts';
import { Flex, TextAlign } from '../../settings/AppEnums';
import AppInput from '../../components/AppInput';
import { ScrollView } from 'react-native';
import AppButton, { LinkButton } from '../../components/AppButton';
import { pop } from '../../settings/RouteActions';

export const HeaderImage = styled.Image`
    width: 100%;
    height: 30%;
`

export default function InsertMedicalRecord({navigation}) {
    const { params } = useRoute();
    return (
        <>
        <HeaderImage source={{ uri: params.appointment.imagePath }} />
        <ScrollView>
            <Container justifyContent={Flex.justifyContent.flexStart}>
                <TitleMedium>{params.appointment.name}</TitleMedium>
                <Spacing height={10}/>
                <Row justifyContent={Flex.justifyContent.spaceAround} width={'90%'}>

                    <TextSmall textAlign={TextAlign.center}>{params.appointment.age} anos</TextSmall>
                    <TextSmall textAlign={TextAlign.center}>{params.appointment.email}</TextSmall>
                </Row>
                <Spacing height={24}/>
                <AppInput hasLabel={true} lable='Descrição da consulta' hint={'Descrição'} isTextArea={true} onEdit={() => {}}/>
                <Spacing height={20}/>
                <AppInput hasLabel={true} lable='Diagnóstico do paciente' hint={'Diagnóstico'} onEdit={() => {}}/>
                <Spacing height={20}/>
                <AppInput hasLabel={true} lable='Prescrição médica' hint={'Prescrição médica'} isTextArea={true} onEdit={() => {}}/>
                <Spacing height={30}/>
                <AppButton textButton={'SALVAR'}/>
                <Spacing height={30}/>
                <LinkButton text={'Cancelar'} onTap={() => pop(navigation)}/>
            </Container>
        </ScrollView>
        </>
    )
}