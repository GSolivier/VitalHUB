import React, { useEffect, useState } from 'react'
import AuthContainer from './widgets/AuthContainer'
import { AppAssets } from '../../assets/AppAssets'
import { Image } from 'react-native'
import { StackActions } from '@react-navigation/routers';
import { Spacing } from '../../components/Container';
import { TextMedium, TitleMedium } from '../../settings/AppFonts';
import translate from '../../locale';
import AppLocalizations from '../../settings/AppLocalizations';
import AppInput from '../../components/AppInput';
import AppButton from '../../components/AppButton';
import { RouteKeys, pop, push } from '../../settings/AppRoutes';
import { FlexPropertyValues } from '../../settings/AppEnums';

export default function ForgotPassword({ navigation }) {

    const [email, setEmail] = useState('')

    return (
        <AuthContainer hasLeading={true} onTap={() => { pop(navigation) }}>
            <Image source={AppAssets.appLogoDark} />
            <Spacing height={25}/>
            <TitleMedium size={20}>{translate(AppLocalizations.recoveryPassword)}</TitleMedium>
            <Spacing height={15}/>
            <TextMedium textAlign={FlexPropertyValues.ALIGN_ITEMS.CENTER}>{translate(AppLocalizations.recoveryPasswordHint)}</TextMedium>
            <Spacing height={20}/>
            <AppInput 
            hint={translate(AppLocalizations.emailPlacehoder)} 
            textValue={email} 
            onEdit={setEmail}/>
            <Spacing height={30}/>
            <AppButton 
            textButton={translate(AppLocalizations.continueButton).toUpperCase()} 
            onTap={() => {push(navigation, RouteKeys.emailVerify, {email: email})}}
            />

        </AuthContainer>
    )
}