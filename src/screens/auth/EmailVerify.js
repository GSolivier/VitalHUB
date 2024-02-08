import { StackActions, useRoute } from "@react-navigation/native";
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
import { useEffect, useState } from "react";
import { RouteKeys, pop, push } from "../../settings/AppRoutes";

export default function EmailVerify({ navigation }) {
    const [codeValue, setCodeValue] = useState('');

    const { params } = useRoute();

    return (
        <AuthContainer hasLeading={true} isClosable={true} onTap={() => { pop(navigation) }}>
            <Image source={AppAssets.appLogoDark} />
            <Spacing height={'25px'}/>
            <TitleMedium size={'20px'}>{translate(AppLocalizations.emailVerify)}</TitleMedium>
            <Spacing height={'15px'}/>
            <TextMedium textAlign={'center'}>{translate(AppLocalizations.emailVerifyHint)} <TextMedium color={AppColors.darkBlue}>{params.email}</TextMedium></TextMedium>
            <Spacing height={'20px'}/>
            <AppCodeInput onValueChange={setCodeValue}/>
            <Spacing height={'30px'}/>
            <AppButton textButton={translate(AppLocalizations.enterButton).toUpperCase()} onTap={() => {push(navigation, RouteKeys.redefinePassword)}}/>
            <Spacing height={'30px'}/>
            <LinkButton text={translate(AppLocalizations.resentCode)} color={AppColors.darkBlueV1} />
        </AuthContainer>
    );
}