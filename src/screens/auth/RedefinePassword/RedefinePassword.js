import { Image } from 'react-native'
import React from 'react'
import AuthContainer from '../widgets/AuthContainer'
import { StackActions } from '@react-navigation/routers';
import { AppAssets } from '../../../assets/AppAssets';
import { Spacing } from '../../../components/Container';
import { TextMedium, TitleMedium } from '../../../settings/AppFonts';
import AppLocalizations from '../../../locale/AppLocalizations';
import translate from '../../../locale';
import AppInput from '../../../components/AppInput';
import AppButton from '../../../components/AppButton';

export default function RedefinePassword({ navigation }) {
    const popAction = StackActions.pop(1);
    return (
        <AuthContainer hasLeading={true} isClosable={true} onTap={() => { navigation.dispatch(popAction) }}>
            <Image source={AppAssets.appLogoDark} />
            <Spacing height={'25px'} />
            <TitleMedium size={'20px'}>{translate(AppLocalizations.redefinePassword)}</TitleMedium>
            <Spacing height={'15px'} />
            <TextMedium>{translate(AppLocalizations.redefinePasswordHint)}</TextMedium>
            <Spacing height={'20px'} />
            <AppInput hint={translate(AppLocalizations.newPasswordPlaceHolder)}/>
            <Spacing height={'15px'} />
            <AppInput hint={translate(AppLocalizations.confirmNewPasswordPlaceHolder)}/>
            <Spacing height={'30px'} />
            <AppButton textButton={translate(AppLocalizations.confirmNewPasswordPlaceHolder).toUpperCase()}/>
        </AuthContainer>
    )
}