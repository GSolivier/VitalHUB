import { MontserratAlternates_700Bold, MontserratAlternates_500Medium, useFonts } from '@expo-google-fonts/montserrat-alternates';
import { Quicksand_500Medium, Quicksand_600SemiBold } from '@expo-google-fonts/quicksand';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/auth/Login';
import ForgotPassword from './src/screens/auth/ForgotPassword';
import RedefinePassword from './src/screens/auth/RedefinePassword';
import CreateAccount from './src/screens/auth/CreateAccount';
import EmailVerify from './src/screens/auth/EmailVerify';
import AppRoutes from './src/settings/AppRoutes';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useFonts({
    MontserratAlternates_700Bold,
    MontserratAlternates_500Medium,
    Quicksand_600SemiBold,
    Quicksand_500Medium
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <AppRoutes/>
  );
}


