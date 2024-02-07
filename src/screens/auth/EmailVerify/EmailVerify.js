import React from 'react'
import AuthContainer from '../widgets/AuthContainer'
import { StackActions } from '@react-navigation/routers';
import { Image } from 'react-native';
import { AppAssets } from '../../../assets/AppAssets';
import { Spacing } from '../../../components/Container';
import { Link, TextMedium, TitleMedium } from '../../../settings/AppFonts';
import AppLocalizations from '../../../locale/AppLocalizations';
import translate from '../../../locale';
import { AppColors } from '../../../settings/AppColors';
import  { CodeInput } from '../../../components/AppInput';
import AppButton, { LinkButton } from '../../../components/AppButton';

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
            <CodeInput/>
            <Spacing height={'30px'}/>
            <AppButton textButton={translate(AppLocalizations.enterButton).toUpperCase()} onTap={() => {navigation.navigate('RedefinePassword')}}/>
            <Spacing height={'30px'}/>
            <LinkButton text={translate(AppLocalizations.resentCode)} color={AppColors.darkBlueV1} />
        </AuthContainer>
    )
}