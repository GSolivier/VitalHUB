import React from 'react'
import { Container, Spacing } from '../../../components/Container'
import AppInput from '../../../components/AppInput'
import { Image } from 'react-native'
import { AppAssets } from '../../../assets/AppAssets'
import { Link, TitleMedium } from '../../../settings/AppFonts'
import AppButton, { LinkButton } from '../../../components/AppButton'
import GoogleSvg from '../../../assets/icons/iconjs/google'
import { AppColors } from '../../../settings/AppColors'
import AuthContainer from '../widgets/AuthContainer'
import translate from '../../../locale'
import AppLocalizations from '../../../locale/AppLocalizations'


export default function Login() {
  return (
    <AuthContainer>
        <Image source={AppAssets.appLogoDark}/>
        <Spacing height={'25px'}/>
        <TitleMedium size={'20px'}>{translate(AppLocalizations.loginOrSignUp)}</TitleMedium>

        <Spacing height={'20px'}/>
        <AppInput hint={translate(AppLocalizations.emailPlacehoder)}/>
        <Spacing height={'15px'}/>
        <AppInput hint={translate(AppLocalizations.passwordPlaceholder)} isObscure={true}/>
        <Spacing height={'10px'}/>
        <LinkButton size={'14px'} color={AppColors.grayV4} alignSelf={'flex-start'} text={translate(AppLocalizations.forgotPassword)}/>
        <Spacing height={'30px'}/>


        <AppButton textButton={translate(AppLocalizations.enterButton).toUpperCase()} />
        <Spacing height={'15px'}/>
        <AppButton textButton={translate(AppLocalizations.enterWithGoogle).toUpperCase()} isOutlined={true} SvgIcon={GoogleSvg} />
        <Spacing height={'30px'}/>
        <TitleMedium size={'14px'} color={AppColors.grayV2}>{translate(AppLocalizations.dontHaveAccount)} <LinkButton color={AppColors.darkBlueV6} text={translate(AppLocalizations.createAccount)}/></TitleMedium>
        
    </AuthContainer>
  )
}