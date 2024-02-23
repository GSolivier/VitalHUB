import React, { useEffect, useState } from 'react'
import AppDialog from '../../../../components/AppDialog'
import { TitleMedium } from '../../../../settings/AppFonts'
import { Flex } from '../../../../settings/AppEnums'
import AppButton, { LinkButton } from '../../../../components/AppButton'
import { Spacing } from '../../../../components/Container'
import AppInput from '../../../../components/AppInput'
import translate from '../../../../locale'
import AppLocalizations from '../../../../settings/AppLocalizations'
import AppDropdown from '../../../../components/AppDropdown'
import AppointmentLevels from '../AppointmentLevels'
import { AppColors } from '../../../../settings/AppColors'

export default function ScheduleAppointmentDialog({ visible, onClose }) {
  const [selectedAppointmentType, setSelectedAppointmentType] = useState('');
  const datas = [
    { key: '1', value: 'Check-up'},
    { key: '2', value: 'Retorno' },
  ]

  useEffect(() => {
    if (visible) {
      setSelectedAppointmentType('');
    }
  }, [visible]);

  const handleTabSelected = (value) => {
    setSelectedAppointmentType(value);
  };
  return (
    <AppDialog
      visible={visible}
      animationType='slide'
      padding={0}
      isFaded={true}
      justifyContentBox={Flex.justifyContent.flexStart}
      onClose={onClose}
    >
      <TitleMedium alignSelf={Flex.alignSelf.center}>Agendar Consulta</TitleMedium>
      <Spacing height={30} />
      <AppDropdown
        data={datas}
        placeholder={'Tipo de consulta'}
        hasLabel={true}
        label={'Informe o tipo de consulta'}
      />
      <Spacing height={20} />
      <AppointmentLevels 
      selected={selectedAppointmentType} 
      handleTabSelected={handleTabSelected} 
      mainColor={AppColors.lightBlue}
      label={'Qual o nível da consulta'}  
      />
      <Spacing height={20} />
      <AppInput hasLabel={true} lable={'Informe a localização desejada'} hint={'Informe a localização'} onEdit={() => {}} />
      <Spacing height={30} />
      <AppButton textButton={translate(AppLocalizations.continueButton)} />
      <Spacing height={30} />
      <LinkButton text={'Cancelar'} onTap={onClose} />
    </AppDialog>
  )
}