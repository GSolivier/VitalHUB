import React, { useState } from 'react'
import { Container, Spacing } from '../../components/Container'
import { TitleMedium } from '../../settings/AppFonts'
import AppButton, { LinkButton } from '../../components/AppButton'
import translate from '../../locale'
import AppLocalizations from '../../settings/AppLocalizations'
import { ClinicListData } from '../../settings/AppUtils'
import ClinicList from './widgets/ClinicList'

export default function SelectClinic() {
  const [selected, setSelected] = useState();

    const selectClinic = (clinic) => {
      setSelected(clinic)
    }
  return (
    <Container>
      <TitleMedium>Selecionar Clinica</TitleMedium>
      <Spacing height={35}/>
      <ClinicList
        DATA={ClinicListData}
        tapAction={selectClinic}
        selected={selected}
      />
      <Spacing height={30}/>
      <AppButton textButton={translate(AppLocalizations.continueButton).toUpperCase()}/>
      <LinkButton text={translate(AppLocalizations.cancel)}/>
    </Container>
  )
}