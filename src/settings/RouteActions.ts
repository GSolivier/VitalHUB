import { NavigationProp, ParamListBase, StackActions } from "@react-navigation/native";


export const RouteKeys = {
    loginScreen: 'Login',
    forgotPassword: 'ForgotPassword',
    emailVerify: 'EmailVerify',
    redefinePassword: 'RedefinePassword',
    createAccount: 'CreateAccount',
    homeScreenDoctor: 'HomeScreenDoctor',
    homeScreenPatient: 'HomeScreenPatient'
}

export async function push<RouteName extends keyof ParamListBase>(
    navigation: NavigationProp<ParamListBase>,
    routeKey: RouteName,
    params?: ParamListBase[RouteName]
): Promise<void> {
    try {
        const pushAction = StackActions.push(routeKey, params);
        navigation.dispatch(pushAction);
    } catch (error) {
        console.error("Erro ao empurrar rota:", error);
    }
}

export async function pop(navigation: NavigationProp<ParamListBase>,): Promise<void> {
    try {
        const popAction = StackActions.pop(1);
        navigation.dispatch(popAction);
    } catch (error) {
        console.error("Erro ao fazer pop na rota:", error);
    }
}