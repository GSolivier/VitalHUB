
import React from 'react'
import styled from 'styled-components/native'
import { AppColors } from '../AppColors'
import { TextSmall } from '../AppFonts'
import { Spacing } from '../../components/Container'
import SvgIcon, { Icon } from '../../assets/icons/Icons'
import translate from '../../locale'
import AppLocalizations from '../AppLocalizations'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteKeys } from './RouteActions'
import HomeScreenDoctor from '../../screens/doctor/HomeScreenDoctor'
import ProfileScreenDoctor from '../../screens/doctor/ProfileScreenDoctor'
import ClinicScreenDoctor from '../../screens/doctor/ClinicScreenDoctor'

const Tab = createBottomTabNavigator();


export const IconButton = styled.View`
    background-color: ${({ isSelected }) => isSelected ? AppColors.whiteBlue : AppColors.white};
    padding: 12px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 5px;
`

export default function HomeBottomNavigation() {

    return (
            <Tab.Navigator
                initialRouteName={RouteKeys.homeScreenDoctor}
                
                screenOptions={({ route }) => ({
                    headerShown: false,

                    tabBarStyle: { backgroundColor: "#FFFFFF", height: 70},
                    
                    tabBarActiveBackgroundColor: "transparent",
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color, size }) => {


                        if (route.name == RouteKeys.homeScreenDoctor) {
                            return <IconButton isSelected={focused}>
                                <SvgIcon name={Icon.calendarCheck} color={focused ? AppColors.darkBlueV2 : AppColors.grayV2} />
                                {focused ? (<TextSmall color={AppColors.darkBlueV2}>{translate(AppLocalizations.schedule)}</TextSmall>) : (<Spacing />)}
                            </IconButton>
                        } else if (route.name == RouteKeys.clinicScreenDoctor) {
                            return <IconButton isSelected={focused}>

                                <SvgIcon name={Icon.hospital} color={focused ? AppColors.darkBlueV2 : AppColors.grayV2} />

                                {focused ? (<TextSmall color={AppColors.darkBlueV2}>{translate(AppLocalizations.clinic)}</TextSmall>) : (<Spacing />)}

                            </IconButton>
                        } else {
                            return <IconButton isSelected={focused}>

                                <SvgIcon name={Icon.circleUser} color={focused ? AppColors.darkBlueV2 : AppColors.grayV2} />

                                {focused ? (<TextSmall color={AppColors.darkBlueV2}>{translate(AppLocalizations.profile)}</TextSmall>) : (<Spacing />)}

                            </IconButton>
                        }

                    }
                })}
            >
                <Tab.Screen 
                name={RouteKeys.homeScreenDoctor} 
                component={HomeScreenDoctor} 

                />

                <Tab.Screen 
                name={RouteKeys.clinicScreenDoctor} 
                component={ClinicScreenDoctor} 
                
                />

                <Tab.Screen 
                name={RouteKeys.profileScreenDoctor} 
                component={ProfileScreenDoctor} 

                />
            </Tab.Navigator>
    )
}