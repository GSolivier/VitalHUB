import React from 'react'
import styled from 'styled-components/native'
import { AppColors } from '../../../settings/AppColors'
import { Column, Row, Spacing } from '../../../components/Container'
import { TextSemiBold, TextRegular, TitleSemiBold } from '../../../settings/AppFonts'
import { Flex, HomeCardActionType, TextDecoration } from '../../../settings/AppEnums'
import { LinkButton } from '../../../components/AppButton'
import translate from '../../../locale'
import AppLocalizations from '../../../settings/AppLocalizations'
import SvgIcon, { Icon } from '../../../assets/icons/Icons'

const CardBox = styled.View`
    width: 100%;
    elevation: 5px;
    padding: 11px 20px 11px 10px;
    border-radius: 5px;
    background-color: ${AppColors.white};
`

const CardImage = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 5px;
`

const SchedulesBox = styled.View`
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 4px;
    width: 100px;
    border-radius: 5px;
    background-color: ${({ actionCard = HomeCardActionType.scheduled }) => actionCard == HomeCardActionType.scheduled ? AppColors.lightGreen : AppColors.whiteGray};
`

export default function HomeCard({ imagePath, name, age, examType, schedule, actionType = HomeCardActionType.scheduled, actionTap }) {
    return (
        <CardBox>
            <Row justifyContent={Flex.justifyContent.spaceBetween}>
                <Row>
                    <CardImage source={{uri: imagePath}} />
                    <Spacing width={10} />
                    <Column justifyContent={Flex.justifyContent.spaceBetween}>
                        <Column>
                            <TitleSemiBold size={16}>{name}</TitleSemiBold>
                            <Spacing width={5} />
                            <Row justifyContent={Flex.alignItems.flexStart} alignItems={Flex.alignItems.center}>
                                <TextRegular size={14}>{age} {translate(AppLocalizations.yearsOld)}</TextRegular>
                                <Spacing width={7} />
                                <TextSemiBold color={AppColors.grayV6}>•</TextSemiBold>
                                <Spacing width={7} />
                                <TextSemiBold color={AppColors.grayV4} size={14}>{examType}</TextSemiBold>
                            </Row>
                        </Column>

                        <Row width={'81%'} justifyContent={Flex.justifyContent.spaceBetween} alignItems={Flex.alignItems.center}>
                            <SchedulesBox actionCard={actionType}>
                                <SvgIcon name={Icon.clock} size={15} color={actionType == HomeCardActionType.scheduled ? AppColors.primary : AppColors.grayV1} />
                                <Spacing width={6} />
                                <TextSemiBold alignSelf={Flex.alignSelf.center} color={actionType == HomeCardActionType.scheduled ? AppColors.primary : AppColors.grayV1} size={14}>{schedule}</TextSemiBold>
                            </SchedulesBox>
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
                                                color={AppColors.secondaryV1}
                                                text={translate(AppLocalizations.seeMedicalRecord)}
                                                textDecoration={TextDecoration.none}
                                                alignSelf={Flex.alignSelf.flexEnd}
                                                justifySelf={Flex.justifyContent.flexEnd}
                                                size={12}
                                                onTap={actionTap}
                                            />
                                        ) :
                                        (<Spacing />)}

                        </Row>
                    </Column>
                </Row>
            </Row>
        </CardBox>
    )
}