import { MontserratAlternates_700Bold, MontserratAlternates_500Medium, useFonts } from '@expo-google-fonts/montserrat-alternates';
import { Quicksand_500Medium, Quicksand_600SemiBold } from '@expo-google-fonts/quicksand';
import AppRoutes from './src/settings/routes/AppRoutes';
import HomeBottomNavigation from './src/settings/routes/TabNavigationDoctor';

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


