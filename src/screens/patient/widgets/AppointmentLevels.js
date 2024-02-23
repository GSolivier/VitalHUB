import React from 'react'
import { Row, Spacing } from '../../../components/Container'
import { Flex, HomeCardActionType } from '../../../settings/AppEnums'
import AppButton from '../../../components/AppButton'
import AppLocalizations from '../../../settings/AppLocalizations'
import translate from '../../../locale'
import { AppColors } from '../../../settings/AppColors'
import { TextBig } from '../../../settings/AppFonts'

export default function AppointmentLevels({ selected, handleTabSelected, mainColor, label }) {
    return (
        <>
            <TextBig size={16}>{label}</TextBig>
            <Spacing height={10}/>
            <Row justifyContent={Flex.justifyContent.spaceBetween} width={'100%'}>

                <AppButton
                    isOutlined={selected !== HomeCardActionType.scheduled}
                    textButton={'Rotina'}
                    flex={1}
                    isCompact={true}
                    onTap={() => {
                        handleTabSelected(HomeCardActionType.scheduled)
                    }}
                    mainColor={mainColor}
                />

                <Spacing width={10} />

                <AppButton
                    isOutlined={selected !== HomeCardActionType.carriedOut}
                    textButton={'Exame'}
                    flex={1}
                    isCompact={true}
                    onTap={() => {
                        handleTabSelected(HomeCardActionType.carriedOut)
                    }}
                    mainColor={mainColor}
                />

                <Spacing width={10} />

                <AppButton
                    isOutlined={selected !== HomeCardActionType.canceled}
                    textButton={'Urgência'}
                    flex={1}
                    isCompact={true}
                    onTap={() => {
                        handleTabSelected(HomeCardActionType.canceled)
                    }}
                    mainColor={mainColor}
                />

            </Row>
        </>
    )
}