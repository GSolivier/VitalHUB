import React, { useState } from 'react'
import HomeContainer from '../widgets/HomeContainer'
import { AppAssets } from '../../assets/AppAssets'
import HomeTopButtons from '../widgets/HomeTopButtons'
import HomeCard from '../widgets/HomeCard'
import { HomeCardActionType } from '../../settings/AppEnums'
import HomeCalendar from '../widgets/HomeCalendar'
import CancelExamDialog from '../widgets/CancelExamDialog'
import { Spacing } from '../../components/Container'
import AppointmentList from '../widgets/AppointmentList'

export default function HomeScreenDoctor({navigation}) {
  const [selectedTab, setSelectedTab] = useState(1);
  const [cancelModalIsVisible, setCancelModalIsVisible] = useState(false)

  const handleTabSelected = (value) => {
    setSelectedTab(value);
  };
  return (
    <HomeContainer name={'Dr. Claudio'} imagePath={AppAssets.placeholder}>
    <HomeCalendar/>
    <Spacing height={20}/>
    <HomeTopButtons selected={selectedTab} handleTabSelected={handleTabSelected}/>
    <Spacing height={20}/>
      <AppointmentList/>
       <CancelExamDialog visible={cancelModalIsVisible} onClose={() => setCancelModalIsVisible(false)}/>
    </HomeContainer>
  )
}