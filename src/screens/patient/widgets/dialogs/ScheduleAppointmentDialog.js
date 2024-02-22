import React from 'react'
import AppDialog from '../../../../components/AppDialog'
import { TitleMedium } from '../../../../settings/AppFonts'
import { Flex } from '../../../../settings/AppEnums'
import { LinkButton } from '../../../../components/AppButton'

export default function ScheduleAppointmentDialog({ visible, onClose }) {
  return (
    <AppDialog
    visible={visible}
    animationType='slide'
    padding={0}
    justifyContent={Flex.justifyContent.flexEnd}
    onClose={onClose}
    
    >
      <TitleMedium>Agendar Consulta</TitleMedium>
      <LinkButton text={'Cancelar'} onTap={onClose}/>
    </AppDialog>
  )
}