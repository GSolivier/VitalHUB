import { Image } from 'react-native'
import React from 'react'
import AuthContainer from './widgets/AuthContainer'
import { AppAssets } from '../../assets/AppAssets'
import { Spacing } from '../../components/Container'
import { TextMedium, TitleMedium } from '../../settings/AppFonts'
import translate from '../../locale'
import AppLocalizations from '../../settings/AppLocalizations'
import AppInput from '../../components/AppInput'
import AppButton, { LinkButton } from '../../components/AppButton'
import { TextAlign } from '../../settings/AppEnums'
import { pop } from '../../settings/routes/RouteActions'

export default function CreateAccount({ navigation }) {
  return (
    <AuthContainer>
      <Image source={AppAssets.appLogoDark} />
      <Spacing height={25} />
      <TitleMedium size={20}>{translate(AppLocalizations.createAccountTitle)}</TitleMedium>
      <Spacing height={15} />
      <TextMedium textAlign={TextAlign.center}>{translate(AppLocalizations.createAccountHint)}</TextMedium>
      <TextMedium textAlign={TextAlign.center}>{translate(AppLocalizations.createAccountHint)}</TextMedium>
      <Spacing height={20} />
      <AppInput hint={translate(AppLocalizations.emailPlacehoder)} />
      <Spacing height={15} />
      <AppInput hint={translate(AppLocalizations.passwordPlaceholder)} />
      <Spacing height={15} />
      <AppInput hint={translate(AppLocalizations.confirmPassword)} />
      <Spacing height={30} />
      <AppButton textButton={translate(AppLocalizations.signUp).toUpperCase()} />
      <Spacing height={30} />
      <LinkButton text={translate(AppLocalizations.cancel)} onTap={() => pop(navigation)} />
      
    </AuthContainer>
  )
}