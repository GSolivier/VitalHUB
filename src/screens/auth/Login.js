import React, { useState } from 'react'
import { Row, Spacing } from '../../components/Container'
import AppInput from '../../components/AppInput'
import { Image } from 'react-native'
import { AppAssets } from '../../assets/AppAssets'
import { TitleSemiBold } from '../../settings/AppFonts'
import AppButton, { LinkButton } from '../../components/AppButton'
import { AppColors } from '../../settings/AppColors'
import AuthContainer from './widgets/AuthContainer'
import translate from '../../locale'
import AppLocalizations from '../../settings/AppLocalizations'
import { Flex } from '../../settings/AppEnums'
import SvgIcon, { Icon } from '../../assets/icons/Icons'
import { RouteKeys, push } from '../../settings/routes/RouteActions'


export default function Login({navigation}) {
    const [email, setEmail] = useState('')
    const [isValidated, setIsValidated] = useState(true)
    const [userType, setUserType] = useState('patient')

    const handleEmailChange = (value) => {
      setEmail(value);
    }
  return (
    <AuthContainer>

      <Image source={AppAssets.appLogoDark} />

          <Spacing height={25} />

      <TitleSemiBold size={20}>{translate(AppLocalizations.loginOrSignUp)}</TitleSemiBold>

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
        alignSelf={Flex.flexStart} 
        text={translate(AppLocalizations.forgotPassword)} 
        onTap={()=> {
         push(navigation, RouteKeys.forgotPassword)
        }}
      />

          <Spacing height={30} />

      <AppButton 
      textButton={translate(AppLocalizations.enterButton).toUpperCase()} 
      onTap={ () => {
        if(email.length != 0){
          push(navigation, userType === 'patient' ? RouteKeys.tabNavigationPatient : RouteKeys.tabNavigationDoctor, true)
        } else {
          return
        }
      }} />

          <Spacing height={15} />

      <AppButton 
      textButton={translate(AppLocalizations.enterWithGoogle).toUpperCase()} 
      isOutlined={true} 
      SvgIcon={
      <SvgIcon 
      name={Icon.google} 
      color={AppColors.secondaryV6} 
      size={15}/>
      } />

          <Spacing height={30} />

      <Row alignItems={Flex.center} >
      <TitleSemiBold
      size={14}
      color={AppColors.grayV2}>{translate(AppLocalizations.dontHaveAccount)} </TitleSemiBold>
      <LinkButton onTap={() => {push(navigation, RouteKeys.createAccount)}} color={AppColors.secondaryV6} text={translate(AppLocalizations.createAccount)} />

      </Row>


    </AuthContainer>
  )
}