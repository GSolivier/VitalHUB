import React, { useState } from 'react'
import { Container, Spacing } from '../../components/Container'
import { TitleMedium } from '../../settings/AppFonts'
import AppButton, { LinkButton } from '../../components/AppButton'
import translate from '../../locale'
import AppLocalizations from '../../settings/AppLocalizations'
import { ClinicListData } from '../../settings/AppUtils'
import ClinicList from './widgets/ClinicList'
import { pop } from '../../settings/routes/RouteActions'

export default function SelectClinic({navigation}) {
  const [selected, setSelected] = useState({ id: 0});

    const selectClinic = (clinic) => {
      setSelected(clinic)
    }
  return (
    <Container>
      <TitleMedium>{translate(AppLocalizations.selectClinic)}</TitleMedium>
      <Spacing height={35}/>
      <ClinicList
        DATA={ClinicListData}
        tapAction={selectClinic}
        selected={selected}
      />
      <Spacing height={30}/>
      <AppButton textButton={translate(AppLocalizations.continueButton).toUpperCase()}/>
      <Spacing height={30}/>
      <LinkButton text={translate(AppLocalizations.cancel)} onTap={() => pop(navigation)}/>
    </Container>
  )
}