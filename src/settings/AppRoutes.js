import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/auth/Login';
import ForgotPassword from '../screens/auth/ForgotPassword';
import EmailVerify from '../screens/auth/EmailVerify';
import RedefinePassword from '../screens/auth/RedefinePassword';
import CreateAccount from '../screens/auth/CreateAccount';
import HomeScreenDoctor from '../screens/doctor/HomeScreenDoctor';
import HomeScreenPatient from '../screens/patient/HomeScreenPatient';
import { RouteKeys } from './RouteActions';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name={RouteKeys.homeScreenDoctor}
                    component={HomeScreenDoctor}
                />  
                <Stack.Screen
                    name={RouteKeys.loginScreen}
                    component={Login}
                />
                <Stack.Screen
                    name={RouteKeys.forgotPassword}
                    component={ForgotPassword}
                />
                <Stack.Screen
                    name={RouteKeys.emailVerify}
                    component={EmailVerify}
                />
                <Stack.Screen
                    name={RouteKeys.redefinePassword}
                    component={RedefinePassword}
                />
                <Stack.Screen
                    name={RouteKeys.createAccount}
                    component={CreateAccount}
                />
                <Stack.Screen
                    name={RouteKeys.homeScreenPatient}
                    component={HomeScreenPatient}
                />  
            </Stack.Navigator>
        </NavigationContainer>
    )
}



