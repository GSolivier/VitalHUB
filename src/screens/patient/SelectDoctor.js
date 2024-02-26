import React, { useState } from 'react'
import { Container, Spacing } from '../../components/Container'
import AppLocalizations from '../../settings/AppLocalizations'
import { TitleMedium } from '../../settings/AppFonts'
import translate from '../../locale'
import AppButton, { LinkButton } from '../../components/AppButton'
import { RouteKeys, pop, push } from '../../settings/routes/RouteActions'
import DoctorCard from './widgets/DoctorCard'
import { DOCTORS_DATA } from '../../settings/AppUtils'
import DoctorList from './widgets/DoctorList'

export default function SelectDoctor({navigation}) {
  const [selected, setSelected] = useState({ id: 0});

  const selectDoctor = (doctor) => {
    setSelected(doctor)
  }
  return (
    <Container>
    <TitleMedium>{translate(AppLocalizations.selectDoctor)}</TitleMedium>
    <Spacing height={35}/>
    <DoctorList
      DATA={DOCTORS_DATA}
      tapAction={selectDoctor}
      selected={selected}
    />
    <Spacing height={30}/>
    <AppButton textButton={translate(AppLocalizations.continueButton).toUpperCase()} onTap={() => push(navigation, RouteKeys.selectDateScreen)}/>
    <Spacing height={30}/>
    <LinkButton text={translate(AppLocalizations.cancel)} onTap={() => pop(navigation)}/>
  </Container>
  )
}