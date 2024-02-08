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

export default function ForgotPassword({ navigation }) {

    const [email, setEmail] = useState('')

    return (
        <AuthContainer hasLeading={true} onTap={() => { pop(navigation) }}>
            <Image source={AppAssets.appLogoDark} />
            <Spacing height={'25px'}/>
            <TitleMedium size={'20px'}>{translate(AppLocalizations.recoveryPassword)}</TitleMedium>
            <Spacing height={'15px'}/>
            <TextMedium textAlign={'center'}>{translate(AppLocalizations.recoveryPasswordHint)}</TextMedium>
            <Spacing height={'20px'}/>
            <AppInput 
            hint={translate(AppLocalizations.emailPlacehoder)} 
            textValue={email} 
            onEdit={setEmail}/>
            <Spacing height={'30px'}/>
            <AppButton 
            textButton={translate(AppLocalizations.continueButton).toUpperCase()} 
            onTap={() => {push(navigation, RouteKeys.emailVerify, {email: email})}}
            />

        </AuthContainer>
    )
}