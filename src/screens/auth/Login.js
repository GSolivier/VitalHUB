import React, { useState } from 'react'
import { Row, Spacing } from '../../components/Container'
import AppInput from '../../components/AppInput'
import { Image } from 'react-native'
import { AppAssets } from '../../assets/AppAssets'
import { TitleSemiBold } from '../../settings/AppFonts'
import AppButton, { LinkButton } from '../../components/AppButton'
import { AppColors } from '../../settings/AppColors'
import AuthContainer from './widgets/AuthContainer'
import t from '../../locale'
import AppLocalizations from '../../settings/AppLocalizations'
import { Flex, TextDecoration } from '../../settings/AppEnums'
import SvgIcon, { Icon } from '../../assets/icons/Icons'
import { RouteKeys, push } from '../../settings/routes/RouteActions'


export default function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [isValidated, setIsValidated] = useState(true)
  const [userType, setUserType] = useState('doctor')

  const handleEmailChange = (value) => {
    setEmail(value);
  }
  return (
    <AuthContainer>

      <Image source={AppAssets.appLogoDark} />

      <Spacing height={25} />

      <TitleSemiBold size={20}>{t(AppLocalizations.loginOrSignUp)}</TitleSemiBold>

      <Spacing height={20} />

      <AppInput hint={t(AppLocalizations.emailPlacehoder)}
        onEdit={handleEmailChange}
        isValid={isValidated}
        textValue={email}
      />

      <Spacing height={15} />

      <AppInput hint={t(AppLocalizations.passwordPlaceholder)} isObscure={true} />

      <Spacing height={10} />

      <LinkButton
        size={14}
        color={AppColors.grayV4}
        alignSelf={Flex.flexStart}
        text={t(AppLocalizations.forgotPassword)}
        onTap={() => {
          push(navigation, RouteKeys.forgotPassword)
        }}
      />

      <Spacing height={30} />

      <AppButton
        textButton={t(AppLocalizations.enterButton).toUpperCase()}
        onTap={() => {
          if (email.length != 0) {
            push(navigation, userType === 'patient' ? RouteKeys.tabNavigationPatient : RouteKeys.tabNavigationDoctor, true)
          } else {
            return
          }
        }} />

      <Spacing height={15} />

      <AppButton
        textButton={t(AppLocalizations.enterWithGoogle).toUpperCase()}
        isOutlined={true}
        SvgIcon={
          <SvgIcon
            name={Icon.google}
            color={AppColors.secondaryV6}
            size={15} />
        } />

      <Spacing height={30} />

      <Row alignItems={Flex.center} justifyContent={Flex.center} >
        <TitleSemiBold
          size={14}
          color={AppColors.grayV2}>
          {t(AppLocalizations.dontHaveAccount)}
        </TitleSemiBold>
        <Spacing width={5}/>
        <LinkButton
          onTap={() => { push(navigation, RouteKeys.createAccount) }}
          color={AppColors.secondaryV6}
          text={t(AppLocalizations.createAccount)}
           />

      </Row>


    </AuthContainer>
  )
} 3