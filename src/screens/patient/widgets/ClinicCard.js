import React from 'react'
import styled from 'styled-components/native'
import { Row, Spacing } from '../../../components/Container'
import { TextBig, TitleMedium } from '../../../settings/AppFonts'
import SvgIcon, { Icon } from '../../../assets/icons/Icons'
import { AppColors } from '../../../settings/AppColors'
import { Flex } from '../../../settings/AppEnums'

export const ClinicCardBox = styled.TouchableOpacity`
    width: 100%;
    elevation: ${({selected = false}) => selected  ? '0px' : '5px'};;
    padding: 18px;
    background-color: ${AppColors.white};
    border-radius: 5px;
    border-width: ${({selected  = false}) => selected  ? '2px' : '0px'};
    border-color: ${({selected  = false}) => selected  ? AppColors.secondary : AppColors.white};
`

export const DayBox = styled.View`
    padding: 4px 13px 4px 13px;
    background-color: ${AppColors.lightGreen};
    border-radius: 5px;
    flex-direction: row;
`

export default function ClinicCard({selected, item, onTap}) {

    if(!item){
        return null;
    }

    return (
        <ClinicCardBox
        selected={selected.id == item.id}
        onPress={onTap}
        activeOpacity={0.9}
        >
            <Row width={'100%'} justifyContent={Flex.justifyContent.spaceBetween}>
                <TitleMedium size={16}>{item.name}</TitleMedium>
                <Row>
                    <SvgIcon name={Icon.star} color={AppColors.yellow} />
                    <Spacing width={2} />
                    <TextBig color={AppColors.yellow}>{item.rating}</TextBig>
                </Row>
            </Row>
            <Spacing height={10}/>
            <Row width={'100%'} justifyContent={Flex.justifyContent.spaceBetween}>
                <TextBig size={14}>{item.local}</TextBig>
                <DayBox>
                    <SvgIcon name={Icon.calendar} color={AppColors.primary}/>
                    <Spacing width={5} />
                    <TextBig size={14} color={AppColors.primary}>{item.schedule}</TextBig>
                </DayBox>
            </Row>
        </ClinicCardBox>
    )
}