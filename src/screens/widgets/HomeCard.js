import React from 'react'
import styled from 'styled-components/native'
import { AppColors } from '../../settings/AppColors'
import { Column, Row, Spacing } from '../../components/Container'
import { TextBig, TextSmall, TitleMedium } from '../../settings/AppFonts'
import { Flex, HomeCardActionType, TextDecoration } from '../../settings/AppEnums'
import { LinkButton } from '../../components/AppButton'
import translate from '../../locale'
import AppLocalizations from '../../settings/AppLocalizations'
import { Icon, SvgIcon } from '../../assets/icons/Icons'

export const CardBox = styled.View`
    width: 100%;
    elevation: 5px;
    padding: 5px 10px 11px 5px;
    border-radius: 5px;
    background-color: ${AppColors.white};
`

export const CardImage = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 5px;
`

export const SchedulesBox = styled.View`
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 4px;
    width: 100px;
    background-color: ${({ actionCard = HomeCardActionType.scheduled }) => actionCard == HomeCardActionType.scheduled ? AppColors.lightGreen : AppColors.whiteGray};
`

export default function HomeCard({ imagePath, name, age, examType, schedule, actionType = HomeCardActionType.scheduled, actionTap }) {
    return (
        <CardBox>
            <Row justifyContent={Flex.justifyContent.spaceBetween}>
                <Row>
                    <CardImage source={imagePath} />
                    <Spacing width={10} />
                    <Column justifyContent={Flex.justifyContent.spaceBetween}>
                        <Column>
                            <TitleMedium size={16}>{name}</TitleMedium>
                            <Spacing width={5} />
                            <Row justifyContent={Flex.alignItems.flexStart} alignItems={Flex.alignItems.center}>
                                <TextSmall>{`${age} anos`}</TextSmall>
                                <Spacing width={7} />
                                <TextSmall color={AppColors.grayV4}>•</TextSmall>
                                <Spacing width={7} />
                                <TextBig size={14}>{examType}</TextBig>
                            </Row>
                        </Column>
                        <SchedulesBox actionCard={actionType}>
                            <SvgIcon name={Icon.clock} size={15} color={actionType == HomeCardActionType.scheduled ? AppColors.lightBlue : AppColors.grayV1} />
                            <Spacing width={6} />
                            <TextBig alignSelf={Flex.alignSelf.center} color={actionType == HomeCardActionType.scheduled ? AppColors.lightBlue : AppColors.grayV1} size={14}>{schedule}</TextBig>
                        </SchedulesBox>
                    </Column>
                </Row>

                {
                actionType == HomeCardActionType.scheduled ?
                    (
                        <LinkButton
                            color={AppColors.red}
                            text={translate(AppLocalizations.cancel)}
                            textDecoration={TextDecoration.none}
                            alignSelf={Flex.alignItems.flexEnd}
                            
                            onTap={actionTap}
                        />
                    )
                    :
                    actionType == HomeCardActionType.carriedOut ?
                        (
                            <LinkButton
                                color={AppColors.darkBlueV1}
                                text={translate(AppLocalizations.seeMedicalRecord)}
                                textDecoration={TextDecoration.none}
                                alignSelf={Flex.alignSelf.flexEnd}
                                justifySelf={Flex.justifyContent.flexEnd}
                                onTap={actionTap}
                            />
                        ) : 
                        (<Spacing />)}

            </Row>
        </CardBox>
    )
}