import React, { useEffect, useState } from 'react'
import AppDialog from '../../../../components/AppDialog'
import { TitleMedium } from '../../../../settings/AppFonts'
import { AppointmentLevelsButtons, Flex } from '../../../../settings/AppEnums'
import AppButton, { LinkButton } from '../../../../components/AppButton'
import { Spacing } from '../../../../components/Container'
import AppInput from '../../../../components/AppInput'
import translate from '../../../../locale'
import AppLocalizations from '../../../../settings/AppLocalizations'
import AppDropdown from '../../../../components/AppDropdown'
import { AppColors } from '../../../../settings/AppColors'
import ButtonSelecter from '../../../widgets/ButtonSelecter'
import { RouteKeys, push } from '../../../../settings/routes/RouteActions'

export default function ScheduleAppointmentDialog({ visible, onClose, navigation }) {
  const [selectedAppointmentType, setSelectedAppointmentType] = useState('');
  const datas = [
    { key: '1', value: 'Check-up' },
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

  const handleInsertMedicalRecord = () => {
    push(navigation, RouteKeys.selectClinicScreen);
    onClose();
  };
  return (
    <AppDialog
      visible={visible}
      animationType='fade'
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
      <ButtonSelecter
        selected={selectedAppointmentType}
        handleTabSelected={handleTabSelected}
        mainColor={AppColors.lightBlue}
        haslabel={true}
        label={'Qual o nível da consulta'}
        buttonList={AppointmentLevelsButtons}
        spacing={21}
      />
      <Spacing height={20} />
      <AppInput hasLabel={true} lable={'Informe a localização desejada'} hint={'Informe a localização'} onEdit={() => { }} />
      <Spacing height={30} />
      <AppButton textButton={translate(AppLocalizations.continueButton)} onTap={handleInsertMedicalRecord} />
      <Spacing height={30} />
      <LinkButton text={'Cancelar'} onTap={onClose} />
    </AppDialog>
  )
}