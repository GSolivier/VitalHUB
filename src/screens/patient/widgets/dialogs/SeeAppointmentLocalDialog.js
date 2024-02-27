import React from 'react'
import AppDialog from '../../../../components/AppDialog'
import { RouteKeys, push } from '../../../../settings/routes/RouteActions';
import { Row, Spacing } from '../../../../components/Container';
import { TextSmall, TitleMedium } from '../../../../settings/AppFonts';
import { Flex, TextAlign, TextDecoration } from '../../../../settings/AppEnums';
import AppLocalizations from '../../../../settings/AppLocalizations';
import translate from '../../../../locale';
import AppButton, { LinkButton } from '../../../../components/AppButton';
import styled from 'styled-components';

const ImageModal = styled.Image`
    width: 100%;
    height: 40%;
    border-radius: 10px;
`

export default function SeeAppointmentLocalDialog({ visible, onClose, appointment, navigation }) {

  if (!appointment) {
    return null;
  }
  const handleInsertMedicalRecord = () => {
    push(navigation, RouteKeys.seeAppointmentLocalScreen, { appointment: appointment });
    onClose();
  };
  return (
    <AppDialog
      visible={visible}
      flex={0.6}
    >
            <ImageModal source={{ uri: appointment.imagePath }} />
            <Spacing height={20} />
            <TitleMedium textAlign={TextAlign.center} size={20}>{appointment.name}</TitleMedium>
            <Spacing height={15} />
            <Row >

                <TextSmall textAlign={TextAlign.center}>{appointment.specialty}</TextSmall>
                <Spacing width={20}/>
                <TextSmall textAlign={TextAlign.center}>CRM-{appointment.crm}</TextSmall>
            </Row>
            <Spacing height={30} />
            <AppButton textButton={translate(AppLocalizations.seeAppointmentLocal).toUpperCase()}
                onTap={handleInsertMedicalRecord}/>
            <Spacing height={30} />
            <LinkButton
                text={translate(AppLocalizations.cancel)}
                textDecoration={TextDecoration.underline}
                alignSelf={Flex.alignSelf.center}
                onTap={onClose}
            />
    </AppDialog>
  )
}