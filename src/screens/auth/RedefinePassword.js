import { Image } from 'react-native'
import React from 'react'
import AuthContainer from './widgets/AuthContainer'
import { AppAssets } from '../../assets/AppAssets';
import { Spacing } from '../../components/Container';
import { TextMedium, TitleMedium } from '../../settings/AppFonts';
import AppLocalizations from '../../settings/AppLocalizations';
import translate from '../../locale';
import AppInput from '../../components/AppInput';
import AppButton from '../../components/AppButton';
import { pop } from '../../settings/AppRoutes';

export default function RedefinePassword({ navigation }) {
    return (
        <AuthContainer hasLeading={true} isClosable={true} onTap={() => { pop(navigation) }}>
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