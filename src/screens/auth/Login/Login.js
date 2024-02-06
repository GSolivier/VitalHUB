import React from 'react'
import { Container, Spacing } from '../../../components/Container'
import AppInput from '../../../components/AppInput'
import { Image } from 'react-native'
import { AppAssets } from '../../../assets/AppAssets'
import { TitleMedium } from '../../../settings/AppFonts'
import AppButton from '../../../components/AppButton'
import GoogleSvg from '../../../assets/icons/iconjs/google'

export default function Login() {
  return (
    <Container>
        <Image source={AppAssets.appLogoDark}/>
        <TitleMedium size={'20px'}>Entrar ou criar conta</TitleMedium>

        <Spacing gap={'15px'}>
        <AppInput hint={'Usuário ou E-mail'}/>
        <AppInput hint={'Senha'} isObscure={true}/>

        </Spacing>

        <AppButton textButton={'ENTRAR'} />
        <AppButton textButton={'ENTRAR COM GOOGLE'} isOutlined={true} SvgIcon={GoogleSvg} />
        
    </Container>
  )
}