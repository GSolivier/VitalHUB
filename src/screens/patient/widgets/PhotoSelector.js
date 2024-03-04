import React from 'react'
import styled from 'styled-components/native'
import { AppColors } from '../../../settings/AppColors'
import { TextSemiBold, TitleMedium } from '../../../settings/AppFonts'
import { Row, Spacing } from '../../../components/Container'
import SvgIcon, { Icon } from '../../../assets/icons/Icons'
import t from '../../../locale'
import AppLocalizations from '../../../settings/AppLocalizations'
import { Flex } from '../../../settings/AppEnums'

const PhotoSelectorBox = styled.View`
    width: 100%;
    gap: 10px;
`

const PhotoSelectorContent = styled.TouchableOpacity`
    padding: 44px 55px 44px 55px;
    background-color: ${AppColors.whiteDarker};
    border-radius: 5px;
`

export default function PhotoSelector({ label, photoList = [], onTap }) {
    return (

        <PhotoSelectorBox>
            {label ? (<TextSemiBold size={16}>{label}</TextSemiBold>) : null}
            <PhotoSelectorContent activeOpacity={0.5} onPress={onTap}>
                {photoList.length === 0 ? <Row alignItems={Flex.center}>

                    <SvgIcon name={Icon.fileAlert} />
                    <Spacing width={10} />
                    <TitleMedium size={14}>{t(AppLocalizations.noPhotoReported)}</TitleMedium>
                </Row> : <TextSemiBold>TA FUNCIONANDOOOOOO</TextSemiBold>}


            </PhotoSelectorContent>

        </PhotoSelectorBox>

    )
}