import { StackActions } from "@react-navigation/native";
import AuthContainer from "./widgets/AuthContainer";
import { Image } from "react-native";
import { Spacing } from "../../components/Container";
import { AppAssets } from "../../assets/AppAssets";
import { TextMedium, TitleMedium } from "../../settings/AppFonts";
import translate from "../../locale";
import AppLocalizations from "../../settings/AppLocalizations";
import { AppColors } from "../../settings/AppColors";
import AppButton, { LinkButton } from "../../components/AppButton";
import { AppCodeInput } from "../../components/AppInput";

export default function EmailVerify({ navigation }) {

    const popAction = StackActions.pop(1);
    return (
        <AuthContainer hasLeading={true} isClosable={true} onTap={() => { navigation.dispatch(popAction); }}>
            <Image source={AppAssets.appLogoDark} />
            <Spacing height={'25px'}/>
            <TitleMedium size={'20px'}>{translate(AppLocalizations.emailVerify)}</TitleMedium>
            <Spacing height={'15px'}/>
            <TextMedium textAlign={'center'}>{translate(AppLocalizations.emailVerifyHint)} <TextMedium color={AppColors.darkBlue}>username@email.com</TextMedium></TextMedium>
            <Spacing height={'20px'}/>
            <AppCodeInput/>
            <Spacing height={'30px'}/>
            <AppButton textButton={translate(AppLocalizations.enterButton).toUpperCase()} onTap={() => {navigation.navigate('RedefinePassword')}}/>
            <Spacing height={'30px'}/>
            <LinkButton text={translate(AppLocalizations.resentCode)} color={AppColors.darkBlueV1} />
        </AuthContainer>
    );
}