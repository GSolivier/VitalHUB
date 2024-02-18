import { StackActions } from "@react-navigation/native";


export const RouteKeys = {
    loginScreen: 'Login',
    forgotPassword: 'ForgotPassword',
    emailVerify: 'EmailVerify',
    redefinePassword: 'RedefinePassword',
    createAccount: 'CreateAccount',
    homeScreenDoctor: 'HomeScreenDoctor',
    homeScreenPatient: 'HomeScreenPatient'
}

export async function push(propNavigation, routeKey, data) {
    const pushAction = StackActions.push(routeKey, data);

    propNavigation.dispatch(pushAction)
}

export async function pop(propNavigation, data) {
    const popAction = StackActions.pop(1);

    propNavigation.dispatch(popAction, data);
}
