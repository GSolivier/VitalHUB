import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../../screens/auth/Login';
import ForgotPassword from '../../screens/auth/ForgotPassword';
import EmailVerify from '../../screens/auth/EmailVerify';
import RedefinePassword from '../../screens/auth/RedefinePassword';
import CreateAccount from '../../screens/auth/CreateAccount';
import { RouteKeys } from './RouteActions';
import InsertMedicalRecord from '../../screens/doctor/InsertMedicalRecord';
import TabNavigationDoctor from './TabNavigationDoctor';
import TabNavigationPatient from './TabNavigationPatient';
import SelectClinic from '../../screens/patient/SelectClinic';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name={RouteKeys.selectClinicScreen}
                    component={SelectClinic}
                />
                <Stack.Screen name={RouteKeys.tabNavigationPatient} component={TabNavigationPatient} />
                <Stack.Screen name={RouteKeys.tabNavigationDoctor} component={TabNavigationDoctor} />
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
                    name={RouteKeys.insertMedicalRecordScreen}
                    component={InsertMedicalRecord}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}



