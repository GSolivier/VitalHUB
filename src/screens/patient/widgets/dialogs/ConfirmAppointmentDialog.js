import React from 'react'
import AppDialog from '../../../../components/AppDialog'
import AppButton, { LinkButton } from '../../../../components/AppButton'
import translate from '../../../../locale'
import AppLocalizations from '../../../../settings/AppLocalizations'
import { Column, Spacing } from '../../../../components/Container'
import { TextBig, TextMedium, TitleMedium } from '../../../../settings/AppFonts'
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
      <TitleMedium>{translate(AppLocalizations.scheduleAppointment)}</TitleMedium>
      <Spacing height={16} />
      <TextMedium textAlign={TextAlign.center}>{translate(AppLocalizations.scheduleAppointmentHint)}</TextMedium>
      <Spacing height={30} />
      <Column alignItems={Flex.alignItems.flexStart} width={'100%'}>
        <TextBig size={16}>{translate(AppLocalizations.appoitmentDate)}</TextBig>
        <TextMedium>1 de Novembro de 2024</TextMedium>
        <Spacing height={20} />
        <TextBig size={16}>{translate(AppLocalizations.appoitmentDoctor)}</TextBig>
        <TextMedium>Dra Alessandra</TextMedium>
        <Spacing height={6} />
        <TextMedium>Dermatologista</TextMedium>
        <Spacing height={20} />
        <TextBig size={16}>{translate(AppLocalizations.appointmentLocal)}</TextBig>
        <TextMedium>São Paulo - SP</TextMedium>
        <Spacing height={20} />
        <TextBig size={16}>{translate(AppLocalizations.typeofAppointmentHint)}</TextBig>
        <TextMedium>Rotina</TextMedium>
      </Column>
      <Spacing height={30} />
      <AppButton textButton={translate(AppLocalizations.confirm).toUpperCase()} onTap={handleConfirm}/>
      <Spacing height={30} />
      <LinkButton text={translate(AppLocalizations.cancel)} onTap={onClose} />
    </AppDialog>
  )
}