
import React, { useState } from 'react'
import styled from 'styled-components/native'
import { AppColors } from '../../settings/AppColors'
import ScheduleSvg from '../../assets/icons/iconjs/schedule'
import ClinicSvg from '../../assets/icons/iconjs/clinic'
import ProfileSvg from '../../assets/icons/iconjs/profile'
import { TextSmall } from '../../settings/AppFonts'
import { Spacing } from '../../components/Container'

export const NavigationBox = styled.View`
    elevation: 30;
    flex: 0.1;
    background-color: ${AppColors.white};
    justify-content: space-between;
    flex-direction: row;
    align-items:center;
    padding-left: 40px;
    padding-right: 40px;
`

export const IconButton = styled.TouchableOpacity`
    background-color: ${({ isSelected }) => isSelected ? AppColors.whiteBlue : AppColors.white};
    padding: 12px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 5px;
`

export default function HomeBottomNavigation({onChangedValue}) {
    const [selected, setSelected] = useState(1);

    handleTabSelected = (value) => {
        setSelected(value)
        onChangedValue(value)
    }
    return (
        <NavigationBox>
            <IconButton isSelected={selected == 1} onPress={() => handleTabSelected(1)}>
                <ScheduleSvg fill={selected == 1 ? AppColors.darkBlueV2 : AppColors.grayV2} />
                {selected == 1 ? (<TextSmall color={AppColors.darkBlueV2}>Agenda</TextSmall>) : (<Spacing />)}
            </IconButton>

            <IconButton isSelected={selected == 2} onPress={() => handleTabSelected(2)}>

                <ClinicSvg fill={selected == 2 ? AppColors.darkBlueV2 : AppColors.grayV2} />

                {selected == 2 ? (<TextSmall color={AppColors.darkBlueV2}>Clinica</TextSmall>) : (<Spacing />)}

            </IconButton>

            <IconButton isSelected={selected == 3} onPress={() => handleTabSelected(3)}>
            
                <ProfileSvg fill={selected == 3 ? AppColors.darkBlueV2 : AppColors.grayV2} />

                {selected == 3 ? (<TextSmall color={AppColors.darkBlueV2}>Perfil</TextSmall>) : (<Spacing />)}

            </IconButton>
        </NavigationBox>
    )
}