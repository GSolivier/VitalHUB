import { MontserratAlternates_700Bold, useFonts } from '@expo-google-fonts/montserrat-alternates';
import { Quicksand_500Medium, Quicksand_600SemiBold } from '@expo-google-fonts/quicksand';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useFonts({
    MontserratAlternates_700Bold,
    Quicksand_600SemiBold,
    Quicksand_500Medium
  })
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name='Navegacao'
        component={Navegacao}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


