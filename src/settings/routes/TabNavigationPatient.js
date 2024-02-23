
import React from 'react'
import styled from 'styled-components/native'
import { AppColors } from '../AppColors'
import { TextSmall } from '../AppFonts'
import SvgIcon, { Icon } from '../../assets/icons/Icons'
import translate from '../../locale'
import AppLocalizations from '../AppLocalizations'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteKeys } from './RouteActions'
import HomeScreenPatient from '../../screens/patient/HomeScreenPatient'
import ClinicScreenPatient from '../../screens/patient/ClinicScreenPatient'
import ProfileScreenPatient from '../../screens/patient/ProfileScreenPatient'
import { Spacing } from '../../components/Container'

const Tab = createBottomTabNavigator();


export const IconButton = styled.View`
    background-color: ${({ isSelected }) => isSelected ? AppColors.whiteBlue : AppColors.white};
    padding: 9px 12px 9px 12px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 5px;
`

export default function TabNavigationPatient() {

    return (
            <Tab.Navigator
                initialRouteName={RouteKeys.homeScreenPatient}
                
                screenOptions={({ route }) => ({
                    headerShown: false,

                    tabBarStyle: { flex: 0.08},
                    
                    tabBarActiveBackgroundColor: "transparent",
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color, size }) => {


                        if (route.name == RouteKeys.homeScreenPatient) {
                            return <IconButton isSelected={focused}>
                                <SvgIcon name={Icon.calendarCheck} color={focused ? AppColors.darkBlueV2 : AppColors.grayV2} />
                                {focused ? (<TextSmall color={AppColors.darkBlueV2}>{translate(AppLocalizations.schedule)}</TextSmall>) : (<Spacing />)}
                            </IconButton>
                        } else if (route.name == RouteKeys.clinicScreenPatient) {
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
                name={RouteKeys.homeScreenPatient} 
                component={HomeScreenPatient} 

                />

                <Tab.Screen 
                name={RouteKeys.clinicScreenPatient} 
                component={ClinicScreenPatient} 
                
                />

                <Tab.Screen 
                name={RouteKeys.profileScreenPatient} 
                component={ProfileScreenPatient} 

                />
            </Tab.Navigator>
    )
}