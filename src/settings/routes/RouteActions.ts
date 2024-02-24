import {
  NavigationProp,
  ParamListBase,
  StackActions,
} from "@react-navigation/native";

export const RouteKeys = {
  loginScreen: "Login",
  forgotPassword: "ForgotPassword",
  emailVerify: "EmailVerify",
  redefinePassword: "RedefinePassword",
  createAccount: "CreateAccount",
  tabNavigationDoctor: "TabNavigationDoctor",
  tabNavigationPatient: "TabNavigationPatient",
  homeScreenDoctor: "HomeScreenDoctor",
  clinicScreenDoctor: "ClinicScreenDoctor",
  profileScreenDoctor: "ProfileScreenDoctor",
  homeScreenPatient: "HomeScreenPatient",
  clinicScreenPatient: "ClinicScreenPatient",
  profileScreenPatient: "ProfileScreenPatient",
  insertMedicalRecordScreen: "InsertMedicalRecordScreen",
  selectClinicScreen: "SelectClinicScreen",
  selectDoctorScreen: "SelectDoctorScreen",
  selectDateScreen: 'SelectDateScreen'
};

export async function push<RouteName extends keyof ParamListBase>(
  navigation: NavigationProp<ParamListBase>,
  routeKey: RouteName,
  params?: ParamListBase[RouteName],
  killCurrentScreen: boolean = false
): Promise<void> {
  try {
    if (typeof params === "boolean") {
      killCurrentScreen = params;
      params = undefined;
    }
    if (!killCurrentScreen) {
      const pushAction = StackActions.push(routeKey, params);
      navigation.dispatch(pushAction);
    } else {
      const pushAction = StackActions.replace(routeKey, params);
      navigation.dispatch(pushAction);
    }
  } catch (error) {
    console.error("Erro ao empurrar rota:", error);
  }
}

export async function pop(
  navigation: NavigationProp<ParamListBase>,
  screensToPop: number = 1
): Promise<void> {
  try {
    const popAction = StackActions.pop(screensToPop);
    navigation.dispatch(popAction);
  } catch (error) {
    console.error("Erro ao fazer pop na rota:", error);
  }
}
