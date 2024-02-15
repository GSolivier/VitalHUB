import React from 'react'
import styled from 'styled-components/native'
import { AppColors } from '../../settings/AppColors'
import { Column, Row, Spacing } from '../../components/Container'
import { TextBig, TextSmall, TitleMedium } from '../../settings/AppFonts'
import { FlexPropertyValues, HomeCardActionType, TextDecoration } from '../../settings/AppEnums'
import BlueClockSvg from '../../assets/icons/iconjs/blue-clock'
import { LinkButton } from '../../components/AppButton'
import translate from '../../locale'
import AppLocalizations from '../../settings/AppLocalizations'

export const CardBox = styled.View`
    width: 100%;
    elevation: 5px;
    padding: 11px 20px 11px 10px;
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
    background-color: ${({ actionCard = HomeCardActionType.scheduled }) => actionCard == HomeCardActionType.scheduled ? AppColors.lightGreen : AppColors.whiteGray};
`

export default function HomeCard({ imagePath, name, age, examType, schedule, actionType = HomeCardActionType.scheduled, actionTap }) {
    return (
        <CardBox>
            <Row justifyContent={FlexPropertyValues.JUSTIFY_CONTENT.SPACE_BETWEEN}>
                <Row>
                    <CardImage source={imagePath} />
                    <Spacing width={10} />
                    <Column justifyContent={FlexPropertyValues.JUSTIFY_CONTENT.SPACE_BETWEEN}>
                        <Column>
                            <TitleMedium size={16}>{name}</TitleMedium>
                            <Spacing width={5} />
                            <Row justifyContent={FlexPropertyValues.ALIGN_ITEMS.CENTER}>
                                <TextSmall>{age}</TextSmall>
                                <Spacing width={7} />
                                <TextSmall color={AppColors.grayV4}>•</TextSmall>
                                <Spacing width={7} />
                                <TextBig size={14}>{examType}</TextBig>
                            </Row>
                        </Column>
                        <SchedulesBox actionCard={actionType}>
                            <BlueClockSvg fill={actionType == HomeCardActionType.scheduled ? AppColors.lightBlue : AppColors.grayV1} />
                            <Spacing width={6} />
                            <TextBig color={actionType == HomeCardActionType.scheduled ? AppColors.lightBlue : AppColors.grayV1} size={14}>{schedule}</TextBig>
                        </SchedulesBox>
                    </Column>
                </Row>

                {
                actionType == HomeCardActionType.scheduled ?
                    (
                        <LinkButton
                            color={AppColors.red}
                            text={translate(AppLocalizations.cancel)}
                            textDecoration={TextDecoration.NONE}
                            alignSelf={FlexPropertyValues.ALIGN_SELF.FLEX_END}
                            onTap={actionTap}
                        />
                    )
                    :
                    actionType == HomeCardActionType.carriedOut ?
                        (
                            <LinkButton
                                color={AppColors.darkBlueV1}
                                text={translate(AppLocalizations.seeMedicalRecord)}
                                textDecoration={TextDecoration.NONE}
                                alignSelf={FlexPropertyValues.ALIGN_SELF.FLEX_END}
                                onTap={actionTap}
                            />
                        ) : 
                        (<Spacing />)}

            </Row>
        </CardBox>
    )
}