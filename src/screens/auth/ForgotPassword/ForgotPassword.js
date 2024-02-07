import React from 'react'
import AuthContainer from '../widgets/AuthContainer'
import { AppAssets } from '../../../assets/AppAssets'
import { Image } from 'react-native'
import { StackActions } from '@react-navigation/routers';
import { Spacing } from '../../../components/Container';
import { TextMedium, TitleMedium } from '../../../settings/AppFonts';
import translate from '../../../locale';
import AppLocalizations from '../../../locale/AppLocalizations';
import AppInput from '../../../components/AppInput';
import AppButton from '../../../components/AppButton';

export default function ForgotPassword({ navigation }) {

    const popAction = StackActions.pop(1);

    return (
        <AuthContainer hasLeading={true} onTap={() => { navigation.dispatch(popAction); }}>
            <Image source={AppAssets.appLogoDark} />
            <Spacing height={'25px'}/>
            <TitleMedium size={'20px'}>{translate(AppLocalizations.recoveryPassword)}</TitleMedium>
            <Spacing height={'15px'}/>
            <TextMedium textAlign={'center'}>{translate(AppLocalizations.recoveryPasswordHint)}</TextMedium>
            <Spacing height={'20px'}/>
            <AppInput hint={translate(AppLocalizations.emailPlacehoder)} />
            <Spacing height={'30px'}/>
            <AppButton textButton={translate(AppLocalizations.continueButton).toUpperCase()} onTap={() => {navigation.navigate('EmailVerify')}}/>

        </AuthContainer>
    )
}