import { MontserratAlternates_700Bold, MontserratAlternates_500Medium, useFonts } from '@expo-google-fonts/montserrat-alternates';
import { Quicksand_500Medium, Quicksand_600SemiBold } from '@expo-google-fonts/quicksand';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/auth/Login/Login';
import ForgotPassword from './src/screens/auth/ForgotPassword/ForgotPassword';
import EmailVerify from './src/screens/auth/EmailVerify/EmailVerify';
import RedefinePassword from './src/screens/auth/RedefinePassword/RedefinePassword';
import CreateAccount from './src/screens/auth/CreateAccount/CreateAccount';

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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name='Login'
        component={Login}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='ForgotPassword'
        component={ForgotPassword}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='EmailVerify'
        component={EmailVerify}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='RedefinePassword'
        component={RedefinePassword}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='CreateAccount'
        component={CreateAccount}
        options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


