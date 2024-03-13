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

const PhotoSelectorContent = styled.View`
    background-color: ${AppColors.whiteDarker};
    border-radius: 5px;
    width: 100%;
    padding: 44px 55px 44px 55px;
    justify-content: center;
    align-items: center;
`


const ImgBox = styled.TouchableOpacity`
    width: 30%;
    flex-direction: row;
    padding: 6px;
    align-items: center;
    background-color: ${AppColors.whiteDarker};
    justify-content: space-around;
    border-radius: 5px;
`

export default function PhotoSelector({ label, photoList = [], openImage }) {


    return (

        <PhotoSelectorBox>
            {label ? (<TextSemiBold size={16}>{label}</TextSemiBold>) : null}
            <PhotoSelectorContent >

                {photoList.length === 0 ? <Row alignItems={Flex.center}>

                    <SvgIcon name={Icon.fileAlert} />
                    <Spacing width={10} />
                    <TitleMedium size={14}>{t(AppLocalizations.noPhotoReported)}</TitleMedium>
                </Row> : <TitleMedium size={14}>{photoList.length} {photoList.length > 1 ? `fotos reportadas` : 'foto reportada'}</TitleMedium>}

            </PhotoSelectorContent>

            <Row isWrap={true} gap={15}>
                {photoList.map((photo, index) => {
                    return <>
                        <ImgBox key={photo} activeOpacity={0.5} onPress={() => openImage(photo)}>
                            <TextSemiBold color={AppColors.primary}>{`IMG_${index + 1}`}</TextSemiBold>
                            <SvgIcon color={AppColors.primary} name={Icon.close} size={20} />
                        </ImgBox>
                    </>
                })}
            </Row>
        </PhotoSelectorBox>

    )
}