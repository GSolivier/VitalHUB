import React, { useState } from 'react'
import { Spacing } from '../../components/Container'
import AppInput from '../../components/AppInput'
import { Image } from 'react-native'
import { AppAssets } from '../../assets/AppAssets'
import { TitleMedium } from '../../settings/AppFonts'
import AppButton, { LinkButton } from '../../components/AppButton'
import GoogleSvg from '../../assets/icons/iconjs/google'
import { AppColors } from '../../settings/AppColors'
import AuthContainer from './widgets/AuthContainer'
import translate from '../../locale'
import AppLocalizations from '../../settings/AppLocalizations'
import { RouteKeys, push } from '../../settings/AppRoutes'
import { FlexPropertyValues } from '../../settings/AppEnums'


export default function Login({navigation}) {
    const [email, setEmail] = useState('')
    const [isValidated, setIsValidated] = useState(true)

    const handleEmailChange = (value) => {
      setEmail(value);
    }
  return (
    <AuthContainer>

      <Image source={AppAssets.appLogoDark} />

          <Spacing height={25} />

      <TitleMedium size={20}>{translate(AppLocalizations.loginOrSignUp)}</TitleMedium>

          <Spacing height={20} />

      <AppInput hint={translate(AppLocalizations.emailPlacehoder)} 
      onEdit={handleEmailChange}
      isValid={isValidated} 
      textValue={email}
      />

          <Spacing height={15} />

      <AppInput hint={translate(AppLocalizations.passwordPlaceholder)} isObscure={true} />

          <Spacing height={10} />

      <LinkButton 
        size={14} 
        color={AppColors.grayV4}
        alignSelf={FlexPropertyValues.ALIGN_SELF.FLEX_START} 
        text={translate(AppLocalizations.forgotPassword)} 
        onTap={()=> {
         push(navigation, RouteKeys.forgotPassword)
        }}
      />

          <Spacing height={30} />

      <AppButton 
      textButton={translate(AppLocalizations.enterButton).toUpperCase()} 
      onTap={() => {
        if(email.length != 0){
          push(navigation, RouteKeys.homeScreenDoctor)
        } else {
          return
        }
      }} />

          <Spacing height={15} />

      <AppButton textButton={translate(AppLocalizations.enterWithGoogle).toUpperCase()} isOutlined={true} SvgIcon={GoogleSvg} />

          <Spacing height={30} />
          
      <TitleMedium 
      size={14} 
      color={AppColors.grayV2}>{translate(AppLocalizations.dontHaveAccount)} <LinkButton onTap={() => {push(navigation, RouteKeys.createAccount)}} color={AppColors.darkBlueV6} text={translate(AppLocalizations.createAccount)} /></TitleMedium>

    </AuthContainer>
  )
}