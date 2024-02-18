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
import { pop } from '../../settings/RouteActions';

export default function RedefinePassword({ navigation }) {
    return (
        <AuthContainer hasLeading={true} isClosable={true} onTap={() => { pop(navigation) }}>
            <Image source={AppAssets.appLogoDark} />
            <Spacing height={25} />
            <TitleMedium size={20}>{translate(AppLocalizations.redefinePassword)}</TitleMedium>
            <Spacing height={15} />
            <TextMedium>{translate(AppLocalizations.redefinePasswordHint)}</TextMedium>
            <Spacing height={20} />
            <AppInput hint={translate(AppLocalizations.newPasswordPlaceHolder)}/>
            <Spacing height={15} />
            <AppInput hint={translate(AppLocalizations.confirmNewPasswordPlaceHolder)}/>
            <Spacing height={30} />
            <AppButton textButton={translate(AppLocalizations.confirmNewPasswordPlaceHolder).toUpperCase()}/>
        </AuthContainer>
    )
}