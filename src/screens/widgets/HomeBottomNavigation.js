
import React, { useState } from 'react'
import styled from 'styled-components/native'
import { AppColors } from '../../settings/AppColors'
import { TextSmall } from '../../settings/AppFonts'
import { Spacing } from '../../components/Container'
import { IconFamily, IconNames, SvgIcon } from '../../assets/icons/Icons'
import { BottomNavigationRoute } from '../../settings/AppEnums'

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

export default function HomeBottomNavigation({ selectedTab, handleTabSelected }) {

    return (
        <NavigationBox>
            <IconButton isSelected={selectedTab == BottomNavigationRoute.schedule} onPress={() => handleTabSelected(BottomNavigationRoute.schedule)}>
                <SvgIcon iconFamily={IconFamily.fontAwesome6} name={IconNames.calendarCheck} color={selectedTab == BottomNavigationRoute.schedule ? AppColors.darkBlueV2 : AppColors.grayV2} />
                {selectedTab == BottomNavigationRoute.schedule ? (<TextSmall color={AppColors.darkBlueV2}>Agenda</TextSmall>) : (<Spacing />)}
            </IconButton>

            <IconButton isSelected={selectedTab == BottomNavigationRoute.clinic} onPress={() => handleTabSelected(BottomNavigationRoute.clinic)}>

                <SvgIcon iconFamily={IconFamily.fontAwesome6} name={IconNames.hospital} color={selectedTab == BottomNavigationRoute.clinic ? AppColors.darkBlueV2 : AppColors.grayV2} />

                {selectedTab == BottomNavigationRoute.clinic ? (<TextSmall color={AppColors.darkBlueV2}>Clinica</TextSmall>) : (<Spacing />)}

            </IconButton>

            <IconButton isSelected={selectedTab == BottomNavigationRoute.profile} onPress={() => handleTabSelected(BottomNavigationRoute.profile)}>
            
                <SvgIcon iconFamily={IconFamily.fontAwesome6} name={IconNames.circleUser} color={selectedTab == BottomNavigationRoute.profile ? AppColors.darkBlueV2 : AppColors.grayV2} />

                {selectedTab == BottomNavigationRoute.profile ? (<TextSmall color={AppColors.darkBlueV2}>Perfil</TextSmall>) : (<Spacing />)}

            </IconButton>
        </NavigationBox>
    )
}