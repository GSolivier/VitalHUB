import React from 'react'
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import { Column, Row, Spacing } from '../../components/Container'
import { AppAssets } from '../../assets/AppAssets'
import { TextSmall, TitleMedium } from '../../settings/AppFonts'
import { AppColors } from '../../settings/AppColors'
import SvgBell from '../../assets/icons/iconjs/bell'
import { TouchableOpacity } from 'react-native'
import { FlexPropertyValues } from '../../settings/AppEnums'

export const HeaderBox = styled(LinearGradient)`
    width: 100%;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    flex: 0.2;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 20px;
`

export const ProfileImage = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 5px;
`


export default function HomeHeader({ imagePath, name, onTapNotification }) {
    return (

        <HeaderBox colors={['#60BFC5', '#496BBA']} start={{ x: 0.2, y: 0.1 }} locations={[0.1, 1]}>

            <Row 
            alignItems={FlexPropertyValues.ALIGN_ITEMS.CENTER} 
            alignSelf={FlexPropertyValues.ALIGN_SELF.FLEX_END} 
            justifyContent={FlexPropertyValues.JUSTIFY_CONTENT.SPACE_BETWEEN} 
            width={'100%'}>
                <Row alignItems={FlexPropertyValues.ALIGN_ITEMS.CENTER}>
                    <ProfileImage source={imagePath} />
                    <Spacing width={10} />
                    <Column>
                        <TextSmall>Bem-vindo</TextSmall>
                        <TitleMedium size={16} color={AppColors.white}>{name}</TitleMedium>
                    </Column>
                </Row>
                <TouchableOpacity onPress={onTapNotification}><SvgBell /></TouchableOpacity>

            </Row>

        </HeaderBox>

    )
}