import React, { useEffect, useState } from 'react'
import { Container, Spacing } from '../../components/Container'
import AppLocalizations from '../../settings/AppLocalizations'
import { TitleMedium } from '../../settings/AppFonts'
import translate from '../../locale'
import AppButton, { LinkButton } from '../../components/AppButton'
import { pop } from '../../settings/routes/RouteActions'
import AppDropdown from '../../components/AppDropdown'
import { Calendar } from 'react-native-calendars'
import SelectDateCalendar from './widgets/SelectDateCalendar'


export default function SelectDate({ navigation }) {
  const datas = [
    { key: '1', value: '10:00' },
    { key: '2', value: '11:00' },
    { key: '3', value: '12:00' },
    { key: '4', value: '13:00' },
    { key: '5', value: '14:00' },
    { key: '6', value: '15:00' },
    { key: '7', value: '16:00' },
    { key: '8', value: '17:00' },
  ]

  const [time, setTime] = useState()

  return (
    <Container>
      <TitleMedium>{translate(AppLocalizations.selectDate)}</TitleMedium>
      <Spacing height={35} />
      <SelectDateCalendar />
      <Spacing height={30} />

      <AppDropdown
        hasLabel={true}
        handleValueSelected={setTime}
        label={translate(AppLocalizations.selectAvailableTimeLabel)}
        placeholder={translate(AppLocalizations.selectAvailableTimeHint)}
        data={datas}
      />

      <Spacing height={42} />
      <AppButton textButton={translate(AppLocalizations.confirm).toUpperCase()} />
      <Spacing height={30} />
      <LinkButton text={translate(AppLocalizations.cancel)} onTap={() => pop(navigation)} />
    </Container>
  )
}