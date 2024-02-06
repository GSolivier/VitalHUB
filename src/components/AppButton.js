import React from 'react'
import styled from 'styled-components/native'
import { AppColors } from '../settings/AppColors'
import { TitleMedium } from '../settings/AppFonts'

export const Button = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    background-color: ${({ isOutlined = false }) => isOutlined ? AppColors.white : AppColors.darkBlue};
    border-color: ${({ isOutlined = false }) => isOutlined ? AppColors.darkBlue : null};
    border-width: ${({ isOutlined = false }) => isOutlined ? '1px' : '0px'} ;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 27px;
`


export default function AppButton({
    textButton,
    isOutlined = false,
    SvgIcon,
    onTap
}) {
    return (
        <Button
            isOutlined={isOutlined}
            onPress={onTap}
        >
            {SvgIcon ? <SvgIcon /> : null}
            <TitleMedium
                color={isOutlined ? AppColors.darkBlue : AppColors.white}
                size={'14px'}
            >{textButton}</TitleMedium>
        </Button>
    )
}