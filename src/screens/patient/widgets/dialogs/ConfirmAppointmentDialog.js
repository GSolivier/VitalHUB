import React from 'react'
import AppDialog from '../../../../components/AppDialog'
import AppButton, { LinkButton } from '../../../../components/AppButton'
import translate from '../../../../locale'
import AppLocalizations from '../../../../settings/AppLocalizations'
import { Column, Spacing } from '../../../../components/Container'
import { TextSemiBold, TextMedium, TitleSemiBold } from '../../../../settings/AppFonts'
import { Flex, TextAlign } from '../../../../settings/AppEnums'
import { RouteKeys, push } from '../../../../settings/routes/RouteActions'

export default function ConfirmAppointmentDialog({ visible, onClose, navigation }) {

  const handleConfirm = () => {
    push(navigation, RouteKeys.tabNavigationPatient)
    onClose()
  }
  return (
    <AppDialog
      visible={visible}
      onClose={onClose}
      justifyContentBox={Flex.justifyContent.center}
      justifyContentContainer={Flex.justifyContent.center}
      padding={13}
    >
      <TitleSemiBold>{translate(AppLocalizations.scheduleAppointment)}</TitleSemiBold>
      <Spacing height={16} />
      <TextMedium textAlign={TextAlign.center}>{translate(AppLocalizations.scheduleAppointmentHint)}</TextMedium>
      <Spacing height={30} />
      <Column alignItems={Flex.alignItems.flexStart} width={'100%'}>
        <TextSemiBold size={16}>{translate(AppLocalizations.appoitmentDate)}</TextSemiBold>
        <TextMedium size={14}>1 de Novembro de 2024</TextMedium>
        <Spacing height={20} />
        <TextSemiBold size={16}>{translate(AppLocalizations.appoitmentDoctor)}</TextSemiBold>
        <TextMedium size={14}>Dra Alessandra</TextMedium>
        <Spacing height={6} />
        <TextMedium size={14}>Dermatologista</TextMedium>
        <Spacing height={20} />
        <TextSemiBold size={16}>{translate(AppLocalizations.appointmentLocal)}</TextSemiBold>
        <TextMedium size={14}>São Paulo - SP</TextMedium>
        <Spacing height={20} />
        <TextSemiBold size={16}>{translate(AppLocalizations.typeofAppointmentHint)}</TextSemiBold>
        <TextMedium size={14}>Rotina</TextMedium>
      </Column>
      <Spacing height={30} />
      <AppButton textButton={translate(AppLocalizations.confirm).toUpperCase()} onTap={handleConfirm}/>
      <Spacing height={30} />
      <LinkButton text={translate(AppLocalizations.cancel)} onTap={onClose} />
    </AppDialog>
  )
}