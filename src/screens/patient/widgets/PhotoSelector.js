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

const PhotoSelectorContent = styled.ScrollView`
    background-color: ${AppColors.whiteDarker};
    border-radius: 5px;
    width: 100%;
    height: 110px;
`


const ImgBox = styled.View`
    width: 40%;
    flex-direction: row;
    padding: 6px;
    align-items: center;
    background-color: ${AppColors.primary};
    justify-content: space-between;
    border-radius: 5px;
`

export default function PhotoSelector({ label, photoList = [] }) {
    return (

        <PhotoSelectorBox>
            {label ? (<TextSemiBold size={16}>{label}</TextSemiBold>) : null}
            <PhotoSelectorContent nestedScrollEnabled={true} >
                {photoList.length === 0 ? <Row alignItems={Flex.center}>

                    <SvgIcon name={Icon.fileAlert} />
                    <Spacing width={10} />
                    <TitleMedium size={14}>{t(AppLocalizations.noPhotoReported)}</TitleMedium>
                </Row> :

                
                    photoList.map((photo, index) => {
                        return <ImgBox>
                            <TextSemiBold color={AppColors.white}>{`IMG ${index + 1}`}</TextSemiBold>
                            <SvgIcon size={20} name={Icon.close} color={AppColors.white}/>
                        </ImgBox>
                    })}


            </PhotoSelectorContent>

        </PhotoSelectorBox>

    )
}